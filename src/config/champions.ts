import { Champion } from "../shared/types";

const champions: Record<string, Champion> = {
  'rat': {
    id: '',
    name: 'Rat',
    spriteSheet: 'Spider_16x16.png',
    stats: {
      health: 40,
      damage: 5,
      attackSpeed: 0.5,
      armor: 0,
    }, 
    earnedStats: {
      health: 5,
    },
  },
  'bat': {
    id: '',
    name: 'Bat',
    spriteSheet: 'Spider_16x16.png',
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
      damage: -0.75,
    }
  },
  'ghost': {
    id: '',
    name: 'Ghost',
    spriteSheet: 'Ghost_16x16.png',
    stats: {
      health: 80,
      damage: 2,
      attackSpeed: 2,
      lifeSteal: 5,
    },
    earnedStats: {
      lifeSteal: 0.5,
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
  'beast': {
    id: '',
    name: 'Beast',
    spriteSheet: 'Creature_16x16.png',
    stats: {
      health: 100,
      damage: 15,
      attackSpeed: 0.25,
      armor: 5,
      stunChance: 50,
    },
    earnedStats: {
      stunChance: 2,
      attackSpeed: -0.05,
    }
  },
  'shadow': {
    id: '',
    name: 'Shadow',
    spriteSheet: 'Shadow_16x16.png',
    stats: {
      health: 200,
      damage: 6,
      attackSpeed: 1.1,
      armor: 2,
      lifeSteal: 5,
    },
    earnedStats: {
      lifeSteal: 0.5,
      damage: -0.5,
    }
  },
  'beholder': {
    id: '',
    name: 'Beholder',
    spriteSheet: 'Beholder_16x16.png',
    stats: {
      health: 200,
      damage: 15,
      attackSpeed: 0.5,
      armor: 5,
      critChance: 0.5,
    },
    earnedStats: {
      health: -7.5,
      damage: 2,
    }
  },
  'witch': {
    id: '',
    name: 'Witch',
    spriteSheet: '',
    stats: {
      health: 75,
      damage: 3,
      attackSpeed: 5,
      stunChance: 5,
      armor: 2,
    },
    earnedStats: {
      health: 10,
      damage: -0.25,
    }
  },
  'knight': {
    id: '',
    name: 'Knight',
    spriteSheet: '',
    stats: {
      health: 150,
      damage: 20,
      attackSpeed: 0.3,
      armor: 5,
    },
    earnedStats: {
      armor: 0.5,
      health: -10,
    }
  },
  'flock_of_bats': {
    id: '',
    name: 'Flock of bats',
    spriteSheet: '',
    stats: {
      health: 50,
      damage: 35,
      attackSpeed: 2,
    },
    earnedStats: {
      damage: 1.5,
      lifeSteal: -0.25,
    }
  },
  'prince': {
    id: '',
    name: 'Prince',
    spriteSheet: '',
    stats: {
      health: 350,
      damage: 25,
      attackSpeed: 1,
      armor: 5
    },
    earnedStats: {
      critChance: 0.5,
      health: 2
    }
  },
  'prince_of_darkness': {
    id: '',
    name: 'Prince of darkness',
    spriteSheet: '',
    stats: {
      health: 500,
      damage: 35,
      attackSpeed: 1.5,
      armor: 10
    },
    earnedStats: {
      damage: 5,
      health: 25
    }
  },
  'the_devil': {
    id: '',
    name: 'The devil',
    spriteSheet: '',
    stats: {
      health: 1000,
      damage: 50,
      attackSpeed: 1.25,
      armor: 10
    },
    earnedStats: {
      damage: 5,
      health: 25
    }
  },
  'god': {
    id: '',
    name: 'DEATH',
    spriteSheet: '',
    stats: {
      health: 2000,
      damage: 75,
      attackSpeed: 1.5,
      armor: 20,
      lifeSteal: 5,
    },
    earnedStats: {
    }
  }
};

Object.keys(champions)
  .forEach((c) => {
    const champ = champions[c];
    champ.id = c;
  });

export default champions;
