import { Champion, ChosenChampion, Fighter, MyCreateSlice } from "../shared/types";
import { ChampionsSlice } from "./champions";
import { PlayerSlice } from "./player";

export interface ChampionFighter extends ChosenChampion {
  fighter: Fighter,
} 

export interface FightingSlice {
  player: Fighter | null,
  championFighter: ChampionFighter | null,

  startFight: (player: Fighter, champion: Champion, row: number, index: number) => void, 
  update: (elapsed: number) => void,
}

const createFightingSlice: MyCreateSlice<FightingSlice, [() => PlayerSlice, () => ChampionsSlice]>
= (set, get, playerStore, championsStore) => {
  return {
    player: null,
    championFighter: null,
    champion: null,

    startFight: (player, champion, row, index) => {
      set({player, championFighter: {
        champion: champion,
        fighter: {
          name: champion.name,
          baseStats: champion.stats,
          health: champion.stats.health ?? 0,
          attackCooldown: 0,
          statusEffects: {},
        },
        row, index,
      }})
    },
    
    update: (elapsed) => {
      const {player, championFighter} = get();
      if (!player || !championFighter) return;

      updateFighter(elapsed, player, championFighter.fighter);
      if (championFighter.fighter.health <= 0) {
        playerStore().wonFight(player, championFighter.champion.earnedStats);
        championsStore().championDefeated(championFighter);
        set({player: null, championFighter: null});
        return;
      }

      updateFighter(elapsed, championFighter.fighter, player);
      if (player.health <= 0) {
        playerStore().lostFight();
        championsStore().reset();
        set({player: null, championFighter: null});
        return;
      }

      set({player: {...player}, championFighter: {...championFighter}});
    },
  };
};

function updateFighter(elapsed: number, fighter: Fighter, opponent: Fighter) {
  const attackTime = (1 / (fighter.baseStats.attackSpeed ?? 0));
  if (fighter.attackCooldown >= attackTime) {
    fighter.attackCooldown += elapsed;
    return;
  }
  
  fighter.attackCooldown = 0;

  let damage = fighter.baseStats.damage ?? 0;
  if (opponent.baseStats.armor) {
    damage -= opponent.baseStats.armor;
  }
  opponent.health -= damage;

  if (fighter.baseStats.lifeSteal) {
    fighter.health = Math.min(fighter.health + damage * fighter.baseStats.lifeSteal, fighter.baseStats.health ?? 0);
  }

  if (fighter.baseStats.poison) {
    
  }
}

export default createFightingSlice;