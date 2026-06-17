import { atom } from "jotai";
import { SkillType } from "../enums/SkillType";
import { ItemLocation } from "../enums/ItemLocation";
import { InventoryStack } from "../models/items";
import { resolveStack } from "../utils/items";
import { AllSkillProgressions } from "../data/skillProgressions";
import { AllBackgrounds } from "../data/backgrounds";
import { Effect } from "../models/effect";
import * as Skills from "../models/skills";
import { Trait } from "../models/traits";
import { Action } from "../models/actions";
import { getDiceForLevel } from "../utils/dice";
import { SkillForm } from "../enums/SkillForm";
import { Locomotion } from "../enums/Locomotion";
import { SpeedRating } from "../enums/SpeedRating";
import { Condition } from "../models/conditions";
import { startingKin } from "../data/kin";
import { Kin } from "../models/kin";

// Constants
export const MAX_SKILL_LEVEL = 10;
export const MAX_SKILL_PROGRESSION = 5;
export const CRIT_TO_LEVEL_UP = 1;

// Basic character info
export const nameAtom = atom<string>("");
export const kinAtom = atom<Kin>(startingKin);
export const genderAtom = atom<string>("");
export const ageAtom = atom<number>(0);
export const backgroundAtom = atom<string>("");
export const backstoryAtom = atom<string>("");
export const personalityAtom = atom<string>("");
export const languagesAtom = atom<string[]>(["Dharrigal", "Englorian"]);
export const imageAtom = atom<string | undefined>(undefined);

// Character progression
export const magicSkillsAtom = atom<string[]>(["Biotic"]);
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
export const currentBodyAtom = atom<number>(startingKin.species.body);
export const currentMindAtom = atom<number>(startingKin.species.mind);
export const currentStaminaAtom = atom<number>(startingKin.species.stamina);
export const conditionsAtom = atom<Condition[]>([]);

// Items and equipment
export const itemsAtom = atom<InventoryStack[]>([]);
export const moneyAtom = atom<number>(0);

// Inventory stacks resolved against the catalog for reading.
// Backpack capacity, slot usage and display rows live in state/items.ts.
export const characterItemsAtom = atom((get) =>
  get(itemsAtom).map(resolveStack)
);

// Custom traits
export const customTraitsAtom = atom<Trait[]>([]);

// Get background data
export const backgroundDataAtom = atom((get) => {
  const backgroundName = get(backgroundAtom);
  if (!backgroundName) return null;
  return AllBackgrounds[backgroundName as keyof typeof AllBackgrounds] || null;
});

// Skill levels
export const skillLevelsAtom = atom((get) => {
  const magicSkills = get(magicSkillsAtom);
  const backgroundData = get(backgroundDataAtom);
  const criticalSuccesses = get(criticalSuccessesAtom);

  const skills: Partial<Record<SkillType, number>> = {};

  // Initialize skills
  Object.values(Skills).forEach((skill) => {
    if (!skill.magicSkill) {
      skills[skill.type] = 1;
    }
  });

  // Add selected magic skills
  magicSkills.forEach((skillName) => {
    const skillType = skillName as SkillType;
    skills[skillType] = 1;
  });

  // Apply background expertise
  if (backgroundData?.expertiseSkills) {
    backgroundData.expertiseSkills.forEach((skillType) => {
      skills[skillType] = 5;
    });
  }

  // Add critical success upgrades
  Object.entries(criticalSuccesses).forEach(([skill, count]) => {
    const levelUps = Math.floor((count || 0) / CRIT_TO_LEVEL_UP);
    skills[skill as SkillType] = (skills[skill as SkillType] || 0) + levelUps;
  });

  // Clamp all skill levels to [0, MAX_SKILL_LEVEL]
  Object.keys(skills).forEach((skill) => {
    skills[skill as SkillType] = Math.max(
      1,
      Math.min(MAX_SKILL_LEVEL, skills[skill as SkillType] || 1)
    );
  });

  return skills;
});

