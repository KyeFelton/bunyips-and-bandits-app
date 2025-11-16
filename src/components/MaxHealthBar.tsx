import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

type Props = {
  availableUpgrades: number;
  maxUpgrades: number;
  maxValue: number;
  name: string;
  onChange: (value: number) => void;
  upgrades: number;
  value: number;
};

export const MaxHealthBar = ({
  availableUpgrades,
  maxUpgrades,
  maxValue,
  name,
  onChange,
  upgrades,
  value,
}: Readonly<Props>) => {
  return (
    <div className="w-full pb-4 flex justify-start items-end">
      <div className="h-6 w-6 mr-1">
        {upgrades > 0 && (
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => onChange(-1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
        )}
      </div>
      <div style={{ width: `${(value * 100) / maxValue}%` }}>
        <div className="flex justify-between mb-1">
          <span className="font-medium">{name}</span>
          <span>
            {value}
            <span className="text-sm text-muted-foreground ml-1">
              (+{upgrades})
            </span>
          </span>
        </div>
        <div className="flex">
          {Array.from({ length: value }, (_, index) => {
            return (
              <div
                key={index}
                className="h-6 w-full border border-black first:rounded-l-sm last:rounded-r-sm border-r-0 last:border-r bg-green-foreground"
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="h-6 w-6 ml-1">
          {upgrades < maxUpgrades && availableUpgrades > 0 && (
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6"
              onClick={() => onChange(1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
