import { useAtomValue, useSetAtom } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Bed } from "lucide-react";
import {
  physiqueAtom,
  moraleAtom,
  staminaAtom,
  currentPhysiqueAtom,
  currentMoraleAtom,
  currentStaminaAtom,
} from "../../state/character";
import { HealthBar } from "../HealthBar";

export const HealthCard = () => {
  const physique = useAtomValue(physiqueAtom);
  const morale = useAtomValue(moraleAtom);
  const stamina = useAtomValue(staminaAtom);
  const setCurrentPhysique = useSetAtom(currentPhysiqueAtom);
  const setCurrentMorale = useSetAtom(currentMoraleAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);

  const calculateRestHealthValue = (
    health: { current: number; max: number },
    staminaPercentage: number
  ) => {
    const increase = Math.ceil(staminaPercentage / 0.5);
    return Math.min(health.current + increase, health.max);
  };

  const handleRest = () => {
    const staminaPercentage = stamina.current / stamina.max;
    setCurrentPhysique(calculateRestHealthValue(physique, staminaPercentage));
    setCurrentMorale(calculateRestHealthValue(morale, staminaPercentage));
    setCurrentStamina(stamina.max);
  };

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Health</CardTitle>
        <Button
          onClick={handleRest}
          variant="outline"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Bed className="h-4 w-4" />
          Rest
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <HealthBar
          colours={{ good: "green", warning: "yellow", bad: "red" }}
          max={physique.max}
          name="Physique"
          onChange={setCurrentPhysique}
          value={physique.current}
        />
        <HealthBar
          colours={{ good: "green", warning: "yellow", bad: "red" }}
          max={morale.max}
          name="Morale"
          onChange={setCurrentMorale}
          value={morale.current}
        />
        <HealthBar
          colours={{ good: "blue", warning: "lightBlue", bad: "lightBlue" }}
          max={stamina.max}
          name="Stamina"
          onChange={setCurrentStamina}
          value={stamina.current}
        />
      </CardContent>
    </Card>
  );
};
