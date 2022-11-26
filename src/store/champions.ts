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
  reset: () => void,
}

const rows = [
  ['rat'],
  ['bat', 'spider'],
];

const createChampionsSlice: MyCreateSlice<ChampionsSlice, []> = (set, get) => {
  return {
    championRows: getInitialRows(),

    championDefeated: (chosen) => {
      const newRows = [...get().championRows];
      const newChampionNode = newRows?.[chosen.row]?.[chosen.index] ?? null;
      if (!newChampionNode) return;

      newChampionNode.completed = true;
      newRows[chosen.row].forEach((node, i) => {
        if (i === chosen.index) return;

        node.locked = true;
      })
      if (newRows.length > chosen.row + 1) {
        newRows[chosen.row + 1][chosen.index].locked = false;
        newRows[chosen.row + 1][chosen.index + 1].locked = false;
      }

      set({championRows: newRows});
    },

    reset: () => {
      set({championRows: getInitialRows()});
    },
  };
};

function getInitialRows() {
  return rows.map((row, r) => 
    row.map((id, i) => ({
      champion: champions[id],
      completed: false,
      locked: (r !== 0 || i !== 0),
    }))
  );
}

export default createChampionsSlice;