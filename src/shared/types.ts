import { StoreApi } from "zustand";

export enum Stat {
  Health = "health",
  Damage = "damage",
  AttackSpeed = "attackSpeed",
}

export enum OtherStat {
  Armor = "armor",
  DodgeChance = "dodgeChance",
  LifeSteal = "lifeSteal",
  HealOnKill = "healOnKill",
  CritChance = "critChance",
  Poison = "poison",
  StunChance = "stunChance",
}

export type Stats = Record<Stat, number>;

export type EarnedStats = Partial<AllStats>;

export type AllStats = Stats & Partial<Record<OtherStat, number>>;

export function getEmptyStats(): AllStats {
  return {
    [Stat.Health]: 0,
    [Stat.Damage]: 0,
    [Stat.AttackSpeed]: 0,
  };
}

export interface Champion {
  id: string,
  name: string,
  stats: AllStats,
  earnedStats: EarnedStats,
}

export interface ChosenChampion {
  champion: Champion,
  row: number,
  index: number,
}

export interface Fighter {
  name: string,
  baseStats: Stats,
  health: number,
  attackCooldown: number,
}

export type Lens<T> = [set: StoreApi<T>['setState'], get: StoreApi<T>['getState']];

export type MyCreateSlice<T, A extends (() => any)[]> =
  (set: StoreApi<T>['setState'], get: StoreApi<T>['getState'], ...args: A) => T