import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Plus, Minus } from "lucide-react";
import { useMemo, useState } from "react";

type Props = {
  colour?: "green" | "blue" | "red";
  max: number;
  name: string;
  onChange: (value: number) => void;
  value: number;
};

export const StatBar = ({
  colour,
  max,
  name,
  onChange,
  value,
}: Readonly<Props>) => {
  const [modifyValue, setModifyValue] = useState("");
  const modifyNumber = useMemo(
    () => (modifyValue ? parseInt(modifyValue) : 1),
    [modifyValue]
  );
  const percent = (value / max) * 100;

  const handleModifyStat = (amount: number) => {
    if (Number.isNaN(amount)) {
      return;
    }

    const newValue = Math.min(Math.max(value + amount, 0), max);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setModifyValue(value || "");
  };

  return (
    <div className="pb-4">
      <div className="flex justify-between">
        <span>{name}</span>
        <span>
          {value} / {max}
        </span>
      </div>
      <Progress value={percent} colour={colour ?? "primary"} />
      <div className="flex justify-end gap-2 mt-2">
        <Button
          variant="outline"
          size="mini"
          onClick={() => handleModifyStat(-modifyNumber)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          className="h-7 w-14 text-center"
          type="text"
          value={modifyValue}
          onChange={handleInputChange}
        />
        <Button
          variant="outline"
          size="mini"
          onClick={() => handleModifyStat(modifyNumber)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
