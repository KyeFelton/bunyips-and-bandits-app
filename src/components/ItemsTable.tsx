import { useAtom, useAtomValue } from "jotai";
import { itemsAtom, moneyAtom } from "../state/primitives";
import { skillLevelsAtom } from "../state/derived";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { X, Coins, Weight } from "lucide-react";
import { AddItemDialog } from "./AddItemDialog";
import { SkillType } from "../enums/SkillType";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Item } from "../models/items";
import { useState } from "react";

const getWeightLimit = (strengthLevel: number | undefined) => {
  switch (strengthLevel) {
    case 0:
      return 1;
    case 1:
      return 8;
    case 2:
      return 15;
    case 3:
      return 22;
    case 4:
      return 30;
    case 5:
      return 40;
    default:
      return 1;
  }
};

type ItemWithQuantity = Item & {
  equipped: boolean;
  quantity: number;
};

export const ItemsTable = () => {
  const [items, setItems] = useAtom(itemsAtom);
  const [money, setMoney] = useAtom(moneyAtom);
  const [isEditingMoney, setIsEditingMoney] = useState(false);
  const skillLevels = useAtomValue(skillLevelsAtom);

  // Group items by name and add quantities
  const itemsWithQuantity = items.reduce<ItemWithQuantity[]>((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
      // If any of the items are equipped, mark the group as equipped
      existingItem.equipped = existingItem.equipped || item.equipped;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  const weightLimit = getWeightLimit(skillLevels[SkillType.Strength]);

  const handleToggleEquipped = (itemName: string) => {
    setItems(
      items.map((item) =>
        item.name === itemName ? { ...item, equipped: !item.equipped } : item
      )
    );
  };

  const handleUseItem = (itemName: string) => {
    const item = items.find((i) => i.name === itemName);
    if (item?.singleUse) {
      // Remove one instance of the item
      const index = items.findIndex((i) => i.name === itemName);
      setItems([...items.slice(0, index), ...items.slice(index + 1)]);
    } else {
      handleToggleEquipped(itemName);
    }
  };

  const handleRemoveItem = (itemName: string) => {
    // Remove all instances of the item
    setItems(items.filter((item) => item.name !== itemName));
  };

  const handleMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMoney(Math.max(0, value));
  };

  const handleMoneyBlur = () => {
    setIsEditingMoney(false);
  };

  const handleMoneyKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsEditingMoney(false);
    } else if (e.key === "Escape") {
      setIsEditingMoney(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-card border rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Weight Section */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
              <Weight className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <div className="text-sm font-medium">Weight</div>
              <div
                className={`text-sm ${
                  totalWeight > weightLimit
                    ? "text-destructive"
                    : "text-muted-foreground"
                }`}
              >
                {totalWeight.toFixed(1)} / {weightLimit} kg
              </div>
            </div>
          </div>

          {/* Money Section */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
              <Coins className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <div className="text-sm font-medium">Money</div>
              {isEditingMoney ? (
                <Input
                  type="number"
                  value={money}
                  onChange={handleMoneyChange}
                  onBlur={handleMoneyBlur}
                  onKeyDown={handleMoneyKeyDown}
                  className="h-6 w-24 text-sm"
                  autoFocus
                />
              ) : (
                <div
                  onClick={() => setIsEditingMoney(true)}
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  £ {money}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <TooltipProvider>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-right">Weight</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {itemsWithQuantity.map((item) => (
              <TableRow key={item.name}>
                <TableCell>
                  <Tooltip>
                    <TooltipTrigger className="font-medium hover:text-accent-foreground">
                      {item.name}
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-[300px]">
                      <p>{item.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell className="text-center">{item.quantity}</TableCell>
                <TableCell className="text-right">{item.weight} kg</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant={item.equipped ? "default" : "outline"}
                      onClick={() => handleUseItem(item.name)}
                      className="w-24"
                    >
                      {item.singleUse
                        ? "Use"
                        : item.equipped
                        ? "Unequip"
                        : "Equip"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem(item.name)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {items.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-muted-foreground"
                >
                  No items in inventory
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TooltipProvider>

      <div className="flex justify-end">
        <AddItemDialog maxWeight={weightLimit - totalWeight} />
      </div>
    </div>
  );
};
