import { atom } from "jotai";
import { SkillType } from "../enums/SkillType";
import { ItemDictionary } from "../models/items";
import { PathProgression } from "../models/paths";
import { AllSpecies } from "../data/species";
import { AllAncestries } from "../data/ancestries";
import { Effect } from "../models/effect";
import * as Skills from "../models/skills";
import { Trait } from "../models/traits";
import { getDiceBonusForLevel, getDiceForLevel } from "../utils/dice";
import { SkillForm } from "../enums/SkillForm";
import { Locomotion } from "../enums/Locomotion";
import { SpeedRating } from "../enums/SpeedRating";
import { Condition } from "../models/conditions";

// Constants
export const MAX_LEVEL = 10;
export const MAX_PATH_LEVEL = 10;
export const MAX_SKILL_LEVEL = 10;

// Basic character info
export const nameAtom = atom<string>("");
export const ancestryAtom = atom<string>("");
export const speciesAtom = atom<string>("");
export const genderAtom = atom<string>("");
export const ageAtom = atom<number>(0);
export const backgroundAtom = atom<string>("");
export const personalityAtom = atom<string>("");
export const languagesAtom = atom<string[]>([]);
export const imageAtom = atom<string | undefined>();

// Character progression
export const levelAtom = atom<number>(1);
export const pathsAtom = atom<PathProgression[]>([]);
export const bodyUpgradesAtom = atom<number>(0);
export const mindUpgradesAtom = atom<number>(0);
export const staminaUpgradesAtom = atom<number>(0);
export const skillLevelUpgradesAtom = atom<Partial<Record<SkillType, number>>>(
  {}
);

// Character stats
export const currentBodyAtom = atom<number>(0);
export const currentMindAtom = atom<number>(0);
export const currentStaminaAtom = atom<number>(0);
export const conditionsAtom = atom<Condition[]>([]);

// Items and equipment
export const itemsAtom = atom<ItemDictionary>({});
export const moneyAtom = atom<number>(0);

// Custom traits
export const customTraitsAtom = atom<Trait[]>([]);

// Effects atom
export const effectsAtom = atom((get) => {
  const ancestry = get(ancestryDataAtom);
  const paths = get(pathsAtom);
  const items = get(itemsAtom);
  const customTraits = get(customTraitsAtom);
  const conditions = get(conditionsAtom);
  const effects: Effect[] = [];

  // Collect effects from ancestry
  if (ancestry?.effects) {
    effects.push(...ancestry.effects);
  }

  // Collect effects from paths
  paths.forEach((path) => {
    path.unlockables
      .filter((unlock) => unlock.level <= path.level)
      .forEach((unlock) => {
        unlock.traits.forEach((trait) => {
          if (trait.effects) {
            effects.push(...trait.effects);
          }
        });
      });
  });

  // Collect effects from equipped items
  Object.values(items)
    .filter((item) => item.equipped && item.effects)
    .forEach((item) => {
      if (item.effects) {
        effects.push(...item.effects);
      }
    });

  // Collect effects from custom traits
  customTraits.forEach((trait) => {
    if (trait.effects) {
      effects.push(...trait.effects);
    }
  });

  // Collect effects from conditions
  conditions.forEach((condition) => {
    if (condition.effects) {
      effects.push(...condition.effects);
    }
  });

  return effects;
});

// Get species data
export const speciesDataAtom = atom((get) => {
  const speciesName = get(speciesAtom);
  return AllSpecies[speciesName as keyof typeof AllSpecies];
});

// Get ancestry data
export const ancestryDataAtom = atom((get) => {
  const ancestryName = get(ancestryAtom);
  if (!ancestryName) return null;
  return AllAncestries[ancestryName as keyof typeof AllAncestries] || null;
});

export const availableHealthUpgradesAtom = atom((get) => {
  const level = get(levelAtom);
  return Math.floor(level / 2) * 2;
});

