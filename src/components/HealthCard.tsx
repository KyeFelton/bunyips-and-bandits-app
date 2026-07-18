import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Bed, Plus, X } from "lucide-react";
import { useState } from "react";
import { Unconscious, Condition } from "../models/conditions";
import { SkillType } from "../enums/SkillType";
import {
  bodyAtom,
  conditionsAtom,
  currentBodyAtom,
  currentMindAtom,
  currentStaminaAtom,
  mindAtom,
  skillsProgressedSinceRestAtom,
  staminaAtom,
} from "../state/character";
import { cn } from "../utils/cn";
import { AddConditionModal } from "./AddConditionModal";
import { DefeatModal } from "./DefeatModal";
import { DefeatPulseOverlay } from "./DefeatPulseOverlay";
import { HealthBar } from "./HealthBar";
import { useDefeatPulse } from "../hooks/useDefeatPulse";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

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
  const setSkillsProgressedSinceRest = useSetAtom(
    skillsProgressedSinceRestAtom,
  );
  const [isAddConditionModalOpen, setIsAddConditionModalOpen] = useState(false);
  const [isDefeatModalOpen, setIsDefeatModalOpen] = useState(false);
  const [isDefeatRevealed, setIsDefeatRevealed] = useState(false);
  const [defeatTrack, setDefeatTrack] = useState<"body" | "mind">("body");
  const { isPulseVisible, isPulseFadingOut, pulseSession } = useDefeatPulse(
    isDefeatModalOpen,
    isDefeatRevealed && isDefeatModalOpen,
  );
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(
    null,
  );

  const calculateRestHealthValue = (
    health: { current: number; max: number },
    staminaPercentage: number,
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

  const applyUnconscious = () => {
    setConditions((prev) => {
      if (prev.some((condition) => condition.name === Unconscious.name)) {
        return prev;
      }
      return [...prev, Unconscious];
    });
  };

  const handleHealthChange = (
    value: number,
    setter: (value: number) => void,
    track: "body" | "mind",
  ) => {
    setter(value);
    if (value === 0) {
      applyUnconscious();
      setDefeatTrack(track);
      setIsDefeatRevealed(false);
      setIsDefeatModalOpen(true);
    }
  };

  return (
    <div className={cn(className)}>
      <div className="flex items-center justify-between p-6 pb-2">
        <h3 className="text-xl font-semibold leading-none tracking-tight">
          Health
        </h3>
        <Button
          onClick={handleRest}
          variant="outline"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Bed className="h-4 w-4" />
          Rest
        </Button>
      </div>
      <div className="p-6 space-y-4 pt-4">
        <HealthBar
          colours={{ good: "good", warning: "warning", bad: "danger" }}
          max={body.max}
          name="Body"
          onChange={(value) =>
            handleHealthChange(value, setCurrentBody, "body")
          }
          value={body.current}
        />
        <HealthBar
          colours={{ good: "good", warning: "warning", bad: "danger" }}
          max={mind.max}
          name="Mind"
          onChange={(value) =>
            handleHealthChange(value, setCurrentMind, "mind")
          }
          value={mind.current}
        />
        <HealthBar
          colours={{ good: "info", warning: "lightInfo", bad: "lightInfo" }}
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
                conditions.reduce(
                  (acc, condition) => {
                    acc[condition.name] = (acc[condition.name] || 0) + 1;
                    return acc;
                  },
                  {} as Record<string, number>,
                ),
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
      </div>
      <AddConditionModal
        isOpen={isAddConditionModalOpen}
        onClose={() => setIsAddConditionModalOpen(false)}
      />
      <DefeatPulseOverlay
        active={isPulseVisible}
        fadingOut={isPulseFadingOut}
        pulseSession={pulseSession}
      />
      <DefeatModal
        isOpen={isDefeatModalOpen}
        track={defeatTrack}
        onClose={() => {
          setIsDefeatModalOpen(false);
          setIsDefeatRevealed(false);
        }}
        onRevealedChange={setIsDefeatRevealed}
      />
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
    </div>
  );
};
