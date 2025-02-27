import { useState } from "react";
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
import { X } from "lucide-react";

type Props = {
  value: Effect[];
  onChange: (effects: Effect[]) => void;
};

type EffectType =
  | "actions"
  | "armour"
  | "evasions"
  | "health"
  | "luck"
  | "sanity"
  | "sense"
  | "skill"
  | "speed"
  | "stamina"
  | "weaponDamage";

const effectTypes: { value: EffectType; label: string }[] = [
  { value: "actions", label: "Actions" },
  { value: "armour", label: "Armour" },
  { value: "evasions", label: "Evasions" },
  { value: "health", label: "Health" },
  { value: "luck", label: "Luck" },
  { value: "sanity", label: "Sanity" },
  { value: "sense", label: "Sense" },
  { value: "skill", label: "Skill" },
  { value: "speed", label: "Speed" },
  { value: "stamina", label: "Stamina" },
  { value: "weaponDamage", label: "Weapon Damage" },
];

export const EffectForm = ({ value, onChange }: Props) => {
  const [selectedType, setSelectedType] = useState<EffectType | "">("");

  const handleAddEffect = () => {
    if (!selectedType) return;

    let newEffect: Effect = {};

    switch (selectedType) {
      case "actions":
      case "evasions":
      case "health":
      case "luck":
      case "sanity":
      case "stamina":
      case "weaponDamage":
        newEffect = {
          [selectedType]: {
            static: 0,
          },
        };
        break;
      case "armour":
        newEffect = {
          armour: {
            damageType: DamageType.Slash,
            static: 0,
          },
        };
        break;
      case "sense":
        newEffect = {
          sense: SenseType.Sight,
        };
        break;
      case "skill":
        newEffect = {
          skill: {
            skillType: SkillType.Strength,
            static: 0,
          },
        };
        break;
      case "speed":
        newEffect = {
          speed: {
            movementType: MovementType.Walk,
            static: 0,
          },
        };
        break;
    }

    onChange([...value, newEffect]);
    setSelectedType("");
  };

  const handleRemoveEffect = (index: number) => {
    const newEffects = [...value];
    newEffects.splice(index, 1);
    onChange(newEffects);
  };

  const handleUpdateEffect = (index: number, updatedEffect: Effect) => {
    const newEffects = [...value];
    newEffects[index] = updatedEffect;
    onChange(newEffects);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Select
          value={selectedType}
          onValueChange={(value) => setSelectedType(value as EffectType)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select effect type" />
          </SelectTrigger>
          <SelectContent>
            {effectTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleAddEffect} disabled={!selectedType}>
          Add Effect
        </Button>
      </div>

      <div className="space-y-2">
        {value.map((effect, index) => {
          const effectType = Object.keys(effect)[0] as keyof Effect;
          const effectValue = effect[effectType];

          if (!effectType || !effectValue) return null;

          return (
            <div
              key={index}
              className="flex items-center gap-2 bg-muted p-2 rounded-md"
            >
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
                    value={effectValue.static || 0}
                    onChange={(e) =>
                      handleUpdateEffect(index, {
                        armour: {
                          ...effectValue,
                          static: parseInt(e.target.value) || 0,
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
                    value={effectValue.static || 0}
                    onChange={(e) =>
                      handleUpdateEffect(index, {
                        skill: {
                          ...effectValue,
                          skillType: effectValue.skillType,
                          static: parseInt(e.target.value) || 0,
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
                    value={effectValue.static || 0}
                    onChange={(e) =>
                      handleUpdateEffect(index, {
                        speed: {
                          ...effectValue,
                          movementType: effectValue.movementType,
                          static: parseInt(e.target.value) || 0,
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
                  value={effectValue.static || 0}
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
                className="ml-auto"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
