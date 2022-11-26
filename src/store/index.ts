import { createLens } from "@dhmk/zustand-lens";
import create from "zustand";
import createChampionsSlice, { ChampionsSlice } from "./champions";
import createFightingSlice, { FightingSlice } from "./fighting";
import createPlayerSlice, { PlayerSlice } from "./player";

export type FullStore = {
  player: PlayerSlice,
  champions: ChampionsSlice,
  fighting: FightingSlice,
}

const useStore = create<FullStore>((set, get) => {
  const player = createLens(set, get, 'player');
  const champions = createLens(set, get, 'champions');
  const fighting = createLens(set, get, 'fighting');

  return {
    player: createPlayerSlice(...player),
    champions: createChampionsSlice(...champions),
    fighting: createFightingSlice(...fighting, player[1], champions[1]),
  }
});

export default useStore;