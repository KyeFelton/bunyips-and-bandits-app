import { useState } from "react";
import { useAtom } from "jotai";
import { itemsAtom, moneyAtom } from "../../state/character";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowLeft, Plus } from "lucide-react";
import * as Items from "../../models/items";
import { Item } from "../../models/items";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { EffectForm } from "../EffectForm";
import { Effect } from "../../models/effect";

type Props = {
  maxWeight: number;
};

type ItemWithQuantity = {
  item: Item;
  quantity: number;
  cost?: number;
};

type ItemCreationState = {
  name: string;
  description: string;
  effects: Effect[];
  singleUse: boolean;
  weight: number;
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
  const [newItem, setNewItem] = useState<ItemCreationState>({
    name: "",
    description: "",
    effects: [],
    singleUse: false,
    weight: 0,
  });

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
      item,
      quantity: 1,
      cost: undefined,
    });
  };

  const handleBack = () => {
    if (selectedItem) {
      setSelectedItem(null);
    } else {
      setIsCreatingItem(false);
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

    const { item, quantity, cost } = selectedItem;
    const totalCost = (cost || 0) * quantity;

    if (totalCost > money) {
      alert("You don't have enough money!");
      return;
    }

    // Update or add item to inventory
    setItems((prev) => {
      const existingItem = prev[item.name];
      return {
        ...prev,
        [item.name]: {
          ...item,
          equipped: existingItem?.equipped || false,
          quantity: (existingItem?.quantity || 0) + quantity,
        },
      };
    });

    setMoney(money - totalCost);
    setOpen(false);
    setSelectedItem(null);
  };

  const handleCreateItem = () => {
    if (!newItem.name || !newItem.description) {
      alert("Please fill in all required fields");
      return;
    }

    if (items[newItem.name]) {
      alert("An item with this name already exists");
      return;
    }

    const customItem: Item = {
      name: newItem.name,
      description: newItem.description,
      effects: newItem.effects,
      singleUse: newItem.singleUse,
      weight: newItem.weight,
    };

    setSelectedItem({
      item: customItem,
      quantity: 1,
      cost: 0,
    });

    setIsCreatingItem(false);
  };

  const getTotalWeight = (item: Item, quantity: number) => {
    const existingQuantity = items[item.name]?.quantity || 0;
    return item.weight * (quantity + existingQuantity);
  };

  const canAddItem = (item: Item, quantity: number) => {
    const totalWeight = getTotalWeight(item, quantity);
    return totalWeight <= maxWeight;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-4" disabled={maxWeight <= 0}>
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
                ? selectedItem.item.name
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
                {selectedItem.item.description}
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
                  <label className="text-sm font-medium">Cost per item</label>
                  <Input
                    type="number"
                    className="max-w-[100px]"
                    min="0"
                    value={selectedItem.cost}
                    onChange={(e) => handleCostChange(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Weight:</span>
                  <span>
                    {getTotalWeight(selectedItem.item, selectedItem.quantity)}{" "}
                    kg
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Cost:</span>
                  <span>
                    £ {(selectedItem.cost || 0) * selectedItem.quantity}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Your Money:</span>
                  <span>£ {money}</span>
                </div>
              </div>
            </div>

            <Button
              className="w-full mb-2"
              onClick={handleAddItem}
              disabled={
                !canAddItem(selectedItem.item, selectedItem.quantity) ||
                (selectedItem.cost || 0) * selectedItem.quantity > money
              }
            >
              Add to inventory
            </Button>
          </div>
        ) : isCreatingItem ? (
          <div className="flex-1 overflow-auto py-4">
            <div className="space-y-4 px-1">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input
                  value={newItem.name}
                  onChange={(e) =>
                    setNewItem({ ...newItem, name: e.target.value })
                  }
                  placeholder="Enter item name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={newItem.description}
                  onChange={(e) =>
                    setNewItem({ ...newItem, description: e.target.value })
                  }
                  placeholder="Enter item description"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Weight (kg)</label>
                <Input
                  type="number"
                  className="max-w-[100px]"
                  min="0"
                  step="0.1"
                  value={newItem.weight}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      weight: parseFloat(e.target.value) || 0,
                    })
                  }
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="singleUse"
                  checked={newItem.singleUse}
                  onChange={(e) =>
                    setNewItem({ ...newItem, singleUse: e.target.checked })
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
                  value={newItem.effects}
                  onChange={(effects) => setNewItem({ ...newItem, effects })}
                />
              </div>
              <Button onClick={handleCreateItem} className="w-full">
                Add to inventory
              </Button>
            </div>
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
