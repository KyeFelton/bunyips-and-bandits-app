import { useAtom, useAtomValue } from "jotai";
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

export const StatsCard = () => {
  const physique = useAtomValue(physiqueAtom);
  const morale = useAtomValue(moraleAtom);
  const stamina = useAtomValue(staminaAtom);
  const [currentPhysique, setCurrentPhysique] = useAtom(currentPhysiqueAtom);
  const [currentMorale, setCurrentMorale] = useAtom(currentMoraleAtom);
  const [currentStamina, setCurrentStamina] = useAtom(currentStaminaAtom);

  const handleRest = () => {
    const staminaBeforeRest = currentStamina;
    const newPhysique = Math.min(
      currentPhysique + staminaBeforeRest,
      physique.max
    );
    setCurrentPhysique(newPhysique);
    const newMorale = Math.min(currentMorale + staminaBeforeRest, morale.max);
    setCurrentMorale(newMorale);
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
          value={currentPhysique}
        />
        <HealthBar
          colours={{ good: "green", warning: "yellow", bad: "red" }}
          max={morale.max}
          name="Morale"
          onChange={setCurrentMorale}
          value={currentMorale}
        />
        <HealthBar
          colours={{ good: "blue", warning: "blue", bad: "blue" }}
          max={stamina.max}
          name="Stamina"
          onChange={setCurrentStamina}
          value={currentStamina}
        />
      </CardContent>
    </Card>
  );
};
