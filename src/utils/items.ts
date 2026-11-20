import { ItemLocation } from "../enums/ItemLocation";
import * as Items from "../data/items";
import { CharacterItem, InventoryStack, Item } from "../models/items";
import { ImmediateEffect, OngoingEffect } from "../models/effect";
import { ItemType } from "../enums/ItemType";

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
export const ARMOUR_INDEX = 1;
export const ACCESSORY_INDICES = [2, 3, 4];
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
  itemType?: ItemType;
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

const parseConsumedBonus = (stat: string, value: number): string =>
  `${value > 0 ? "Restores" : "Depletes"} ${Math.abs(value)} ${stat}.`;

const parseConsumedEffect = (effect: ImmediateEffect): string => {
  const effects: string[] = [];
  const healthStats = [
    ["body", effect.body],
    ["mind", effect.mind],
    ["stamina", effect.stamina],
  ] as const;
  for (const [stat, value] of healthStats) {
    if (value) effects.push(parseConsumedBonus(`{{health:${stat}}}`, value));
  }
  if (effect.condition) effects.push(`Gain the condition ${effect.condition}.`);
  if (effect.custom) effects.push(effect.custom);
  return effects.join(" ");
};

const parseOngoingBonus = (stat: string, value: number): string =>
  `${value > 0 ? "Grants" : "Removes"} ${Math.abs(value)} ${stat}.`;

const parseOngoingMultiplier = (stat: string, value: number): string =>
  `${value > 0 ? "Increases" : "Reduces"} ${stat} by ${Math.abs((1 - value) * 100)}%.`;

const parseOngoingEffect = (effect: OngoingEffect): string => {
  for (const stat of ["body", "mind", "stamina"] as const) {
    const modifier = effect[stat];
    if (modifier?.bonus) {
      return parseOngoingBonus(`{{health:${stat}}}`, modifier.bonus);
    }
    if (modifier?.multiplier) {
      return parseOngoingMultiplier(`{{health:${stat}}}`, modifier.multiplier);
    }
  }
  if (effect.weapon) {
    return `Deals ${effect.weapon.bonus} {{damage:${effect.weapon.damageType}}} damage when wielded.`;
  }
  if (effect.skill?.bonus) {
    return parseOngoingBonus(`{{skill:${effect.skill.skillType}}}`, effect.skill.bonus);
  }
  if (effect.custom) {
    return effect.custom;
  }
  return "";
};

const joinList = (values: string[]): string =>
  values.length < 2
    ? values[0] ?? ""
    : `${values.slice(0, -1).join(", ")} and ${values[values.length - 1]}`;

type BonusEntry = { value: number; stat: string };

const describeBonusGroups = (entries: BonusEntry[], suffix = ""): string[] => {
  const gained: string[] = [];
  const lost: string[] = [];
  for (const { value, stat } of entries) {
    if (value > 0) gained.push(`${value} ${stat}`);
    if (value < 0) lost.push(`${Math.abs(value)} ${stat}`);
  }

  return [
    ...(gained.length ? [`Grants ${joinList(gained)}${suffix}.`] : []),
    ...(lost.length ? [`Removes ${joinList(lost)}${suffix}.`] : []),
  ];
};

export const buildDescription = (
  item: Item
): string => {
  if (item.consumedEffect) return parseConsumedEffect(item.consumedEffect);

  const equippedEffects = item.equippedEffects ?? [];
  const armourBonuses = equippedEffects.flatMap((effect) =>
    effect.armour?.bonus === undefined
      ? []
      : [{
        value: effect.armour.bonus,
        stat: `{{damage:${effect.armour.damageType}}}`,
      }],
  );
  const skillBonuses = equippedEffects.flatMap((effect) =>
    effect.skill?.bonus === undefined
      ? []
      : [{
        value: effect.skill.bonus,
        stat: `{{skill:${effect.skill.skillType}}}`,
      }],
  );
  const otherEffects = equippedEffects
    .filter((effect) => !effect.armour && !effect.skill)
    .map(parseOngoingEffect)
    .filter(Boolean);

  return [
    ...describeBonusGroups(armourBonuses, " armour"),
    ...describeBonusGroups(skillBonuses),
    ...otherEffects,
  ].join(" ");
};

export const isWearableItem = (item: Item): boolean =>
  item.itemType === ItemType.Accessory ||
  item.itemType === ItemType.Clothing ||
  item.itemType === ItemType.Armour;

export const isHoldableItem = (item: Item): boolean =>
  item.itemType === ItemType.Weapon || item.itemType === ItemType.Tool;
