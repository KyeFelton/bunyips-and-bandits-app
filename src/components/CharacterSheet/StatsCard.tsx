import { useAtom, useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { StatBar } from "../StatBar";
import { Bed } from "lucide-react";
import {
  physiqueAtom,
  moraleAtom,
  staminaAtom,
  currentPhysiqueAtom,
  currentMoraleAtom,
  currentStaminaAtom,
} from "../../state/character";

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
        <StatBar
          colour="red"
          max={physique.max}
          name="Physique"
          onChange={setCurrentPhysique}
          value={currentPhysique}
        />
        <StatBar
          colour="green"
          max={morale.max}
          name="Morale"
          onChange={setCurrentMorale}
          value={currentMorale}
        />
        <StatBar
          colour="blue"
          max={stamina.max}
          name="Stamina"
          onChange={setCurrentStamina}
          value={currentStamina}
        />
      </CardContent>
    </Card>
  );
};