// Body
export const bodyAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const bodyUpgrades = get(bodyUpgradesAtom);
  const effects = get(effectsAtom);
  const baseMaxBody = speciesData.body + bodyUpgrades;

  const maxBody = effects.reduce((total, effect) => {
    if (effect.body?.bonus) {
      return total + effect.body.bonus;
    }
    return total;
  }, baseMaxBody);

  return {
    max: maxBody,
    current: get(currentBodyAtom),
  };
});

// Mind
export const mindAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const mindUpgrades = get(mindUpgradesAtom);
  const effects = get(effectsAtom);
  const baseMaxMind = speciesData.mind + mindUpgrades;
  const maxMind = effects.reduce((total, effect) => {
    if (effect.mind?.bonus) {
      return total + effect.mind.bonus;
    }
    if (effect.mind?.multiplier) {
      return total * effect.mind.multiplier;
    }
    return total;
  }, baseMaxMind);

  return {
    max: maxMind,
    current: get(currentMindAtom),
  };
});

// Stamina
export const staminaAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const staminaUpgrades = get(staminaUpgradesAtom);
  const effects = get(effectsAtom);
  const baseMaxStamina = speciesData.stamina + staminaUpgrades;
  const maxStamina = effects.reduce((total, effect) => {
    if (effect.stamina?.bonus) {
      return total + effect.stamina.bonus;
    }
    return total;
  }, baseMaxStamina);

  return {
    max: maxStamina,
    current: get(currentStaminaAtom),
  };
});

// Evasions
export const evasionsCountAtom = atom((get) => {
  const effects = get(effectsAtom);
  const baseEvasions = 2;

  return effects.reduce((total, effect) => {
    if (effect.evasions?.bonus) {
      return total + effect.evasions.bonus;
    }
    return total;
  }, baseEvasions);
});

// Actions
export const actionsCountAtom = atom((get) => {
  const effects = get(effectsAtom);
  const evasions = get(evasionsCountAtom);
  const baseActions = 2;

  return (
    effects.reduce((total, effect) => {
      if (effect.actions?.bonus) {
        return total + effect.actions.bonus;
      }
      return total;
    }, baseActions) + Math.min(evasions, 0)
  );
});

// Speed
export const speedAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const effects = get(effectsAtom);
  const body = get(bodyAtom);
  const baseSpeed: Record<Locomotion, SpeedRating> = {
    ...speciesData.speed,
  };

  // Helper function to convert rating to numeric value for calculations
  const ratingToNumber = (rating: SpeedRating): number => {
    switch (rating) {
      case SpeedRating.None:
        return -1;
      case SpeedRating.Slow:
        return 0;
      case SpeedRating.Moderate:
        return 1;
      case SpeedRating.Fast:
        return 2;
      case SpeedRating.Extreme:
        return 3;
    }
  };

  // Helper function to convert numeric value back to rating
  const numberToRating = (value: number): SpeedRating => {
    if (value < 0) return SpeedRating.None;
    if (value === 0) return SpeedRating.Slow;
    if (value === 1) return SpeedRating.Moderate;
    if (value === 2) return SpeedRating.Fast;
    return SpeedRating.Extreme;
  };

  // Apply effects (rating changes)
  effects.forEach((effect) => {
    if (effect.speed?.locomotion && effect.speed.increase !== undefined) {
      const type = effect.speed.locomotion;
      const currentValue = ratingToNumber(baseSpeed[type]);
      const change = effect.speed.increase ? 1 : -1;
      const newValue = Math.max(-1, Math.min(3, currentValue + change));
      baseSpeed[type] = numberToRating(newValue);
    }
  });

  // Apply body penalties
  Object.keys(baseSpeed).forEach((locomotion) => {
    const currentRating = baseSpeed[locomotion as Locomotion];
    // Don't apply penalties to None ratings
    if (currentRating === SpeedRating.None) {
      return;
    }

    const currentValue = ratingToNumber(currentRating);
    if (body.current / body.max <= 0.5) {
      // Reduce speed rating by 1 level
      baseSpeed[locomotion as Locomotion] = numberToRating(
        Math.max(0, currentValue - 1)
      );
    }
  });

  return baseSpeed;
});

