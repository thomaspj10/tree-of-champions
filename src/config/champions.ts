import { Champion } from "../shared/types";

const champions: Record<string, Champion> = {
  'rat': {
    id: '',
    name: 'Rat',
    spriteSheet: '',
    stats: {
      health: 40,
      damage: 5,
      attackSpeed: 0.5,
      armor: 0,
    }, 
    earnedStats: {
      health: 2,
    },
  },
  'bat': {
    id: '',
    name: 'Bat',
    spriteSheet: '',
    stats: {
      health: 30,
      damage: 3,
      attackSpeed: 1,
      armor: 0,
    },
    earnedStats: {
      damage: 1,
    }
  },
  'spider': {
    id: '',
    name: 'Spider',
    spriteSheet: 'Spider_16x16.png',
    stats: {
      health: 25,
      damage: 2,
      attackSpeed: 2,
    },
    earnedStats: {
      attackSpeed: 0.05,
    }
  },
  'skeleton': {
    id: '',
    name: 'Skeleton',
    spriteSheet: '',
    stats: {
      health: 50,
      damage: 5,
      attackSpeed: 0.75,
      armor: 4,
    },
    earnedStats: {
      armor: 0.25,
      health: -2,
    }
  },
  'flockOfBats': {
    id: '',
    name: 'Flock of Bats',
    spriteSheet: '',
    stats: {
      health: 80,
      damage: 2,
      attackSpeed: 2,
      lifeSteal: 0.5,
    },
    earnedStats: {
      lifeSteal: 0.05,
      health: -5,
    }
  },
  'python': {
    id: '',
    name: 'Giant Python',
    spriteSheet: '',
    stats: {
      health: 60,
      damage: 1,
      attackSpeed: 0.5,
      poison: 2.5,
    },
    earnedStats: {
      poison: 0.25,
      damage: -0.75,
    }
  },
  'ogre': {
    id: '',
    name: 'Ogre',
    spriteSheet: '',
    stats: {
      health: 100,
      damage: 5,
      attackSpeed: 0.25,
      armor: 1,
      stunChance: 50,
    },
    earnedStats: {
      stunChance: 10,
      attackSpeed: -0.05,
    }
  },
};

Object.keys(champions)
  .forEach((c) => {
    const champ = champions[c];
    champ.id = c;
  });

export default champions;
