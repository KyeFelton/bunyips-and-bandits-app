import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAtom } from "jotai";
import {
  currentHealthAtom,
  currentSanityAtom,
  currentStaminaAtom,
} from "../state/primitives";

type Props = {
  colour?: "green" | "blue" | "red";
  type: "health" | "sanity" | "stamina";
  max: number;
};

export const StatBar = ({ colour, type, max }: Readonly<Props>) => {
  const [modifyValue, setModifyValue] = useState("");
  const [currentHealth, setCurrentHealth] = useAtom(currentHealthAtom);
  const [currentSanity, setCurrentSanity] = useAtom(currentSanityAtom);
  const [currentStamina, setCurrentStamina] = useAtom(currentStaminaAtom);

  const getCurrentValue = () => {
    switch (type) {
      case "health":
        return currentHealth;
      case "sanity":
        return currentSanity;
      case "stamina":
        return currentStamina;
    }
  };

  const setCurrentValue = (value: number) => {
    switch (type) {
      case "health":
        setCurrentHealth(value);
        break;
      case "sanity":
        setCurrentSanity(value);
        break;
      case "stamina":
        setCurrentStamina(value);
        break;
    }
  };

  const current = getCurrentValue();
  const percent = (current / max) * 100;

  const handleModifyStat = (amount: number) => {
    if (Number.isNaN(amount)) {
      return;
    }

    const newValue = Math.min(Math.max(current + amount, 0), max);
    setCurrentValue(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setModifyValue(value || "");
  };

  const title = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="py-2">
      <div className="flex justify-between">
        <span>{title}</span>
        <span>
          {current} / {max}
        </span>
      </div>
      <Progress value={percent} colour={colour ?? "primary"} />
      <div className="flex justify-end gap-2 mt-2">
        <Button
          variant="outline"
          size="mini"
          onClick={() => handleModifyStat(-parseInt(modifyValue))}
        >
          <FontAwesomeIcon icon={faMinus} size="sm" />
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
          onClick={() => handleModifyStat(parseInt(modifyValue))}
        >
          <FontAwesomeIcon icon={faPlus} size="sm" />
        </Button>
      </div>
    </div>
  );
};
