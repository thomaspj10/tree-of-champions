import { StoreApi } from "zustand";

export enum Stat {
  Health = "health",
  Damage = "damage",
  AttackSpeed = "attackSpeed",
  Armor = "armor",
}

export interface Stats {
  health: number,
  damage: number,
  attackSpeed: number,
  armor: number,
}

export function getEmptyStats(): Stats {
  return {
    [Stat.Health]: 0,
    [Stat.Damage]: 0,
    [Stat.AttackSpeed]: 0,
    [Stat.Armor]: 0,
  };
}

export interface Champion {
  id: string,
  name: string,
  stats: Stats,
  earnedStats: Partial<Stats>,
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