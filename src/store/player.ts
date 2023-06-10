import { Fighter, MyCreateSlice, Stat, Stats } from "../shared/types";
import { mergeSumPartial } from "../shared/utils";
import { SAVE_KEY } from "../shared/constants"

export interface PlayerSlice {
  fighter: Fighter,

  wonFight: (newFighter: Fighter, stats: Stats) => void,
  lostFight: () => void,
}

const startingStats: Stats = localStorage.getItem(SAVE_KEY) === null ? {
  [Stat.Health]: 100,
  [Stat.Damage]: 10,
  [Stat.AttackSpeed]: 0.25,
  [Stat.CritChance]: 5,
} : JSON.parse(localStorage.getItem(SAVE_KEY) ?? "") as Stats

const createPlayerSlice: MyCreateSlice<PlayerSlice, []> = (set, get) => {
  return {
    fighter: {
      name: "Player",
      spriteSheet: 'Bear_16x16.png',
      baseStats: startingStats,
      health: startingStats.health!,
      attackCooldown: 0,
      statusEffects: {},
    },

    wonFight: (newFighter, stats) => {
      const fighter = get().fighter;
      const newBaseStats = mergeSumPartial(fighter.baseStats, stats)

      localStorage.setItem(SAVE_KEY, JSON.stringify(newBaseStats));

      set({fighter: {
        ...newFighter,
        baseStats: newBaseStats,
        health: newFighter.health + (stats.health ?? 0),
        attackCooldown: 0,
        statusEffects: {},
      }});
    },

    lostFight: () => {
      const fighter = get().fighter;
      set({fighter: {
        ...fighter,
        health: fighter.baseStats.health ?? 0,
        attackCooldown: 0,
        statusEffects: {},
      }});
    }
  };
};

export default createPlayerSlice;