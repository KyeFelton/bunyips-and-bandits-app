import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Bed, Plus, X } from "lucide-react";
import {
  physiqueAtom,
  moraleAtom,
  staminaAtom,
  currentPhysiqueAtom,
  currentMoraleAtom,
  currentStaminaAtom,
  conditionsAtom,
} from "../../state/character";
import { HealthBar } from "../HealthBar";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { AddConditionModal } from "./AddConditionModal";

export const HealthCard = () => {
  const physique = useAtomValue(physiqueAtom);
  const morale = useAtomValue(moraleAtom);
  const stamina = useAtomValue(staminaAtom);
  const [conditions, setConditions] = useAtom(conditionsAtom);
  const setCurrentPhysique = useSetAtom(currentPhysiqueAtom);
  const setCurrentMorale = useSetAtom(currentMoraleAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const [isAddConditionModalOpen, setIsAddConditionModalOpen] = useState(false);

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

  const handleRemoveCondition = (conditionName: string) => {
    setConditions((prev) => prev.filter((c) => c.name !== conditionName));
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
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="text-sm text-muted-foreground">Conditions</div>
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6"
              onClick={() => setIsAddConditionModalOpen(true)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {conditions?.length > 0 ? (
              Object.entries(
                conditions.reduce((acc, condition) => {
                  acc[condition.name] = (acc[condition.name] || 0) + 1;
                  return acc;
                }, {} as Record<string, number>)
              ).map(([name, count]) => (
                <Badge key={name} variant="secondary" className="gap-1">
                  {name}
                  {count > 1 && <span className="text-xs">x{count}</span>}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 hover:bg-transparent"
                    onClick={() => handleRemoveCondition(name)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))
            ) : (
              <span className="text-sm">None</span>
            )}
          </div>
        </div>
      </CardContent>
      <AddConditionModal
        isOpen={isAddConditionModalOpen}
        onClose={() => setIsAddConditionModalOpen(false)}
      />
    </Card>
  );
};
