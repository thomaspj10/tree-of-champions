import { Stat } from "../shared/types";

const statsConfig: Record<Stat, {label: string, icon: string}> = {
  [Stat.Health]: {
    label: "Health",
    icon: 'heart',
  },
  [Stat.Damage]: {
    label: "Damage",
    icon: 'sword',
  },
  [Stat.AttackSpeed]: {
    label: "Attack Speed",
    icon: 'hourglass',
  },
  [Stat.Armor]: {
    label: "Armor",
    icon: 'shield',
  },
  [Stat.LifeSteal]: {
    label: "Lifesteal",
    icon: 'lifesteal',
  },
  [Stat.HealOnKill]: {
    label: "Heal on Kill",
    icon: 'craked_heart',
  },
  [Stat.CritChance]: {
    label: "Crit Chance",
    icon: 'heart_arrow',
  },
  [Stat.DodgeChance]: {
    label: "Dodge Chance",
    icon: 'hourglass',
  },
  [Stat.Poison]: {
    label: "Poison",
    icon: 'green_liquid',
  },
  [Stat.StunChance]: {
    label: "Stun Chance",
    icon: 'fire',
  },
};

export default statsConfig;