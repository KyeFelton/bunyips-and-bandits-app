import { ArrowLeft, Plus } from "lucide-react";
import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import { ItemLocation } from "../enums/ItemLocation";
import { WearType } from "../enums/WearType";
import { Item } from "../models/items";
import {
  AddItemTarget,
  CLOTHES_INDEX,
  canFitInBackpack,
  canHoldItem,
  catalogItems,
  getCatalogItem,
  isPartialSlotItem,
  unitsPerSlot,
} from "../utils/items";
import { randomString } from "../utils/randomString";
import { characterItemsAtom, itemsAtom, moneyAtom } from "../state/character";
import { backpackSlotCapacityAtom } from "../state/items";
import { EffectForm } from "./EffectForm";
import { ItemEffectList } from "./ItemEffectList";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

type Props = {
  target: AddItemTarget;
  trigger: React.ReactNode;
};

type SelectedItem = Item & {
  quantity: number;
  cost: number | undefined;
  isCustom: boolean;
};

const LOCATION_LABELS: Record<ItemLocation, string> = {
  [ItemLocation.Worn]: "Outfit",
  [ItemLocation.Held]: "Hands",
  [ItemLocation.Carried]: "Backpack",
  [ItemLocation.Stored]: "Storage",
};

const defaultCustomItem: Item = {
  name: "",
  equippedEffects: [],
  singleUse: false,
  slots: 1,
};

