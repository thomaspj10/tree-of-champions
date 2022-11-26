import { faFighterJet } from "@fortawesome/free-solid-svg-icons";
import { EarnedStats, Fighter, MyCreateSlice, Stat, Stats } from "../shared/types";
import { mergeSumPartial } from "../shared/utils";

export interface PlayerSlice {
  fighter: Fighter,

  wonFight: (newFighter: Fighter, stats: EarnedStats) => void,
  lostFight: () => void,
}

const startingStats: Stats = {
  [Stat.Health]: 10,
  [Stat.Damage]: 2,
  [Stat.AttackSpeed]: 0.5,
};

const createPlayerSlice: MyCreateSlice<PlayerSlice, []> = (set, get) => {
  return {
    fighter: {
      name: "Player",
      baseStats: startingStats,
      health: startingStats.health!,
      attackCooldown: 0,
    },

    wonFight: (newFighter, stats) => {
      set({fighter: {
        ...newFighter,
        baseStats: mergeSumPartial(get().fighter.baseStats, stats),
        attackCooldown: 0,
      }});
    },

    lostFight: () => {
      const fighter = get().fighter;
      set({fighter: {
        ...fighter,
        health: fighter.baseStats.health,
        attackCooldown: 0,
      }});
    }
  };
};

export default createPlayerSlice;