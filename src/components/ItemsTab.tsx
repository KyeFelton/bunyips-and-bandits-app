import { Backpack, Hand, Shirt, Warehouse } from "lucide-react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { ItemLocation } from "../enums/ItemLocation";
import { WearType } from "../enums/WearType";
import { AllConditions } from "../models/conditions";
import { CharacterItem, InventoryStack } from "../models/items";
import {
  ACCESSORY_INDICES,
  ACCESSORY_SLOT_COUNT,
  CLOTHES_INDEX,
  HAND_SLOT_COUNT,
  LEFT_HAND_INDEX,
  RIGHT_HAND_INDEX,
  canFitInBackpack,
  canHoldItem,
  getCarriedSlotUsage,
  isPartialSlotItem,
  slotCost,
  unitsPerSlot,
} from "../utils/items";
import {
  bodyAtom,
  characterItemsAtom,
  conditionsAtom,
  currentBodyAtom,
  currentMindAtom,
  currentStaminaAtom,
  itemsAtom,
  mindAtom,
  moneyAtom,
  staminaAtom,
} from "../state/character";
import { backpackSlotCapacityAtom, inventoryRowsAtom } from "../state/items";
import { AddMoreItemDialog } from "./AddMoreItemDialog";
import { InventoryStatsCard } from "./InventoryStatsCard";
import { ItemAction } from "./ItemActionsMenu";
import { RemoveItemDialog } from "./RemoveItemDialog";
import { SellItemDialog } from "./SellItemDialog";
import { SlotInventoryTable } from "./SlotInventoryTable";
import { StorageLocationDialog } from "./StorageLocationDialog";

type SectionConfig = {
  title: string;
  icon: React.ReactNode;
  location: ItemLocation;
};

type InventoryDialog = {
  action: "sell" | "addMore" | "remove";
  item: CharacterItem;
  maxQuantity: number;
};

const SECTIONS: SectionConfig[] = [
  {
    title: "Outfit",
    icon: <Shirt className="h-4 w-4" />,
    location: ItemLocation.Worn,
  },
  {
    title: "Hands",
    icon: <Hand className="h-4 w-4" />,
    location: ItemLocation.Held,
  },
  {
    title: "Backpack",
    icon: <Backpack className="h-4 w-4" />,
    location: ItemLocation.Carried,
  },
  {
    title: "Storage",
    icon: <Warehouse className="h-4 w-4" />,
    location: ItemLocation.Stored,
  },
];

const partialSlotRemaining = (item: CharacterItem): number =>
  isPartialSlotItem(item) ? unitsPerSlot(item) - item.quantity : 0;

const canWearItem = (
  item: CharacterItem,
  items: CharacterItem[],
  capacity: number
): boolean => {
  if (item.wearType === WearType.Accessory) {
    const wornAccessories = items.filter(
      (worn) =>
        worn.location === ItemLocation.Worn &&
        worn.wearType === WearType.Accessory
    ).length;
    return wornAccessories < ACCESSORY_SLOT_COUNT;
  }

  if (item.wearType === WearType.Clothes) {
    const existingClothes = items.find(
      (worn) =>
        worn.location === ItemLocation.Worn &&
        worn.wearType === WearType.Clothes
    );
    if (!existingClothes) return true;

    // Swapping clothes displaces the old set to the backpack; the move is only
    // allowed if the displaced clothes fits there.
    const freed = item.location === ItemLocation.Carried ? slotCost(item) : 0;
    const needed = slotCost(existingClothes);
    return getCarriedSlotUsage(items) - freed + needed <= capacity;
  }

  return false;
};

const findFreeAccessoryIndex = (
  items: CharacterItem[]
): number | undefined => {
  const used = new Set(
    items
      .filter(
        (item) =>
          item.location === ItemLocation.Worn &&
          item.wearType === WearType.Accessory
      )
      .map((item) => item.index)
  );
  return ACCESSORY_INDICES.find((index) => !used.has(index));
};

const findFreeHandIndex = (items: CharacterItem[]): number | undefined => {
  const used = new Set(
    items
      .filter((item) => item.location === ItemLocation.Held)
      .map((item) => item.index)
  );
  return [LEFT_HAND_INDEX, RIGHT_HAND_INDEX].find((index) => !used.has(index));
};

