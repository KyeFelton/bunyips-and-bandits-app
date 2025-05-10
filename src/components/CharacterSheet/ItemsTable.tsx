import { useAtom, useAtomValue } from "jotai";
import { itemsAtom, moneyAtom, skillLevelsAtom } from "../../state/character";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { X, Coins, Weight, HelpCircle } from "lucide-react";
import { AddItemDialog } from "./AddItemDialog";
import { SkillType } from "../../enums/SkillType";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const getWeightLimit = (strengthLevel: number) => {
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

export const ItemsTable = () => {
  const [items, setItems] = useAtom(itemsAtom);
  const [money, setMoney] = useAtom(moneyAtom);
  const [isEditingMoney, setIsEditingMoney] = useState(false);
  const skillLevels = useAtomValue(skillLevelsAtom);

  const totalWeight = Object.values(items).reduce(
    (sum, item) => sum + item.weight * item.quantity,
    0
  );
  const weightLimit = getWeightLimit(skillLevels[SkillType.Strength] || 1);

  const handleToggleEquipped = (itemName: string) => {
    setItems((prev) => ({
      ...prev,
      [itemName]: {
        ...prev[itemName],
        equipped: !prev[itemName].equipped,
      },
    }));
  };

  const handleUseItem = (itemName: string) => {
    const item = items[itemName];
    if (item.singleUse) {
      if (item.quantity > 1) {
        setItems((prev) => ({
          ...prev,
          [itemName]: {
            ...prev[itemName],
            quantity: prev[itemName].quantity - 1,
          },
        }));
      } else {
        setItems((prev) => {
          const newItems = { ...prev };
          delete newItems[itemName];
          return newItems;
        });
      }
    } else {
      handleToggleEquipped(itemName);
    }
  };

  const handleRemoveItem = (itemName: string) => {
    setItems((prev) => {
      const newItems = { ...prev };
      delete newItems[itemName];
      return newItems;
    });
  };

  const handleMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMoney(Math.max(0, value));
  };

  const handleMoneyBlur = () => {
    setIsEditingMoney(false);
  };

  const handleMoneyKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === "Escape") {
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
                  value={money === 0 ? "" : money}
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
          {Object.entries(items).map(([name, item]) => (
            <TableRow key={name}>
              <TableCell>
                <div className="flex items-center gap-1">
                  {name}
                  <Popover>
                    <PopoverTrigger className="w-6 h-6 flex items-center justify-center text-muted-foreground text-left hover:bg-accent hover:text-accent-foreground rounded-full">
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </PopoverTrigger>
                    <PopoverContent
                      className="max-w-[300px] text-sm"
                      side="right"
                    >
                      <p>{item.description}</p>
                    </PopoverContent>
                  </Popover>
                </div>
              </TableCell>
              <TableCell className="text-center">{item.quantity}</TableCell>
              <TableCell className="text-right">{item.weight} kg</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant={item.equipped ? "default" : "outline"}
                    onClick={() => handleUseItem(name)}
                    className="w-16"
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
                    onClick={() => handleRemoveItem(name)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {Object.keys(items).length === 0 && (
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

      <div className="flex justify-center">
        <AddItemDialog maxWeight={weightLimit - totalWeight} />
      </div>
    </div>
  );
};
