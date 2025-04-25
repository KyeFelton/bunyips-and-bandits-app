import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { useMemo } from "react";

type Colour = "green" | "blue" | "lightBlue" | "red" | "yellow";

const colourMap: Record<Colour, string> = {
  green: "bg-green-foreground",
  blue: "bg-blue-foreground",
  lightBlue: "bg-blue",
  red: "bg-red-foreground",
  yellow: "bg-yellow-foreground",
};

type Props = {
  colours: {
    good: Colour;
    warning: Colour;
    bad: Colour;
  };
  max: number;
  name: string;
  onChange: (value: number) => void;
  value: number;
};

export const HealthBar = ({
  colours,
  max,
  name,
  onChange,
  value,
}: Readonly<Props>) => {
  const segments = useMemo(() => {
    return Array.from({ length: max }, (_, index) => {
      const isFilled = index < value;
      let colour = colourMap[colours.good];

      if (value === 1 && isFilled) {
        colour = colourMap[colours.bad];
      } else if (value <= max / 2 && isFilled) {
        colour = colourMap[colours.warning];
      }

      return (
        <div
          key={index}
          className={`h-6 w-full border border-black first:rounded-l-sm last:rounded-r-sm border-r-0 last:border-r ${
            isFilled ? colour : "bg-gray-200"
          }`}
        />
      );
    });
  }, [colours.good, colours.bad, colours.warning, max, value]);

  const handleModifyStat = (amount: number) => {
    const newValue = Math.min(Math.max(value + amount, 0), max);
    onChange(newValue);
  };

  return (
    <div className="w-full pb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>
          {value} / {max}
        </span>
      </div>
      <div className="relative flex">
        <Button
          variant="outline"
          size="icon"
          className="h-6 w-6 mr-1"
          onClick={() => handleModifyStat(-1)}
          disabled={value == 0}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <div className="flex-1 flex">{segments}</div>
        <Button
          variant="outline"
          size="icon"
          className="h-6 w-6 ml-1"
          onClick={() => handleModifyStat(1)}
          disabled={value == max}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
