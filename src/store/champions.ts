import { mapValues } from "lodash";
import champions from "../config/champions";
import { Champion, Fighter, MyCreateSlice } from "../shared/types";

export interface ChampionNode {
  champion: Champion,
  completed: boolean,
  locked: boolean,
}

export interface ChampionsSlice {
  championMap: Record<string, ChampionNode>,
  championRows: string[][],
  fightingChampion: Fighter | null,

  fightChampion: (id: string) => void,
}

const createChampionsSlice: MyCreateSlice<ChampionsSlice, []> = (set, get) => {
  return {
    championMap: mapValues(champions, (c) => ({
      champion: c,
      completed: false,
      locked: true,
    })),
    championRows: [
      ['rat'],
      ['bat', 'spider'],
      ['bat', 'rat', 'spider']
    ],
    fightingChampion: null,

    fightChampion: (id) => {
      const champ = get().championMap[id].champion;
      set({fightingChampion: {
        name: champ.name,
        baseStats: champ.stats,
        health: champ.stats.health ?? 0,
        attackCooldown: 0,
      }});
    },

    championKilled: () => {
      set({fightingChampion: null});
    }
  };
};

export default createChampionsSlice;