import { ItemLocation } from "../enums/ItemLocation";
import { ItemType } from "../enums/ItemType";
import { WearType } from "../enums/WearType";
import { OngoingEffect, ImmediateEffect } from "./effect";

export type Item = {
  name: string;
  description?: string;
  equippedEffects?: OngoingEffect[];
  consumedEffect?: ImmediateEffect;
  singleUse: boolean;
  slots: number;
  stackable?: boolean;
  wearType?: WearType;
  defaultCost?: number;
  itemType?: ItemType;
};

// Persisted per character: a player's decision, not catalog data.
export type InventoryStack = {
  id: string;
  name: string;
  location: ItemLocation;
  quantity: number;
  index?: number;
  storageLocation?: string;
  custom?: Omit<Item, "name">;
};

// A stack resolved against the catalog (or its custom payload) for reading.
export type CharacterItem = Item & {
  id: string;
  location: ItemLocation;
  quantity: number;
  index?: number;
  storageLocation?: string;
};