// Senses
export const sensesAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const effects = get(effectsAtom);
  const senses = { ...speciesData.senses };

  effects.forEach((effect) => {
    if (effect.sense?.gain) {
      senses[effect.sense?.gain] = true;
    }
    if (effect.sense?.lose) {
      senses[effect.sense?.lose] = false;
    }
  });

  return senses;
});

// Path upgrades
export const availablePathPointsAtom = atom((get) => get(levelAtom));

// Skill upgrades
export const availableSkillPointsAtom = atom((get) => {
  const level = get(levelAtom);
  return Math.floor((level + 1) / 2) * 2;
});

// Skill levels
export const skillLevelsAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const skillLevelUpgrades = get(skillLevelUpgradesAtom);
  const paths = get(pathsAtom);

  const skills: Partial<Record<SkillType, number>> = {
    ...speciesData.skillLevels,
  };

  // Add skill level ups
  Object.entries(skillLevelUpgrades).forEach(([skill, level]) => {
    skills[skill as SkillType] =
      (skills[skill as SkillType] || 0) + (level || 0);
  });

  // Add path skill levels
  paths.forEach((path) => {
    path.skillTypes.forEach((skillType) => {
      skills[skillType] = (skills[skillType] || 0) + path.level;
    });
  });

  return skills;
});

// Skill roll values
type RollValues = {
  dice: number;
  modifier: number;
  hasAdvantage: boolean;
  hasDisadvantage: boolean;
};

export const skillRollValuesAtom = atom((get) => {
  const effects = get(effectsAtom);
  const skillLevels = get(skillLevelsAtom);
  const body = get(bodyAtom);
  const mind = get(mindAtom);
  const modifiers: Record<SkillType, number> = {} as Record<SkillType, number>;
  const rollValues: Record<SkillType, RollValues> = {} as Record<
    SkillType,
    RollValues
  >;

  effects.forEach((effect) => {
    if (effect.skill?.skillType) {
      const type = effect.skill.skillType;
      modifiers[type] = (modifiers[type] || 0) + (effect.skill.bonus || 0);
    }
  });

  Object.values(Skills).forEach((skill) => {
    const level = skillLevels[skill.type] || 0;
    const weakHealth =
      (skill.form === SkillForm.Physical && body.current <= 1) ||
      (skill.form === SkillForm.Mental && mind.current <= 1);
    rollValues[skill.type] = {
      dice: weakHealth ? 0 : getDiceForLevel(level),
      modifier: (modifiers[skill.type] || 0) + getDiceBonusForLevel(level),
      hasAdvantage: false,
      hasDisadvantage:
        skill.form === SkillForm.Physical
          ? body.current / body.max <= 0.5
          : mind.current / mind.max <= 0.5,
    };
  });

  return rollValues;
});

// Armour
export const armourAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const effects = get(effectsAtom);
  const armour = { ...speciesData.armour };

  effects.forEach((effect) => {
    if (effect.armour?.damageType) {
      const type = effect.armour.damageType;
      armour[type] += effect.armour.bonus || 0;
    }
  });

  return armour;
});

// Weapon damage
export const weaponAtom = atom((get) => {
  const effects = get(effectsAtom);

  const damage = effects.reduce((damage, effect) => {
    if (effect.weapon?.bonus) {
      return damage + effect.weapon.bonus;
    }
    return damage;
  }, 0);

  const damageType = effects.find((effect) => effect.weapon?.damageType)?.weapon
    ?.damageType;

  return {
    damage,
    damageType,
  };
});

// Luck
export const luckAtom = atom<number>(0);
