import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Bed, Plus, X } from "lucide-react";
import {
  bodyAtom,
  mindAtom,
  staminaAtom,
  currentBodyAtom,
  currentMindAtom,
  currentStaminaAtom,
  conditionsAtom,
  skillsProgressedSinceRestAtom,
} from "../state/character";
import { SkillType } from "../enums/SkillType";
import { HealthBar } from "./HealthBar";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { AddConditionModal } from "./AddConditionModal";
import { DefeatModal } from "./DefeatModal";
import { ConditionGainedModal } from "./ConditionGainedModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Hysteria,
  Amnesia,
  Deluded,
  Frightened,
  Condition,
} from "../models/conditions";

type Props = {
  className?: string;
};

export const HealthCard = ({ className }: Props) => {
  const body = useAtomValue(bodyAtom);
  const mind = useAtomValue(mindAtom);
  const stamina = useAtomValue(staminaAtom);
  const [conditions, setConditions] = useAtom(conditionsAtom);
  const setCurrentBody = useSetAtom(currentBodyAtom);
  const setCurrentMind = useSetAtom(currentMindAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const setSkillsProgressedSinceRest = useSetAtom(skillsProgressedSinceRestAtom);
  const [isAddConditionModalOpen, setIsAddConditionModalOpen] = useState(false);
  const [isDefeatModalOpen, setIsDefeatModalOpen] = useState(false);
  const [isConditionGainedModalOpen, setIsConditionGainedModalOpen] =
    useState(false);
  const [gainedCondition, setGainedCondition] = useState<Condition | null>(
    null
  );
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(
    null
  );

  const calculateRestHealthValue = (
    health: { current: number; max: number },
    staminaPercentage: number
  ) => {
    const increase = Math.ceil(staminaPercentage / 0.5);
    return Math.min(health.current + increase, health.max);
  };

  const handleRest = () => {
    const staminaPercentage = stamina.current / stamina.max;
    setCurrentBody(calculateRestHealthValue(body, staminaPercentage));
    setCurrentMind(calculateRestHealthValue(mind, staminaPercentage));
    setCurrentStamina(stamina.max);
    setConditions([]);
    setSkillsProgressedSinceRest(new Set<SkillType>());
  };

  const handleRemoveCondition = (conditionName: string) => {
    setConditions((prev) => prev.filter((c) => c.name !== conditionName));
  };

  const handleHealthChange = (
    value: number,
    setter: (value: number) => void
  ) => {
    setter(value);
    if (value === 0 && setter === setCurrentBody) {
      setIsDefeatModalOpen(true);
    } else if (value === 0 && setter === setCurrentMind) {
      const mentalConditions = [Hysteria, Amnesia, Deluded, Frightened];
      const randomCondition =
        mentalConditions[Math.floor(Math.random() * mentalConditions.length)];
      setGainedCondition(randomCondition);
      setIsConditionGainedModalOpen(true);
    }
  };

  return (
    <Card className={className}>
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
          max={body.max}
          name="Body"
          onChange={(value) => handleHealthChange(value, setCurrentBody)}
          value={body.current}
        />
        <HealthBar
          colours={{ good: "green", warning: "yellow", bad: "red" }}
          max={mind.max}
          name="Mind"
          onChange={(value) => handleHealthChange(value, setCurrentMind)}
          value={mind.current}
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
              ).map(([name, count]) => {
                const condition = conditions.find((c) => c.name === name);
                return (
                  <Badge
                    key={name}
                    variant="secondary"
                    className="gap-1 cursor-pointer hover:bg-secondary/80"
                    onClick={() => condition && setSelectedCondition(condition)}
                  >
                    {name}
                    {count > 1 && <span className="text-xs">x{count}</span>}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 hover:bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveCondition(name);
                      }}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                );
              })
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
      <DefeatModal
        isOpen={isDefeatModalOpen}
        onClose={() => setIsDefeatModalOpen(false)}
      />
      {gainedCondition && (
        <ConditionGainedModal
          isOpen={isConditionGainedModalOpen}
          onClose={() => setIsConditionGainedModalOpen(false)}
          condition={gainedCondition}
        />
      )}
      <Dialog
        open={selectedCondition !== null}
        onOpenChange={(open) => !open && setSelectedCondition(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedCondition?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {selectedCondition?.description}
            </p>
            {selectedCondition?.effects &&
              selectedCondition.effects.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Effects:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {selectedCondition.effects.map((effect, index) => (
                      <li key={index}>
                        {effect.skill && (
                          <span>
                            {effect.skill.bonus && effect.skill.bonus > 0
                              ? "+"
                              : ""}
                            {effect.skill.bonus} {effect.skill.skillType}
                          </span>
                        )}
                        {effect.stamina && (
                          <span>
                            {effect.stamina.bonus && effect.stamina.bonus > 0
                              ? "+"
                              : ""}
                            {effect.stamina.bonus} Stamina
                          </span>
                        )}
                        {effect.body && (
                          <span>
                            {effect.body.bonus && effect.body.bonus > 0
                              ? "+"
                              : ""}
                            {effect.body.bonus} Body
                          </span>
                        )}
                        {effect.mind && (
                          <span>
                            {effect.mind.bonus && effect.mind.bonus > 0
                              ? "+"
                              : ""}
                            {effect.mind.bonus} Mind
                          </span>
                        )}
                        {effect.evasions && (
                          <span>
                            {effect.evasions.bonus && effect.evasions.bonus > 0
                              ? "+"
                              : ""}
                            {effect.evasions.bonus} Evasion
                          </span>
                        )}
                        {effect.armour && (
                          <span>
                            {effect.armour.bonus && effect.armour.bonus > 0
                              ? "+"
                              : ""}
                            {effect.armour.bonus} {effect.armour.damageType}{" "}
                            Armour
                          </span>
                        )}
                        {effect.speed && (
                          <span>
                            {effect.speed.increase ? "Increases" : "Decreases"}{" "}
                            {effect.speed.locomotion} Speed
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
