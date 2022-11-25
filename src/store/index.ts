import { createLens } from "@dhmk/zustand-lens";
import create from "zustand";
import createChampionsSlice, { ChampionsSlice } from "./champions";
import createPlayerSlice, { PlayerSlice } from "./player";

export type FullStore = {
  player: PlayerSlice,
  champions: ChampionsSlice,
}

const useStore = create<FullStore>((set, get) => {
  const player = createLens(set, get, 'player');
  const champions = createLens(set, get, 'champions');

  return {
    player: createPlayerSlice(...player),
    champions: createChampionsSlice(...champions),
  }
});

export default useStore;