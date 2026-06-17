import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { Coins, Gem, Pencil } from "lucide-react";
import { moneyAtom } from "../state/character";
import { assetsValueAtom } from "../state/items";
import { Input } from "./ui/input";

export const InventoryStatsCard = () => {
  const [money, setMoney] = useAtom(moneyAtom);
  const [isEditingMoney, setIsEditingMoney] = useState(false);
  const assetsValue = useAtomValue(assetsValueAtom);

  const handleMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoney(Math.max(0, parseInt(e.target.value) || 0));
  };

  return (
    <div className="bg-card border rounded-lg p-4">
      <div className="grid grid-cols-2 gap-4">
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
                onBlur={() => setIsEditingMoney(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Escape") {
                    setIsEditingMoney(false);
                  }
                }}
                className="h-6 w-24 text-sm"
                autoFocus
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsEditingMoney(true)}
                aria-label="Edit money"
                className="flex items-center gap-1.5 text-sm text-muted-foreground rounded-sm underline decoration-dotted decoration-muted-foreground/50 underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                £ {money}
                <Pencil className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
            <Gem className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <div className="text-sm font-medium">Assets</div>
            <div className="text-sm text-muted-foreground">£ {assetsValue}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
