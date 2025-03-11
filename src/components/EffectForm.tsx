import { Effect } from "../models/effect";
import { DamageType } from "../enums/DamageType";
import { MovementType } from "../enums/MovementType";
import { SkillType } from "../enums/SkillType";
import { SenseType } from "../enums/SenseType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus, X } from "lucide-react";

type Props = {
  effects: Effect[];
  onChange: (effects: Effect[]) => void;
};

type EffectType = keyof Effect;

const EffectTypeLabels: Record<EffectType, string> = {
  actions: "Actions",
  armour: "Armour",
  evasions: "Evasions",
  health: "Hit points",
  luck: "Luck",
  sanity: "Morale",
  sense: "Sense",
  skill: "Skill",
  speed: "Movement",
  stamina: "Stamina",
  weaponDamage: "Weapon damage",
};

export const EffectForm = ({ effects, onChange }: Props) => {
  const getDefaultEffect = (type: EffectType): Effect => {
    switch (type) {
      case "actions":
      case "evasions":
      case "health":
      case "luck":
      case "sanity":
      case "stamina":
      case "weaponDamage":
        return {
          [type]: {
            static: 0,
          },
        };
      case "armour":
        return {
          armour: {
            damageType: DamageType.Slash,
            bonus: 0,
          },
        };
      case "sense":
        return {
          sense: SenseType.Sight,
        };
      case "skill":
        return {
          skill: {
            skillType: SkillType.Strength,
            bonus: 0,
          },
        };
      case "speed":
        return {
          speed: {
            movementType: MovementType.Walk,
            bonus: 0,
          },
        };
    }
  };

  const handleAddEffect = () => {
    const newEffect = getDefaultEffect("actions");
    const newEffects = [...effects, newEffect];
    onChange(newEffects);
  };

  const handleRemoveEffect = (index: number) => {
    const newEffects = [...effects];
    newEffects.splice(index, 1);
    onChange(newEffects);
  };

  const handleUpdateEffect = (index: number, updatedEffect: Effect) => {
    console.log(effects);
    const newEffects = [...effects];
    newEffects[index] = updatedEffect;
    console.log(newEffects);
    onChange(newEffects);
  };

  return (
    <div className="space-y-2">
      {effects.map((effect, index) => {
        const effectType = Object.keys(effect)[0] as keyof Effect;
        const effectValue = effect[effectType];
        if (!effectType || !effectValue) return null;
        return (
          <div
            key={index}
            className="flex items-center gap-2 bg-muted p-2 rounded-md"
          >
            <Select
              value={Object.keys(effect)[0]}
              onValueChange={(value) =>
                handleUpdateEffect(index, getDefaultEffect(value as EffectType))
              }
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select effect type" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(EffectTypeLabels).map((type) => (
                  <SelectItem key={type} value={type}>
                    {EffectTypeLabels[type as EffectType]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {effectType === "sense" && (
              <Select
                value={effectValue as SenseType}
                onValueChange={(value) =>
                  handleUpdateEffect(index, { sense: value as SenseType })
                }
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(SenseType).map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {effectType === "armour" && (
              <>
                <Select
                  value={effectValue.damageType}
                  onValueChange={(value) =>
                    handleUpdateEffect(index, {
                      armour: {
                        ...effectValue,
                        damageType: value as DamageType,
                      },
                    })
                  }
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(DamageType).map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  value={effectValue.static || ""}
                  onChange={(e) =>
                    handleUpdateEffect(index, {
                      armour: {
                        ...effectValue,
                        bonus: parseInt(e.target.value) || 0,
                      },
                    })
                  }
                  className="w-20"
                />
              </>
            )}

            {effectType === "skill" && (
              <>
                <Select
                  value={effectValue.skillType}
                  onValueChange={(value) =>
                    handleUpdateEffect(index, {
                      skill: {
                        ...effectValue,
                        skillType: value as SkillType,
                      },
                    })
                  }
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(SkillType).map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  value={effectValue.static || ""}
                  onChange={(e) =>
                    handleUpdateEffect(index, {
                      skill: {
                        ...effectValue,
                        skillType: effectValue.skillType,
                        bonus: parseInt(e.target.value) || 0,
                      },
                    })
                  }
                  className="w-20"
                />
              </>
            )}

            {effectType === "speed" && (
              <>
                <Select
                  value={effectValue.movementType}
                  onValueChange={(value) =>
                    handleUpdateEffect(index, {
                      speed: {
                        ...effectValue,
                        movementType: value as MovementType,
                      },
                    })
                  }
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(MovementType).map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  value={effectValue.static || ""}
                  onChange={(e) =>
                    handleUpdateEffect(index, {
                      speed: {
                        ...effectValue,
                        movementType: effectValue.movementType,
                        bonus: parseInt(e.target.value) || 0,
                      },
                    })
                  }
                  className="w-20"
                />
              </>
            )}

            {(effectType === "actions" ||
              effectType === "evasions" ||
              effectType === "health" ||
              effectType === "luck" ||
              effectType === "sanity" ||
              effectType === "stamina" ||
              effectType === "weaponDamage") && (
              <Input
                type="number"
                value={effectValue.static || ""}
                onChange={(e) =>
                  handleUpdateEffect(index, {
                    [effectType]: {
                      static: parseInt(e.target.value) || 0,
                    },
                  })
                }
                className="w-20"
              />
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleRemoveEffect(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        );
      })}
      <Button onClick={handleAddEffect} variant="outline">
        <Plus className="h-4 w-4 mr-2" /> Add
      </Button>
    </div>
  );
};