export const AddItemDialog = ({ target, trigger }: Props) => {
  const [stacks, setStacks] = useAtom(itemsAtom);
  const [money, setMoney] = useAtom(moneyAtom);
  const characterItems = useAtomValue(characterItemsAtom);
  const capacity = useAtomValue(backpackSlotCapacityAtom);

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [isCreatingItem, setIsCreatingItem] = useState(false);
  const [customItem, setCustomItem] = useState<Item>(defaultCustomItem);
  const [nameError, setNameError] = useState<string | null>(null);
  const [storageLocation, setStorageLocation] = useState("");

  const destination = target.location;
  const wearFilter: WearType | undefined =
    destination === ItemLocation.Worn
      ? target.index === CLOTHES_INDEX
        ? WearType.Clothes
        : WearType.Accessory
      : undefined;

  const availableItems = catalogItems.filter(
    (item) => !wearFilter || item.wearType === wearFilter,
  );
  const filteredItems = availableItems.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase()),
  );

  const resetState = () => {
    setSelectedItem(null);
    setIsCreatingItem(false);
    setCustomItem(defaultCustomItem);
    setNameError(null);
    setSearch("");
    setStorageLocation("");
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) resetState();
  };

  const handleSelectItem = (item: Item) => {
    setSelectedItem({
      ...item,
      quantity: 1,
      cost: undefined,
      isCustom: false,
    });
  };

  const handleBack = () => {
    if (selectedItem) {
      setSelectedItem(null);
      if (selectedItem.isCustom) setIsCreatingItem(true);
    } else {
      setIsCreatingItem(false);
      setCustomItem(defaultCustomItem);
      setNameError(null);
    }
  };

  const handleQuantityChange = (value: string) => {
    if (!selectedItem) return;
    setSelectedItem({
      ...selectedItem,
      quantity: Math.max(1, parseInt(value) || 1),
    });
  };

  const handleCostChange = (value: string) => {
    if (!selectedItem) return;
    setSelectedItem({
      ...selectedItem,
      cost: value === "" ? undefined : Math.max(0, parseInt(value) || 0),
    });
  };

  const validateItemName = (name: string): boolean => {
    if (!name.trim()) {
      setNameError("Please give the item a name");
      return false;
    }
    if (getCatalogItem(name) || stacks.some((stack) => stack.name === name)) {
      setNameError("An item with this name already exists");
      return false;
    }
    setNameError(null);
    return true;
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setCustomItem({ ...customItem, name });
    validateItemName(name);
  };

  const handleCreateItem = () => {
    if (!validateItemName(customItem.name)) return;
    setSelectedItem({
      ...customItem,
      wearType: wearFilter ?? customItem.wearType,
      quantity: 1,
      cost: undefined,
      isCustom: true,
    });
    setIsCreatingItem(false);
  };

  const quantity = selectedItem
    ? isPartialSlotItem(selectedItem)
      ? selectedItem.quantity
      : 1
    : 1;
  const totalCost = (selectedItem?.cost ?? 0) * quantity;

  const fits = (() => {
    if (!selectedItem) return false;
    const probe = { slots: selectedItem.slots, quantity };
    if (destination === ItemLocation.Carried) {
      return canFitInBackpack(probe, characterItems, capacity);
    }
    if (destination === ItemLocation.Held) {
      return canHoldItem(selectedItem, characterItems);
    }
    return true;
  })();
  const hasDestination =
    destination !== ItemLocation.Stored || storageLocation.trim() !== "";
  const canAfford = totalCost <= money;
  const canAdd = Boolean(selectedItem) && fits && canAfford && hasDestination;

  const addError = (() => {
    if (!fits && !canAfford) return "Insufficient space and funds";
    if (!fits) return "Insufficient space";
    if (!canAfford) return "Insufficient funds";
    return null;
  })();

  const handleAddItem = () => {
    if (!selectedItem || !canAdd) return;

    const custom = selectedItem.isCustom
      ? {
          ...(selectedItem.description
            ? { description: selectedItem.description }
            : {}),
          equippedEffects: selectedItem.equippedEffects,
          consumedEffect: selectedItem.consumedEffect,
          singleUse: selectedItem.singleUse,
          slots: selectedItem.slots,
          stackable: selectedItem.stackable,
          wearType: selectedItem.wearType,
          defaultCost: selectedItem.defaultCost,
        }
      : undefined;

    setStacks([
      ...stacks,
      {
        id: randomString(12),
        name: selectedItem.name,
        location: destination,
        quantity,
        index: target.index,
        storageLocation:
          destination === ItemLocation.Stored
            ? storageLocation.trim() || undefined
            : undefined,
        custom,
      },
    ]);
    if (selectedItem.cost !== undefined) setMoney(money - totalCost);
    handleOpenChange(false);
  };

  const dialogTitle = selectedItem
    ? selectedItem.name
    : isCreatingItem
      ? "Create custom item"
      : `Add to ${LOCATION_LABELS[destination]}`;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md h-[600px] overflow-auto flex flex-col">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            {(selectedItem || isCreatingItem) && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="h-8 w-8"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <DialogTitle>{dialogTitle}</DialogTitle>
          </div>
        </DialogHeader>

        {selectedItem ? (
          <div className="flex flex-col justify-between flex-1">
            <div className="space-y-6 py-4">
              {selectedItem.description && (
                <p className="text-sm text-muted-foreground">
                  {selectedItem.description}
                </p>
              )}

              <ItemEffectList
                equippedEffects={selectedItem.equippedEffects}
                consumedEffect={selectedItem.consumedEffect}
              />

              <div className="grid grid-cols-2 gap-4">
                {isPartialSlotItem(selectedItem) && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Quantity</label>
                    <Select
                      value={selectedItem.quantity.toString()}
                      onValueChange={handleQuantityChange}
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="1" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from(
                          { length: unitsPerSlot(selectedItem) },
                          (_, index) => index + 1,
                        ).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {isPartialSlotItem(selectedItem) ? "Cost per item" : "Cost"}
                  </label>
                  <div className="relative max-w-[100px]">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      £
                    </span>
                    <Input
                      type="number"
                      className="pl-7"
                      min="0"
                      value={selectedItem.cost ?? ""}
                      onChange={(event) => handleCostChange(event.target.value)}
                    />
                  </div>
                  {selectedItem.defaultCost !== undefined && (
                    <p className="text-xs text-muted-foreground">
                      Market value: £ {selectedItem.defaultCost}
                    </p>
                  )}
                </div>
              </div>

              {destination === ItemLocation.Stored && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Where is it stored?
                  </label>
                  <Input
                    value={storageLocation}
                    onChange={(event) => setStorageLocation(event.target.value)}
                    placeholder="e.g. Home, wagon, bank"
                  />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total cost:</span>
                  <span className={canAfford ? "" : "text-destructive"}>
                    £ {totalCost}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Your money:</span>
                  <span>£ {money}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                className="w-full"
                onClick={handleAddItem}
                disabled={!canAdd}
              >
                Add to inventory
              </Button>
              {addError && (
                <p className="text-sm text-destructive text-center">
                  {addError}
                </p>
              )}
            </div>
          </div>
        ) : isCreatingItem ? (
          <div className="flex flex-col justify-between flex-1">
            <div className="space-y-4 h-[420px] overflow-auto px-1">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input
                  value={customItem.name}
                  onChange={handleNameChange}
                  placeholder="Enter item name"
                  variant={nameError ? "error" : "default"}
                />
                {nameError && (
                  <p className="text-destructive text-sm mt-1">{nameError}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={customItem.description ?? ""}
                  onChange={(event) =>
                    setCustomItem({
                      ...customItem,
                      description: event.target.value || undefined,
                    })
                  }
                  placeholder="Describe how the item looks, sounds, or smells"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Backpack slots</label>
                <Input
                  type="number"
                  className="max-w-[100px]"
                  min="0.1"
                  step="0.1"
                  value={customItem.slots}
                  onChange={(event) =>
                    setCustomItem({
                      ...customItem,
                      slots: Math.max(0.1, parseFloat(event.target.value) || 1),
                    })
                  }
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="singleUse"
                  checked={customItem.singleUse}
                  onChange={(event) =>
                    setCustomItem({
                      ...customItem,
                      singleUse: event.target.checked,
                    })
                  }
                />
                <label htmlFor="singleUse" className="text-sm font-medium">
                  Single use item
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="stackable"
                  checked={customItem.stackable || false}
                  onChange={(event) =>
                    setCustomItem({
                      ...customItem,
                      stackable: event.target.checked,
                    })
                  }
                />
                <label htmlFor="stackable" className="text-sm font-medium">
                  Stackable effects
                </label>
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Effects
                </label>
                <EffectForm
                  effects={customItem.equippedEffects || []}
                  onChange={(effects) =>
                    setCustomItem({ ...customItem, equippedEffects: effects })
                  }
                />
              </div>
            </div>
            <Button
              onClick={handleCreateItem}
              className="w-full mb-2"
              disabled={!!nameError}
            >
              Create item
            </Button>
          </div>
        ) : (
          <>
            <div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsCreatingItem(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Create custom item
              </Button>
            </div>
            <div className="text-center text-sm text-muted-foreground">or</div>
            <div>
              <Input
                placeholder="Search items..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full"
              />
            </div>
            <div className="overflow-y-auto -mx-6 px-6">
              <div className="space-y-1">
                {filteredItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleSelectItem(item)}
                    className="w-full text-left px-2 py-2 rounded-md hover:bg-accent-subtle text-sm transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                {filteredItems.length === 0 && (
                  <div className="text-center text-sm text-muted-foreground py-4">
                    No items found
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
