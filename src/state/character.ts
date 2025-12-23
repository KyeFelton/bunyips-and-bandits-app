import { atom } from "jotai";
import { SkillType } from "../enums/SkillType";
import { ItemDictionary } from "../models/items";
import { AllSpecies, startingSpecies } from "../data/species";
import { AllOrigins, startingOrigin } from "../data/origins";
import { AllClasses } from "../data/classes";
import { AllSkillProgressions } from "../data/skillProgressions";
import { Effect } from "../models/effect";
import * as Skills from "../models/skills";
import { Trait } from "../models/traits";
import { Action } from "../models/actions";
import { getDiceBonusForLevel, getDiceForLevel } from "../utils/dice";
import { SkillForm } from "../enums/SkillForm";
import { Locomotion } from "../enums/Locomotion";
import { SpeedRating } from "../enums/SpeedRating";
import { Condition } from "../models/conditions";

// Constants
export const MAX_SKILL_LEVEL = 10;
export const MAX_SKILL_PROGRESSION = 5;
export const CRIT_TO_LEVEL_UP = 2;

// Basic character info
export const nameAtom = atom<string>("");
export const originAtom = atom<string>(startingOrigin.name);
export const speciesAtom = atom<string>(startingSpecies.name);
export const genderAtom = atom<string>("");
export const ageAtom = atom<number>(0);
export const backgroundAtom = atom<string>("");
export const personalityAtom = atom<string>("");
export const languagesAtom = atom<string[]>(["Dharrigal", "Englorian"]);
export const imageAtom = atom<string | undefined>(undefined);

// Character progression
export const classAtom = atom<string>("");
export const criticalSuccessesAtom = atom<Partial<Record<SkillType, number>>>(
  {}
);
export const skillsProgressedSinceRestAtom = atom<Set<SkillType>>(
  new Set<SkillType>()
);
export const bodyUpgradesAtom = atom<number>(0);
export const mindUpgradesAtom = atom<number>(0);
export const staminaUpgradesAtom = atom<number>(0);

// Character stats
export const currentBodyAtom = atom<number>(startingSpecies.body);
export const currentMindAtom = atom<number>(startingSpecies.mind);
export const currentStaminaAtom = atom<number>(startingSpecies.stamina);
export const conditionsAtom = atom<Condition[]>([]);

// Items and equipment
export const itemsAtom = atom<ItemDictionary>({});
export const moneyAtom = atom<number>(0);

// Custom traits
export const customTraitsAtom = atom<Trait[]>([]);

// Get species data
export const speciesDataAtom = atom((get) => {
  const speciesName = get(speciesAtom);
  return AllSpecies[speciesName as keyof typeof AllSpecies];
});

// Get origin data
export const originDataAtom = atom((get) => {
  const originName = get(originAtom);
  if (!originName) return null;
  return AllOrigins[originName as keyof typeof AllOrigins] || null;
});

// Get class data
export const classDataAtom = atom((get) => {
  const className = get(classAtom);
  if (!className) return null;
  return AllClasses[className] || null;
});

// Skill levels
export const skillLevelsAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const classData = get(classDataAtom);
  const criticalSuccesses = get(criticalSuccessesAtom);

  const skills: Partial<Record<SkillType, number>> = {
    ...speciesData.skillLevels,
  };

  // Add class bonuses
  if (classData?.skillBonuses) {
    Object.entries(classData.skillBonuses).forEach(([skill, bonus]) => {
      skills[skill as SkillType] =
        (skills[skill as SkillType] || 0) + (bonus || 0);
    });
  }

  // Add critical success upgrades
  Object.entries(criticalSuccesses).forEach(([skill, count]) => {
    const levelUps = Math.floor((count || 0) / CRIT_TO_LEVEL_UP);
    skills[skill as SkillType] = (skills[skill as SkillType] || 0) + levelUps;
  });

  return skills;
});

// Actions atom - includes class starting actions and skill progression unlocked actions
export const actionsAtom = atom((get) => {
  const skillLevels = get(skillLevelsAtom);
  const classData = get(classDataAtom);
  const actions: Action[] = [];

  // Add class starting actions
  if (classData?.startingActions) {
    actions.push(...classData.startingActions);
  }

  // Add skill progression unlocked actions
  Object.entries(skillLevels).forEach(([skillType, level]) => {
    const progression = AllSkillProgressions[skillType as SkillType];
    if (progression && level) {
      progression.unlockables
        .filter((unlock) => unlock.level <= level)
        .forEach((unlock) => {
          if (unlock.actions) actions.push(...unlock.actions);
        });
    }
  });

  return actions;
});

// Traits atom - includes class starting traits, skill progression unlocked traits, and custom traits
export const traitsAtom = atom((get) => {
  const skillLevels = get(skillLevelsAtom);
  const classData = get(classDataAtom);
  const customTraits = get(customTraitsAtom);
  const traits: Trait[] = [];

  // Add class starting traits
  if (classData?.startingTraits) {
    traits.push(...classData.startingTraits);
  }

  // Add skill progression unlocked traits
  Object.entries(skillLevels).forEach(([skillType, level]) => {
    const progression = AllSkillProgressions[skillType as SkillType];
    if (progression && level) {
      progression.unlockables
        .filter((unlock) => unlock.level <= level)
        .forEach((unlock) => {
          if (unlock.traits) traits.push(...unlock.traits);
        });
    }
  });

  // Add custom traits
  traits.push(...customTraits);

  return traits;
});

// Effects atom
export const effectsAtom = atom((get) => {
  const origin = get(originDataAtom);
  const items = get(itemsAtom);
  const conditions = get(conditionsAtom);
  const traits = get(traitsAtom);
  const effects: Effect[] = [];

  // Collect effects from origin
  if (origin?.effects) {
    effects.push(...origin.effects);
  }

  // Collect effects from traits
  traits.forEach((trait) => {
    if (trait.effects) {
      effects.push(...trait.effects);
    }
  });

  // Collect effects from equipped items
  Object.values(items)
    .filter((item) => item.equipped && item.effects)
    .forEach((item) => {
      if (item.effects) {
        effects.push(...item.effects);
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
  const baseEvasions = 1;

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

  // Start with species senses
  const primary = [...speciesData.senses.primary];
  const secondary = [...speciesData.senses.secondary];

  // Apply effects that modify senses
  effects.forEach((effect) => {
    if (effect.sense?.gain) {
      // Add to primary if not already in primary or secondary
      if (
        !primary.includes(effect.sense.gain) &&
        !secondary.includes(effect.sense.gain)
      ) {
        primary.push(effect.sense.gain);
      }
    }
    if (effect.sense?.lose) {
      // Remove from both primary and secondary
      const primaryIndex = primary.indexOf(effect.sense.lose);
      if (primaryIndex > -1) primary.splice(primaryIndex, 1);
      const secondaryIndex = secondary.indexOf(effect.sense.lose);
      if (secondaryIndex > -1) secondary.splice(secondaryIndex, 1);
    }
  });

  return { primary, secondary };
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
