import { Champion } from "../shared/types";

const champions: Record<string, Champion> = {
  'rat': {
    id: '',
    name: 'Rat',
    stats: {
      health: 5,
      damage: 1,
      attackSpeed: 1,
      armor: 0,
    }, 
    earnedStats: {
      damage: 0.1,
    },
  },
  'bat': {
    id: '',
    name: 'Bat',
    stats: {
      health: 6,
      damage: 0.5,
      attackSpeed: 1,
      armor: 0,
    },
    earnedStats: {
      health: 0.5,
    }
  },
  'spider': {
    id: '',
    name: 'Spider',
    stats: {
      health: 4,
      damage: 0.5,
      attackSpeed: 2,
      armor: 0,
    },
    earnedStats: {
      attackSpeed: 0.05,
    }
  },
  'skeleton': {
    id: '',
    name: 'Skeleton',
    stats: {
      health: 20,
      damage: 2,
      attackSpeed: 0.75,
      armor: 1,
    },
    earnedStats: {
      armor: 0.25,
    }
  },
  'flockOfBats': {
    id: '',
    name: 'Flock of Bats',
    stats: {
      health: 12,
      damage: 1,
      attackSpeed: 2,
      armor: 0,
    },
    earnedStats: {
      lifeSteal: 0.05,
    }
  },
  'python': {
    id: '',
    name: 'Giant Python',
    stats: {
      health: 30,
      damage: 1,
      attackSpeed: 0.5,
      armor: 0,
      poison: 1,
    },
    earnedStats: {
      poison: 0.1,
    }
  },
  'ogre': {
    id: '',
    name: 'Ogre',
    stats: {
      health: 100,
      damage: 5,
      attackSpeed: 0.25,
      armor: 1,
      stunChance: 0.5,
    },
    earnedStats: {
      stunChance: 0.1,
    }
  },
};

Object.keys(champions)
  .forEach((c) => {
    const champ = champions[c];
    champ.id = c;
  });

export default champions;
