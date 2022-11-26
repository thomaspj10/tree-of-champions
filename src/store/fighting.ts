import { Champion, Fighter, MyCreateSlice } from "../shared/types";

export interface FightingSlice {
  player: Fighter | null,
  championFighter: Fighter | null,
  champion: Champion | null,

  startFight: (player: Fighter, champion: Champion) => void, 
}

const createFightingSlice: MyCreateSlice<FightingSlice, []> = (set, get) => {
  return {
    player: null,
    championFighter: null,
    champion: null,

    startFight: (player, champion) => {
      set({player, champion, championFighter: {
        name: champion.name,
        baseStats: champion.stats,
        health: champion.stats.health ?? 0,
        attackCooldown: 0,
      }})
    },
  };
};

export default createFightingSlice;