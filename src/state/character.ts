import { atom } from "jotai";
import { SkillType } from "../enums/SkillType";
import { ItemDictionary } from "../models/items";
import { SelectedPath } from "../models/paths";
import { AllSpecies, startingSpecies } from "../models/species";
import { SaveFile } from "../models/saveFile";
import { Effect } from "../models/effect";
import { Trait } from "../models/traits";
import { getSpeciesImage } from "../utils/speciesImages";

// Basic character info
export const nameAtom = atom<string>("");
export const speciesAtom = atom<string>(startingSpecies.name);
export const genderAtom = atom<string>("");
export const ageAtom = atom<number>(0);
export const backgroundAtom = atom<string>("");
export const personalityAtom = atom<string>("");
export const languagesAtom = atom<string[]>([]);
export const imageAtom = atom<string>(getSpeciesImage(startingSpecies.name));

// Character progression
export const levelAtom = atom<number>(1);
export const pathsAtom = atom<SelectedPath[]>([]);
export const skillLevelUpgradesAtom = atom<Partial<Record<SkillType, number>>>(
  {}
);

// Character stats
export const currentHealthAtom = atom<number>(
  startingSpecies.health.initial + startingSpecies.health.increments
);
export const currentSanityAtom = atom<number>(
  startingSpecies.sanity.initial + startingSpecies.sanity.increments
);
export const currentStaminaAtom = atom<number>(
  startingSpecies.stamina.initial + startingSpecies.stamina.increments
);

// Items and equipment
export const itemsAtom = atom<ItemDictionary>({});
export const moneyAtom = atom<number>(0);

// Custom traits
export const customTraitsAtom = atom<Trait[]>([]);

// Effects atom
export const effectsAtom = atom((get) => {
  const paths = get(pathsAtom);
  const items = get(itemsAtom);
  const customTraits = get(customTraitsAtom);
  const effects: Effect[] = [];

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

  return effects;
});

// Get species data
export const speciesDataAtom = atom((get) => {
  const speciesName = get(speciesAtom);
  return AllSpecies[speciesName as keyof typeof AllSpecies];
});

// Health
export const healthAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const level = get(levelAtom);
  const effects = get(effectsAtom);
  const baseMaxHealth =
    speciesData.health.initial + level * speciesData.health.increments;
  const maxHealth = effects.reduce((total, effect) => {
    if (effect.health?.static) {
      return total + effect.health.static;
    }
    return total;
  }, baseMaxHealth);

  return {
    max: maxHealth,
    current: get(currentHealthAtom),
    increments: speciesData.health.increments,
  };
});

// Sanity
export const sanityAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const level = get(levelAtom);
  const effects = get(effectsAtom);
  const baseMaxSanity =
    speciesData.sanity.initial + level * speciesData.sanity.increments;
  const maxSanity = effects.reduce((total, effect) => {
    if (effect.sanity?.static) {
      return total + effect.sanity.static;
    }
    return total;
  }, baseMaxSanity);

  return {
    max: maxSanity,
    current: get(currentSanityAtom),
    increments: speciesData.sanity.increments,
  };
});

// Stamina
export const staminaAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const level = get(levelAtom);
  const effects = get(effectsAtom);
  const baseMaxStamina =
    speciesData.stamina.initial + level * speciesData.stamina.increments;
  const maxStamina = effects.reduce((total, effect) => {
    if (effect.stamina?.static) {
      return total + effect.stamina.static;
    }
    return total;
  }, baseMaxStamina);

  return {
    max: maxStamina,
    current: get(currentStaminaAtom),
    increments: speciesData.stamina.increments,
  };
});

// Actions
export const actionsCountAtom = atom((get) => {
  const effects = get(effectsAtom);
  const baseActions = 2;

  return effects.reduce((total, effect) => {
    if (effect.actions?.static) {
      return total + effect.actions.static;
    }
    return total;
  }, baseActions);
});

// Evasions
export const evasionsCountAtom = atom((get) => {
  const effects = get(effectsAtom);
  const baseEvasions = 2;

  return effects.reduce((total, effect) => {
    if (effect.evasions?.static) {
      return total + effect.evasions.static;
    }
    return total;
  }, baseEvasions);
});

// Movement
export const speedAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const effects = get(effectsAtom);
  const baseSpeed = { ...speciesData.speed };

  effects.forEach((effect) => {
    if (effect.speed?.movementType) {
      const type = effect.speed.movementType;
      baseSpeed[type] += effect.speed.static || 0;
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
    if (effect.sense) {
      senses[effect.sense] = true;
    }
  });

  return senses;
});

// Path upgrades
export const availablePathPointsAtom = atom((get) => {
  const level = get(levelAtom);
  return level === 1 ? 1 : Math.floor(level / 4) + 2;
});

// Skill upgrades
export const availableSkillPointsAtom = atom((get) => {
  const level = get(levelAtom);
  return Math.ceil(level / 2) + 1;
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

// Skill modifiers
export const skillModifiersAtom = atom((get) => {
  const effects = get(effectsAtom);
  const modifiers: Record<SkillType, number> = {} as Record<SkillType, number>;

  effects.forEach((effect) => {
    if (effect.skill?.skillType) {
      const type = effect.skill.skillType;
      modifiers[type] = (modifiers[type] || 0) + (effect.skill.static || 0);
    }
  });

  return modifiers;
});

// Armour
export const armourAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const effects = get(effectsAtom);
  const armour = { ...speciesData.armour };

  effects.forEach((effect) => {
    if (effect.armour?.damageType) {
      const type = effect.armour.damageType;
      armour[type] += effect.armour.static || 0;
    }
  });

  return armour;
});

// Weapon damage
export const weaponDamageAtom = atom((get) => {
  const effects = get(effectsAtom);

  return effects.reduce((damage, effect) => {
    if (effect.weaponDamage?.static) {
      return damage + effect.weaponDamage.static;
    }
    return damage;
  }, 0);
});

// Luck
export const luckAtom = atom<number>(0);

// Save file
export const saveFileAtom = atom<SaveFile>((get) => ({
  name: get(nameAtom),
  species: get(speciesAtom),
  gender: get(genderAtom),
  age: get(ageAtom),
  languages: get(languagesAtom),
  background: get(backgroundAtom),
  personality: get(personalityAtom),
  level: get(levelAtom),
  paths: get(pathsAtom),
  customTraits: get(customTraitsAtom),
  skillLevelUpgrades: get(skillLevelUpgradesAtom),
  currentHealth: get(currentHealthAtom),
  currentSanity: get(currentSanityAtom),
  currentStamina: get(currentStaminaAtom),
  items: get(itemsAtom),
  money: get(moneyAtom),
  image: get(imageAtom),
}));
