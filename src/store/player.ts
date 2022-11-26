import { Fighter, MyCreateSlice, Stat, Stats } from "../shared/types";

export interface PlayerSlice {
  fighter: Fighter,
}

const startingStats: Stats = {
  [Stat.Health]: 10,
  [Stat.Damage]: 2,
  [Stat.AttackSpeed]: 0.5,
  [Stat.Armor]: 0.5,
};

const createPlayerSlice: MyCreateSlice<PlayerSlice, []> = (set, get) => {
  return {
    fighter: {
      name: "Player",
      baseStats: startingStats,
      health: startingStats.health!,
      attackCooldown: 0,
    }
  };
};

export default createPlayerSlice;