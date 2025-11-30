import { Effect } from "../models/effect";
import { DamageType } from "../enums/DamageType";
import { Locomotion } from "../enums/Locomotion";
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
  body: "Body",
  luck: "Luck",
  mind: "Mind",
  sense: "Sense",
  skill: "Skill",
  speed: "Speed",
  stamina: "Stamina",
  weapon: "Weapon",
};

export const EffectForm = ({ effects, onChange }: Props) => {
  const getDefaultEffect = (type: EffectType): Effect => {
    switch (type) {
      case "actions":
      case "evasions":
      case "body":
      case "luck":
      case "mind":
      case "stamina":
      case "weapon":
        return {
          [type]: {
            bonus: 0,
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
          sense: {
            gain: SenseType.Sight,
          },
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
            locomotion: Locomotion.Walk,
            increase: true,
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
    const newEffects = [...effects];
    newEffects[index] = updatedEffect;
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
                  handleUpdateEffect(index, {
                    sense: { gain: value as SenseType },
                  })
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
                  value={effectValue.bonus || ""}
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
                  value={effectValue.bonus || ""}
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
                  value={effectValue.locomotion}
                  onValueChange={(value) =>
                    handleUpdateEffect(index, {
                      speed: {
                        ...effectValue,
                        locomotion: value as Locomotion,
                      },
                    })
                  }
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(Locomotion).map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={effectValue.increase ? "increase" : "decrease"}
                  onValueChange={(value) =>
                    handleUpdateEffect(index, {
                      speed: {
                        ...effectValue,
                        locomotion: effectValue.locomotion,
                        increase: value === "increase",
                      },
                    })
                  }
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="increase">Increase</SelectItem>
                    <SelectItem value="decrease">Decrease</SelectItem>
                  </SelectContent>
                </Select>
              </>
            )}

            {effectType === "weapon" && (
              <>
                <Select
                  value={effectValue.damageType}
                  onValueChange={(value) =>
                    handleUpdateEffect(index, {
                      weapon: {
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
                  value={effectValue.bonus || ""}
                  onChange={(e) =>
                    handleUpdateEffect(index, {
                      weapon: {
                        ...effectValue,
                        damageType: effectValue.damageType,
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
              effectType === "body" ||
              effectType === "luck" ||
              effectType === "mind" ||
              effectType === "stamina") && (
              <Input
                type="number"
                value={effectValue.bonus || ""}
                onChange={(e) =>
                  handleUpdateEffect(index, {
                    [effectType]: {
                      bonus: parseInt(e.target.value) || 0,
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