export const ItemsTab = () => {
  const [stacks, setStacks] = useAtom(itemsAtom);
  const characterItems = useAtomValue(characterItemsAtom);
  const rowsByLocation = useAtomValue(inventoryRowsAtom);
  const capacity = useAtomValue(backpackSlotCapacityAtom);
  const [money, setMoney] = useAtom(moneyAtom);

  const body = useAtomValue(bodyAtom);
  const mind = useAtomValue(mindAtom);
  const stamina = useAtomValue(staminaAtom);
  const setCurrentBody = useSetAtom(currentBodyAtom);
  const setCurrentMind = useSetAtom(currentMindAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const [conditions, setConditions] = useAtom(conditionsAtom);

  const [dialog, setDialog] = useState<InventoryDialog | null>(null);
  const [storeItem, setStoreItem] = useState<CharacterItem | null>(null);

  const updateStack = (stackId: string, changes: Partial<InventoryStack>) => {
    setStacks((prev) =>
      prev.map((stack) =>
        stack.id === stackId ? { ...stack, ...changes } : stack
      )
    );
  };

  const moveStack = (
    stack: InventoryStack,
    location: ItemLocation,
    index?: number,
    displaced?: { id: string; location: ItemLocation }
  ) => {
    setStacks((prev) =>
      prev.map((current) => {
        if (current.id === stack.id) {
          return { ...current, location, index, storageLocation: undefined };
        }
        if (displaced && current.id === displaced.id) {
          return {
            ...current,
            location: displaced.location,
            index: undefined,
            storageLocation: undefined,
          };
        }
        return current;
      })
    );
  };

  const removeStack = (stackId: string) => {
    setStacks((prev) => prev.filter((stack) => stack.id !== stackId));
  };

  const applyCondition = (conditionName: string) => {
    const conditionData = AllConditions.find((c) => c.name === conditionName);
    if (!conditionData) return;

    const existingCount = conditions.filter(
      (c) => c.name === conditionName
    ).length;

    // Repeatedly using a stackable condition item costs body.
    if (existingCount > 0) {
      setCurrentBody((prev) => Math.max(0, prev - 2));
    }

    setConditions((prev) => {
      if (conditionData.stackable > 0) {
        return existingCount < conditionData.stackable
          ? [...prev, conditionData]
          : prev;
      }
      return prev.some((c) => c.name === conditionName)
        ? prev
        : [...prev, conditionData];
    });
  };

  const wear = (item: CharacterItem, stack: InventoryStack) => {
    if (item.wearType === WearType.Accessory) {
      const index = findFreeAccessoryIndex(characterItems);
      if (index === undefined) return;
      moveStack(stack, ItemLocation.Worn, index);
      return;
    }

    if (item.wearType !== WearType.Clothes) return;

    const existingClothes = characterItems.find(
      (worn) =>
        worn.location === ItemLocation.Worn &&
        worn.wearType === WearType.Clothes
    );
    if (existingClothes && !canWearItem(item, characterItems, capacity)) return;

    moveStack(
      stack,
      ItemLocation.Worn,
      CLOTHES_INDEX,
      existingClothes
        ? { id: existingClothes.id, location: ItemLocation.Carried }
        : undefined
    );
  };

  const hold = (item: CharacterItem, stack: InventoryStack) => {
    if (!canHoldItem(item, characterItems)) return;
    const index =
      item.slots >= HAND_SLOT_COUNT
        ? LEFT_HAND_INDEX
        : findFreeHandIndex(characterItems) ?? RIGHT_HAND_INDEX;
    moveStack(stack, ItemLocation.Held, index);
  };

  const carry = (item: CharacterItem, stack: InventoryStack) => {
    if (!canFitInBackpack(item, characterItems, capacity)) return;
    moveStack(stack, ItemLocation.Carried);
  };

  const consumeItem = (item: CharacterItem, stack: InventoryStack) => {
    if (!item.singleUse) return;

    const effect = item.immediateEffect;
    if (effect) {
      if (effect.body) {
        setCurrentBody((prev) => Math.min(prev + effect.body!, body.max));
      }
      if (effect.mind) {
        setCurrentMind((prev) => Math.min(prev + effect.mind!, mind.max));
      }
      if (effect.stamina) {
        setCurrentStamina((prev) =>
          Math.min(prev + effect.stamina!, stamina.max)
        );
      }
      if (effect.condition) {
        applyCondition(effect.condition);
      }
    }

    if (stack.quantity > 1) {
      updateStack(stack.id, { quantity: stack.quantity - 1 });
    } else {
      removeStack(stack.id);
    }
  };

  const getActionDisabled = (
    item: CharacterItem
  ): Partial<Record<ItemAction, boolean>> => ({
    wear: item.wearType ? !canWearItem(item, characterItems, capacity) : false,
    hold: !canHoldItem(item, characterItems),
    carry: !canFitInBackpack(item, characterItems, capacity),
    addMore: isPartialSlotItem(item) ? partialSlotRemaining(item) <= 0 : false,
  });

  const handleAction = (
    stackId: string,
    action: ItemAction,
    rowUnits: number
  ) => {
    const stack = stacks.find((current) => current.id === stackId);
    const item = characterItems.find((current) => current.id === stackId);
    if (!stack || !item) return;

    switch (action) {
      case "wear":
        wear(item, stack);
        break;
      case "hold":
        hold(item, stack);
        break;
      case "carry":
        carry(item, stack);
        break;
      case "store":
        setStoreItem(item);
        break;
      case "use":
        consumeItem(item, stack);
        break;
      case "remove":
        setDialog({ action: "remove", item, maxQuantity: rowUnits });
        break;
      case "sell":
        setDialog({ action: "sell", item, maxQuantity: rowUnits });
        break;
      case "addMore":
        setDialog({
          action: "addMore",
          item,
          maxQuantity: partialSlotRemaining(item),
        });
        break;
    }
  };

  const confirmSell = (quantity: number, price: number) => {
    if (!dialog) return;
    const stack = stacks.find((current) => current.id === dialog.item.id);
    if (stack) {
      setMoney((prev) => prev + quantity * price);
      if (quantity >= stack.quantity) {
        removeStack(stack.id);
      } else {
        updateStack(stack.id, { quantity: stack.quantity - quantity });
      }
    }
    setDialog(null);
  };

  const confirmAddMore = (quantity: number, cost: number) => {
    if (!dialog) return;
    const stack = stacks.find((current) => current.id === dialog.item.id);
    if (stack) {
      setMoney((prev) => prev - quantity * cost);
      updateStack(stack.id, { quantity: stack.quantity + quantity });
    }
    setDialog(null);
  };

  const confirmRemove = (quantity: number) => {
    if (!dialog) return;
    const stack = stacks.find((current) => current.id === dialog.item.id);
    if (stack) {
      if (quantity >= stack.quantity) {
        removeStack(stack.id);
      } else {
        updateStack(stack.id, { quantity: stack.quantity - quantity });
      }
    }
    setDialog(null);
  };

  const confirmStore = (storageLocation: string) => {
    if (!storeItem) return;
    updateStack(storeItem.id, {
      location: ItemLocation.Stored,
      index: undefined,
      storageLocation: storageLocation || undefined,
    });
    setStoreItem(null);
  };

  return (
    <div>
      <InventoryStatsCard />

      {SECTIONS.map((section) => (
        <div key={section.location} className="mt-8">
          <SlotInventoryTable
            title={section.title}
            icon={section.icon}
            rows={rowsByLocation[section.location]}
            location={section.location}
            onAction={handleAction}
            getActionDisabled={getActionDisabled}
          />
        </div>
      ))}

      {dialog?.action === "sell" && (
        <SellItemDialog
          open
          onOpenChange={(open) => {
            if (!open) setDialog(null);
          }}
          item={dialog.item}
          onConfirm={confirmSell}
        />
      )}

      {dialog?.action === "addMore" && (
        <AddMoreItemDialog
          open
          onOpenChange={(open) => {
            if (!open) setDialog(null);
          }}
          item={dialog.item}
          maxQuantity={dialog.maxQuantity}
          money={money}
          onConfirm={confirmAddMore}
        />
      )}

      {dialog?.action === "remove" && (
        <RemoveItemDialog
          open
          onOpenChange={(open) => {
            if (!open) setDialog(null);
          }}
          item={dialog.item}
          maxQuantity={dialog.maxQuantity}
          onConfirm={confirmRemove}
        />
      )}

      {storeItem && (
        <StorageLocationDialog
          open
          onOpenChange={(open) => {
            if (!open) setStoreItem(null);
          }}
          itemName={storeItem.name}
          onConfirm={confirmStore}
        />
      )}
    </div>
  );
};
