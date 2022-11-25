import { Fighter, getEmptyStats, MyCreateSlice, Stat, Stats } from "../shared/types";
import { mergeSumPartial } from "../shared/utils";

export interface PlayerSlice {
  fighter: Fighter,
}

const startingStats: Partial<Stats> = {
  [Stat.Health]: 10,
  [Stat.Damage]: 2,
  [Stat.AttackSpeed]: 0.5,
};

const createPlayerSlice: MyCreateSlice<PlayerSlice, []> = (set, get) => {
  return {
    fighter: {
      name: "Player",
      baseStats: mergeSumPartial(getEmptyStats(), startingStats),
      health: startingStats.health!,
      attackCooldown: 0,
    }
  };
};

export default createPlayerSlice;