// Actions atom - includes skill progression unlocked actions
export const actionsAtom = atom((get) => {
  const skillLevels = get(skillLevelsAtom);
  const actions: Action[] = [];

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

// Traits atom - includes background traits, skill progression unlocked traits, and custom traits
export const traitsAtom = atom((get) => {
  const skillLevels = get(skillLevelsAtom);
  const customTraits = get(customTraitsAtom);
  const backgroundData = get(backgroundDataAtom);
  const traits: Trait[] = [];

  // Add background traits
  if (backgroundData?.traits) {
    traits.push(...backgroundData.traits);
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
  const kin = get(kinAtom);
  const items = get(characterItemsAtom);
  const conditions = get(conditionsAtom);
  const traits = get(traitsAtom);
  const effects: Effect[] = [];

  // Collect effects from ancestry
  if (kin.ancestry.effects) {
    effects.push(...kin.ancestry.effects);
  }

  // Collect effects from traits
  traits.forEach((trait) => {
    if (trait.effects) {
      effects.push(...trait.effects);
    }
  });

  // Passive effects apply only while an item is worn or held.
  items
    .filter(
      (item) =>
        (item.location === ItemLocation.Worn ||
          item.location === ItemLocation.Held) &&
        item.effects
    )
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

// Skill modifiers atom - aggregates all modifier sources
export const skillModifiersAtom = atom((get) => {
  const kin = get(kinAtom);
  const effects = get(effectsAtom);
  const modifiers: Partial<Record<SkillType, number>> = {
    ...kin.species.skillModifiers,
  };

  // Add effect modifiers (traits, items, conditions)
  effects.forEach((effect) => {
    if (effect.skill?.skillType) {
      const type = effect.skill.skillType;
      modifiers[type] = (modifiers[type] || 0) + (effect.skill.bonus || 0);
    }
  });

  return modifiers;
});

// Body
export const bodyAtom = atom((get) => {
  const kin = get(kinAtom);
  const bodyUpgrades = get(bodyUpgradesAtom);
  const effects = get(effectsAtom);
  const baseMaxBody = kin.species.body + bodyUpgrades;

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
  const kin = get(kinAtom);
  const mindUpgrades = get(mindUpgradesAtom);
  const effects = get(effectsAtom);
  const baseMaxMind = kin.species.mind + mindUpgrades;
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
  const kin = get(kinAtom);
  const staminaUpgrades = get(staminaUpgradesAtom);
  const effects = get(effectsAtom);
  const baseMaxStamina = kin.species.stamina + staminaUpgrades;
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
  const kin = get(kinAtom);
  const effects = get(effectsAtom);
  const body = get(bodyAtom);
  const baseSpeed: Record<Locomotion, SpeedRating> = {
    ...kin.species.speed,
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
  const kin = get(kinAtom);
  const effects = get(effectsAtom);

  // Start with species senses
  const keen = [...kin.species.senses.keen];
  const poor = [...kin.species.senses.poor];

  // Apply effects that modify senses
  effects.forEach((effect) => {
    if (effect.sense?.gain) {
      // Add to keen if not already in keen or poor
      if (
        !keen.includes(effect.sense.gain) &&
        !poor.includes(effect.sense.gain)
      ) {
        keen.push(effect.sense.gain);
      }
    }
    if (effect.sense?.lose) {
      // Remove from both keen and poor
      const keenIndex = keen.indexOf(effect.sense.lose);
      if (keenIndex > -1) keen.splice(keenIndex, 1);
      const poorIndex = poor.indexOf(effect.sense.lose);
      if (poorIndex > -1) poor.splice(poorIndex, 1);
    }
  });

  return { keen, poor };
});

// Skill roll values
type RollValues = {
  dice: number;
  modifier: number;
  hasAdvantage: boolean;
  hasDisadvantage: boolean;
};

export const skillRollValuesAtom = atom((get) => {
  const skillLevels = get(skillLevelsAtom);
  const skillModifiers = get(skillModifiersAtom);
  const body = get(bodyAtom);
  const mind = get(mindAtom);
  const rollValues: Record<SkillType, RollValues> = {} as Record<
    SkillType,
    RollValues
  >;

  Object.values(Skills).forEach((skill) => {
    const level = skillLevels[skill.type] || 0;
    const weakHealth =
      (skill.form === SkillForm.Physical && body.current <= 1) ||
      (skill.form === SkillForm.Mental && mind.current <= 1);
    rollValues[skill.type] = {
      dice: weakHealth ? 0 : getDiceForLevel(level),
      modifier: skillModifiers[skill.type] || 0,
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
  const kin = get(kinAtom);
  const effects = get(effectsAtom);
  const armour = { ...kin.species.armour };

  effects.forEach((effect) => {
    if (effect.armour?.damageType) {
      const type = effect.armour.damageType;
      armour[type] = (armour[type] || 0) + (effect.armour.bonus || 0);
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
