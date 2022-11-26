import { Champion, Fighter, MyCreateSlice } from "../shared/types";

export interface FightingSlice {
  player: Fighter | null,
  championFighter: Fighter | null,
  champion: Champion | null,

  startFight: (player: Fighter, champion: Champion) => void, 
  update: (elapsed: number) => void,
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
        health: champion.stats.health,
        attackCooldown: 0,
      }})
    },
    
    update: (elapsed) => {
      const {player, championFighter, champion} = get();
      if (!player || !championFighter) return;

      const newPlayer = updateFighter(elapsed, player, championFighter);
      const newChamp = updateFighter(elapsed, championFighter, player);

      set({player: newPlayer, championFighter: newChamp});
    },
  };
};

function updateFighter(elapsed: number, fighter: Fighter, opponent: Fighter) {
  const newFighter = {...fighter};
  const attackTime = (1/newFighter.baseStats.attackSpeed);
  if (newFighter.attackCooldown >= attackTime) {
    newFighter.attackCooldown = 0;
  } else {
    newFighter.attackCooldown += elapsed;
  }
  return newFighter;
}

export default createFightingSlice;