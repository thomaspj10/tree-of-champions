import { getEmptyStats, MyCreateSlice, Stat, Stats } from "../shared/types";
import { mergeSumPartial } from "../shared/utils";

export interface PlayerSlice {
  stats: Stats,
}

const startingStats: Partial<Stats> = {
  [Stat.Health]: 10,
  [Stat.Damage]: 2,
  [Stat.AttackSpeed]: 0.5,
};

const createPlayerSlice: MyCreateSlice<PlayerSlice, []> = (set, get) => {
  return {
    stats: mergeSumPartial(getEmptyStats(), startingStats),
  };
};

export default createPlayerSlice;