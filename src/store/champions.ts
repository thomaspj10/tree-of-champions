import champions from "../config/champions";
import { Champion, ChosenChampion, Fighter, MyCreateSlice } from "../shared/types";

export interface ChampionNode {
  champion: Champion,
  completed: boolean,
  locked: boolean,
}

export interface ChampionsSlice {
  championRows: ChampionNode[][],

  championDefeated: (chosen: ChosenChampion) => void,
}

const rows = [
  ['rat'],
  ['bat', 'spider'],
];

const createChampionsSlice: MyCreateSlice<ChampionsSlice, []> = (set, get) => {
  return {
    championRows: rows.map((row, r) => 
      row.map((id, i) => ({
        champion: champions[id],
        completed: false,
        locked: (r !== 0 || i !== 0),
      }))
    ),

    championDefeated: (chosen) => {
      const newRows = [...get().championRows];
      const newChampionNode = newRows?.[chosen.row]?.[chosen.index] ?? null;
      if (!newChampionNode) return;

      newChampionNode.completed = true;
      if (newRows.length > chosen.row + 1) {
        newRows[chosen.row + 1][chosen.index].locked = false;
        newRows[chosen.row + 1][chosen.index + 1].locked = false;
      }

      set({championRows: newRows});
    },
  };
};

const NOT_FOUND = "NOT_FOUND";
function unlockNode(map: Record<string, ChampionNode>, row: number, index: number) {
  const champId = rows?.[row]?.[index] ?? NOT_FOUND;
  if (!map[champId]) {
    return;
  }

  map[champId].locked = false;
}

export default createChampionsSlice;