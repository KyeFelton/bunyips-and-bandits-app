import { ItemLocation } from "../enums/ItemLocation";
import * as Items from "../data/items";
import { CharacterItem, InventoryStack, Item } from "../models/items";

// Catalog

const isItem = (value: unknown): value is Item =>
  typeof value === "object" &&
  value !== null &&
  "name" in value &&
  "slots" in value;

// Some catalog modules export several items via a namespace (e.g. PortalStone),
// so flatten one level deep into a name-keyed lookup.
const buildCatalog = (): Record<string, Item> => {
  const catalog: Record<string, Item> = {};

  for (const value of Object.values(Items)) {
    if (isItem(value)) {
      catalog[value.name] = value;
    } else if (typeof value === "object" && value !== null) {
      for (const nested of Object.values(value)) {
        if (isItem(nested)) {
          catalog[nested.name] = nested;
        }
      }
    }
  }

  return catalog;
};

const itemCatalog = buildCatalog();

export const catalogItems = Object.values(itemCatalog).sort((a, b) =>
  a.name.localeCompare(b.name)
);

export const getCatalogItem = (name: string): Item | undefined =>
  itemCatalog[name];

const fallbackItem = (name: string): Item => ({
  name,
  description: "",
  singleUse: false,
  slots: 1,
});

export const resolveStack = (stack: InventoryStack): CharacterItem => {
  const base: Item = stack.custom
    ? { name: stack.name, ...stack.custom }
    : itemCatalog[stack.name] ?? fallbackItem(stack.name);

  return {
    ...base,
    id: stack.id,
    location: stack.location,
    quantity: stack.quantity,
    index: stack.index,
    storageLocation: stack.storageLocation,
  };
};

// Slot positions and capacity

export const CLOTHES_INDEX = 0;
export const ACCESSORY_INDICES = [1, 2, 3];
export const ACCESSORY_SLOT_COUNT = ACCESSORY_INDICES.length;
export const LEFT_HAND_INDEX = 0;
export const RIGHT_HAND_INDEX = 1;
export const HAND_SLOT_COUNT = 2;

export type SlotDisplayRow = {
  slotIndex: number;
  label: string;
  isLabelOnly: boolean;
  rowSpan: number;
  rowUnits: number;
  itemName?: string;
  displayName?: string;
  item?: CharacterItem;
  stackId?: string;
};

export type AddItemTarget = {
  location: ItemLocation;
  index?: number;
};

type SlottedItem = { slots: number; quantity: number };

// Item measures

export const isPartialSlotItem = (item: { slots: number }): boolean =>
  item.slots < 1;

// How many units of a partial-slot item fit in a single backpack slot.
export const unitsPerSlot = (item: { slots: number }): number =>
  isPartialSlotItem(item) ? Math.max(1, Math.round(1 / item.slots)) : 1;

// Backpack slots consumed by a single stack.
export const slotCost = (item: SlottedItem): number =>
  isPartialSlotItem(item) ? 1 : item.slots * item.quantity;

export const getCarriedSlotUsage = (items: CharacterItem[]): number =>
  items
    .filter((item) => item.location === ItemLocation.Carried)
    .reduce((total, item) => total + slotCost(item), 0);

// Capacity checks

export const canFitInBackpack = (
  item: SlottedItem,
  items: CharacterItem[],
  capacity: number
): boolean => getCarriedSlotUsage(items) + slotCost(item) <= capacity;

export const canHoldItem = (
  item: { slots: number },
  items: CharacterItem[]
): boolean => {
  const usedHands = items
    .filter((held) => held.location === ItemLocation.Held)
    .reduce((total, held) => total + (held.slots >= HAND_SLOT_COUNT ? 2 : 1), 0);
  return HAND_SLOT_COUNT - usedHands >= (item.slots >= HAND_SLOT_COUNT ? 2 : 1);
};
