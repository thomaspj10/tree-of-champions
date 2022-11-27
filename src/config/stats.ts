import { Stat } from "../shared/types";

const statsConfig: Record<Stat, {label: string, icon: string}> = {
  [Stat.Health]: {
    label: "Health",
    icon: 'heart',
  },
  [Stat.Damage]: {
    label: "Damage",
    icon: 'skull',
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
    icon: 'cracked_heart',
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