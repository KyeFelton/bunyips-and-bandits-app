import { useState } from "react";
import { useAtom } from "jotai";
import { itemsAtom, moneyAtom } from "./../state/character";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowLeft, Plus } from "lucide-react";
import * as Items from "./../data/items";
import { Item } from "./../models/items";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { EffectForm } from "./EffectForm";

type Props = {
  maxWeight: number;
};

type ItemWithQuantity = Item & {
  quantity: number;
  cost?: number;
};

const defaultCustomItem = {
  name: "",
  description: "",
  effects: [],
  singleUse: false,
  weight: 0,
};

export const AddItemDialog = ({ maxWeight }: Props) => {
  const [items, setItems] = useAtom(itemsAtom);
  const [money, setMoney] = useAtom(moneyAtom);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemWithQuantity | null>(
    null
  );
  const [isCreatingItem, setIsCreatingItem] = useState(false);
  const [customItem, setCustomItem] = useState<Item>(defaultCustomItem);
  const [nameError, setNameError] = useState<string | null>(null);

  const allItems = Object.values(Items)
    .filter((item): item is Item => typeof item === "object" && "name" in item)
    .sort((a, b) => a.name.localeCompare(b.name));

  const filteredItems = allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectItem = (item: Item) => {
    setSelectedItem({
      ...item,
      quantity: 1,
      cost: item.defaultCost ?? 0,
    });
  };

  const handleBack = () => {
    if (selectedItem) {
      if (customItem.name.length > 0) {
        setIsCreatingItem(true);
      }
      setSelectedItem(null);
    } else {
      setCustomItem(defaultCustomItem);
      setIsCreatingItem(false);
      setNameError(null);
    }
  };

  const handleQuantityChange = (value: string) => {
    if (!selectedItem) return;
    const quantity = parseInt(value) || 1;
    setSelectedItem({
      ...selectedItem,
      quantity: Math.max(1, quantity),
    });
  };

  const handleCostChange = (value: string) => {
    if (!selectedItem) return;
    const cost = parseInt(value);
    if (cost === undefined) {
      setSelectedItem({
        ...selectedItem,
        cost: undefined,
      });
    }
    setSelectedItem({
      ...selectedItem,
      cost: Math.max(0, cost),
    });
  };

  const handleAddItem = () => {
    if (!selectedItem) return;
    const totalCost = (selectedItem.cost || 0) * selectedItem.quantity;

    // Update or add item to inventory
    setItems((prev) => {
      const existingItem = prev[selectedItem.name];
      return {
        ...prev,
        [selectedItem.name]: {
          name: selectedItem.name,
          weight: selectedItem.weight,
          singleUse: selectedItem.singleUse,
          description: selectedItem.description,
          effects: selectedItem.effects,
          immediateEffect: selectedItem.immediateEffect,
          equipped: existingItem?.equipped || false,
          quantity: (existingItem?.quantity || 0) + selectedItem.quantity,
        },
      };
    });

    setMoney(money - totalCost);
    setOpen(false);
    setSelectedItem(null);
    setCustomItem(defaultCustomItem);
    setNameError(null);
  };

  const validateItemName = (name: string) => {
    if (!name.trim()) {
      setNameError("Please give the item a name");
      return false;
    }

    if (items[name] || allItems.find((item) => item.name === name)) {
      setNameError("An item with this name already exists");
      return false;
    }

    setNameError(null);
    return true;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setCustomItem({ ...customItem, name: newName });
    validateItemName(newName);
  };

  const handleCreateItem = () => {
    if (!validateItemName(customItem.name)) {
      return;
    }

    setSelectedItem({
      ...customItem,
      quantity: 1,
      cost: 0,
    });

    setIsCreatingItem(false);
  };

  const getTotalWeight = (item: ItemWithQuantity) => {
    const existingQuantity = items[item.name]?.quantity || 0;
    return item.weight * (item.quantity + existingQuantity);
  };

  const canCarryWeight = (item: ItemWithQuantity) =>
    getTotalWeight(item) <= maxWeight;

  const canAffordCost = (item: ItemWithQuantity) =>
    (item.cost || 0) * item.quantity <= money;

  const canAddItem = (item: ItemWithQuantity) =>
    canCarryWeight(item) && canAffordCost(item);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={maxWeight <= 0}>
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </DialogTrigger>
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
            <DialogTitle>
              {selectedItem
                ? selectedItem.name
                : isCreatingItem
                ? "Create Custom Item"
                : "Add Items"}
            </DialogTitle>
          </div>
        </DialogHeader>

        {selectedItem ? (
          <div className="flex flex-col justify-between flex-1">
            <div className="space-y-6 py-4">
              <p className="text-sm text-muted-foreground">
                {selectedItem.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
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
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Cost per item (£)
                  </label>
                  <Input
                    type="number"
                    className="max-w-[100px]"
                    min="0"
                    value={selectedItem.cost}
                    onChange={(e) => handleCostChange(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total weight:</span>
                    <span
                      className={
                        canCarryWeight(selectedItem) ? "" : "text-destructive"
                      }
                    >
                      {getTotalWeight(selectedItem)} kg
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Your capacity:
                    </span>
                    <span>{maxWeight}kg</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total cost:</span>
                    <span
                      className={
                        canAffordCost(selectedItem) ? "" : "text-destructive"
                      }
                    >
                      £ {(selectedItem.cost || 0) * selectedItem.quantity}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Your money:</span>
                    <span>£ {money}</span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              className="w-full mb-2"
              onClick={handleAddItem}
              disabled={!canAddItem(selectedItem)}
            >
              Add to inventory
            </Button>
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
                  value={customItem.description}
                  onChange={(e) =>
                    setCustomItem({
                      ...customItem,
                      description: e.target.value,
                    })
                  }
                  placeholder="Enter item description"
                />
              </div>
              <div className="flex gap-6">
                <div>
                  <label className="text-sm font-medium">Weight (kg)</label>
                  <Input
                    type="number"
                    className="max-w-[100px]"
                    min="0"
                    step="0.1"
                    value={customItem.weight}
                    onChange={(e) =>
                      setCustomItem({
                        ...customItem,
                        weight: parseFloat(e.target.value) || 0,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="singleUse"
                  checked={customItem.singleUse}
                  onChange={(e) =>
                    setCustomItem({
                      ...customItem,
                      singleUse: e.target.checked,
                    })
                  }
                />
                <label htmlFor="singleUse" className="text-sm font-medium">
                  Single use item
                </label>
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Effects
                </label>
                <EffectForm
                  effects={customItem.effects || []}
                  onChange={(effects) =>
                    setCustomItem({ ...customItem, effects })
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
                onChange={(e) => setSearch(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="overflow-y-auto -mx-6 px-6">
              <div className="space-y-1">
                {filteredItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleSelectItem(item)}
                    className="w-full text-left px-2 py-2 rounded-md hover:bg-accent text-sm transition-colors"
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
