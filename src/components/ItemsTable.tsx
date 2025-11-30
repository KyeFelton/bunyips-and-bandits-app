import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  itemsAtom,
  moneyAtom,
  skillLevelsAtom,
  conditionsAtom,
  currentBodyAtom,
  currentMindAtom,
  currentStaminaAtom,
  bodyAtom,
  mindAtom,
  staminaAtom,
} from "./../state/character";
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
import { X, Coins, Weight, HelpCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { AddItemDialog } from "./AddItemDialog";
import { SkillType } from "./../enums/SkillType";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { AllConditions } from "./../models/conditions";

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
  const [conditions, setConditions] = useAtom(conditionsAtom);
  const setCurrentBody = useSetAtom(currentBodyAtom);
  const setCurrentMind = useSetAtom(currentMindAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const body = useAtomValue(bodyAtom);
  const mind = useAtomValue(mindAtom);
  const stamina = useAtomValue(staminaAtom);

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
      // Process immediate effects before removing the item
      if (item.immediateEffect) {
        const {
          body: bodyBonus,
          mind: mindBonus,
          stamina: staminaBonus,
          condition,
        } = item.immediateEffect;

        // Apply stat increases (capped at max)
        if (bodyBonus) {
          setCurrentBody((prev) =>
            Math.min(prev + bodyBonus, body.max)
          );
        }
        if (mindBonus) {
          setCurrentMind((prev) => Math.min(prev + mindBonus, mind.max));
        }
        if (staminaBonus) {
          setCurrentStamina((prev) =>
            Math.min(prev + staminaBonus, stamina.max)
          );
        }

        // Grant condition
        if (condition) {
          const conditionData = AllConditions.find((c) => c.name === condition);
          if (conditionData) {
            // Check if character already has this condition
            const existingConditionCount = conditions.filter(
              (c) => c.name === condition
            ).length;

            // Apply damage if consuming repeatedly (already has the condition)
            if (existingConditionCount > 0) {
              setCurrentPhysique((prev) => Math.max(0, prev - 2));
            }

            setConditions((prev) => {
              // For stackable conditions (stackable > 0), add up to max stack count
              // For non-stackable (stackable = 0), only add if not already present
              if (conditionData.stackable > 0) {
                // Check if at max stack count
                if (existingConditionCount < conditionData.stackable) {
                  return [...prev, conditionData];
                }
                // Already at max, don't add more
                return prev;
              } else {
                const hasCondition = prev.some((c) => c.name === condition);
                return hasCondition ? prev : [...prev, conditionData];
              }
            });
          }
        }
      }

      // Remove or decrement item
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

  const handleQuantityChange = (itemName: string, value: string) => {
    const quantity = Math.max(1, parseInt(value) || 1);
    setItems((prev) => ({
      ...prev,
      [itemName]: {
        ...prev[itemName],
        quantity,
      },
    }));
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
              <TableCell className="text-center">
                <Select
                  value={item.quantity.toString()}
                  onValueChange={(value) => handleQuantityChange(name, value)}
                >
                  <SelectTrigger className="h-8 w-16 mx-auto">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(() => {
                      // Calculate weight used by other items
                      const otherItemsWeight = Object.entries(items)
                        .filter(([itemName]) => itemName !== name)
                        .reduce((sum, [, i]) => sum + i.weight * i.quantity, 0);

                      // Calculate max quantity we can carry of this item
                      const availableWeight = weightLimit - otherItemsWeight;
                      const maxQuantity =
                        item.weight > 0
                          ? Math.floor(availableWeight / item.weight)
                          : 20;

                      // Cap at 20 for practical reasons
                      const cappedMaxQuantity = Math.min(
                        Math.max(1, maxQuantity),
                        20
                      );

                      return Array.from(
                        { length: cappedMaxQuantity },
                        (_, i) => i + 1
                      ).map((qty) => (
                        <SelectItem key={qty} value={qty.toString()}>
                          {qty}
                        </SelectItem>
                      ));
                    })()}
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="text-right">
                {Math.round(item.weight * item.quantity * 10) / 10} kg
              </TableCell>
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

      <div className="flex flex-col items-center gap-2">
        <AddItemDialog maxWeight={weightLimit - totalWeight} />
        {weightLimit - totalWeight <= 0 && (
          <p className="text-sm text-muted-foreground text-center">
            Weight capacity full
          </p>
        )}
      </div>
    </div>
  );
};
