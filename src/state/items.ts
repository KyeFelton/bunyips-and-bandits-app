import { atom } from "jotai";
import { ItemLocation } from "../enums/ItemLocation";
import { SkillType } from "../enums/SkillType";
import { WearType } from "../enums/WearType";
import { CharacterItem } from "../models/items";
import {
  ACCESSORY_INDICES,
  CLOTHES_INDEX,
  HAND_SLOT_COUNT,
  LEFT_HAND_INDEX,
  RIGHT_HAND_INDEX,
  SlotDisplayRow,
  getCarriedSlotUsage,
  isPartialSlotItem,
} from "../utils/items";
import { characterItemsAtom, skillModifiersAtom } from "./character";

const BASE_BACKPACK_SLOTS = 5;

// Row builders

const displayName = (item: CharacterItem): string =>
  isPartialSlotItem(item) ? `${item.name} (x${item.quantity})` : item.name;

const itemRow = (
  slotIndex: number,
  label: string,
  item?: CharacterItem
): SlotDisplayRow => ({
  slotIndex,
  label,
  isLabelOnly: false,
  rowSpan: 1,
  rowUnits: item?.quantity ?? 0,
  itemName: item?.name,
  displayName: item ? displayName(item) : undefined,
  item,
  stackId: item?.id,
});

const buildWornRows = (items: CharacterItem[]): SlotDisplayRow[] => {
  const worn = items.filter((item) => item.location === ItemLocation.Worn);
  const clothes = worn.find((item) => item.wearType === WearType.Clothes);
  const accessories = worn
    .filter((item) => item.wearType === WearType.Accessory)
    .sort((a, b) => (a.index ?? 99) - (b.index ?? 99));

  return [
    itemRow(CLOTHES_INDEX, "Clothes", clothes),
    ...ACCESSORY_INDICES.map((slotIndex, position) =>
      itemRow(slotIndex, "Accessory", accessories[position])
    ),
  ];
};

const buildHeldRows = (items: CharacterItem[]): SlotDisplayRow[] => {
  const held = items.filter((item) => item.location === ItemLocation.Held);
  const twoHandedItem = held.find((item) => item.slots >= HAND_SLOT_COUNT);

  if (twoHandedItem) {
    return [
      {
        slotIndex: LEFT_HAND_INDEX,
        label: "Left hand",
        isLabelOnly: false,
        rowSpan: 2,
        rowUnits: twoHandedItem.quantity,
        itemName: twoHandedItem.name,
        displayName: displayName(twoHandedItem),
        item: twoHandedItem,
        stackId: twoHandedItem.id,
      },
      {
        slotIndex: RIGHT_HAND_INDEX,
        label: "Right hand",
        isLabelOnly: true,
        rowSpan: 1,
        rowUnits: twoHandedItem.quantity,
      },
    ];
  }

  const unassigned = held.filter(
    (item) => item.index !== LEFT_HAND_INDEX && item.index !== RIGHT_HAND_INDEX
  );
  const left =
    held.find((item) => item.index === LEFT_HAND_INDEX) ?? unassigned.shift();
  const right =
    held.find((item) => item.index === RIGHT_HAND_INDEX) ?? unassigned.shift();

  return [
    itemRow(LEFT_HAND_INDEX, "Left hand", left),
    itemRow(RIGHT_HAND_INDEX, "Right hand", right),
  ];
};

const buildCarriedRows = (
  items: CharacterItem[],
  capacity: number
): SlotDisplayRow[] => {
  const carried = items.filter(
    (item) => item.location === ItemLocation.Carried
  );
  const rows: SlotDisplayRow[] = [];
  let slot = 0;

  for (const item of carried) {
    if (isPartialSlotItem(item)) {
      slot += 1;
      rows.push(itemRow(slot - 1, `Slot ${slot}`, item));
      continue;
    }

    const span = item.slots * item.quantity;
    for (let offset = 0; offset < span; offset += 1) {
      slot += 1;
      if (offset === 0) {
        rows.push({
          slotIndex: slot - 1,
          label: `Slot ${slot}`,
          isLabelOnly: false,
          rowSpan: span,
          rowUnits: item.quantity,
          itemName: item.name,
          displayName: displayName(item),
          item,
          stackId: item.id,
        });
      } else {
        rows.push({
          slotIndex: slot - 1,
          label: `Slot ${slot}`,
          isLabelOnly: true,
          rowSpan: 1,
          rowUnits: item.quantity,
        });
      }
    }
  }

  while (slot < capacity) {
    slot += 1;
    rows.push(itemRow(slot - 1, `Slot ${slot}`));
  }

  return rows;
};

const buildStoredRows = (items: CharacterItem[]): SlotDisplayRow[] => {
  const stored = items.filter((item) => item.location === ItemLocation.Stored);
  const rows = stored.map((item, index) =>
    itemRow(index, item.storageLocation ?? "", item)
  );
  rows.push(itemRow(stored.length, ""));
  return rows;
};

// Inventory atoms

// Backpack capacity is slot-based: 5 + the character's Strength modifier.
export const backpackSlotCapacityAtom = atom((get) => {
  const strengthModifier = get(skillModifiersAtom)[SkillType.Strength] ?? 0;
  return Math.max(1, BASE_BACKPACK_SLOTS + strengthModifier);
});

export const carriedSlotUsageAtom = atom((get) =>
  getCarriedSlotUsage(get(characterItemsAtom))
);

// Total value of all carried/worn/held/stored items, based on each item's
// default cost. Money is not included.
export const assetsValueAtom = atom((get) =>
  get(characterItemsAtom).reduce(
    (total, item) => total + (item.defaultCost ?? 0) * item.quantity,
    0
  )
);

export const inventoryRowsAtom = atom((get) => {
  const items = get(characterItemsAtom);
  const capacity = get(backpackSlotCapacityAtom);

  return {
    [ItemLocation.Worn]: buildWornRows(items),
    [ItemLocation.Held]: buildHeldRows(items),
    [ItemLocation.Carried]: buildCarriedRows(items, capacity),
    [ItemLocation.Stored]: buildStoredRows(items),
  } as Record<ItemLocation, SlotDisplayRow[]>;
});
