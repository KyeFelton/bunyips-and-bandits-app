import { atom } from "jotai";
import { SkillType } from "../enums/SkillType";
import { ItemDictionary } from "../models/items";
import { SelectedPath } from "../models/paths";
import { AllSpecies, startingSpecies } from "../data/species";
import { SaveFile } from "../models/saveFile";
import { Effect } from "../models/effect";
import * as Skills from "../models/skills";
import { Trait } from "../models/traits";
import { getSpeciesImage } from "../utils/speciesImages";
import { getDiceBonusForLevel, getDiceForLevel } from "../utils/dice";
import { SkillForm } from "../enums/SkillForm";
import { Locomotion } from "../enums/Locomotion";

// Constants
export const MAX_LEVEL = 10;
export const MAX_PATH_LEVEL = 10;
export const MAX_SKILL_LEVEL = 10;

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
export const physiqueUpgradesAtom = atom<number>(0);
export const moraleUpgradesAtom = atom<number>(0);
export const staminaUpgradesAtom = atom<number>(0);
export const skillLevelUpgradesAtom = atom<Partial<Record<SkillType, number>>>(
  {}
);

// Character stats
export const currentPhysiqueAtom = atom<number>(startingSpecies.physique);
export const currentMoraleAtom = atom<number>(startingSpecies.morale);
export const currentStaminaAtom = atom<number>(startingSpecies.stamina);

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

export const availableHealthUpgradesAtom = atom((get) => {
  const level = get(levelAtom);
  return Math.floor(level / 2) * 2;
});

// Physique
export const physiqueAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const physiqueUpgrades = get(physiqueUpgradesAtom);
  const effects = get(effectsAtom);
  const baseMaxPhysique = speciesData.physique + physiqueUpgrades;

  const maxPhysique = effects.reduce((total, effect) => {
    if (effect.physique?.bonus) {
      return total + effect.physique.bonus;
    }
    return total;
  }, baseMaxPhysique);

  return {
    max: maxPhysique,
    current: get(currentPhysiqueAtom),
  };
});

// Morale
export const moraleAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const moraleUpgrades = get(moraleUpgradesAtom);
  const effects = get(effectsAtom);
  const baseMaxMorale = speciesData.morale + moraleUpgrades;
  const maxMorale = effects.reduce((total, effect) => {
    if (effect.morale?.bonus) {
      return total + effect.morale.bonus;
    }
    if (effect.morale?.multiplier) {
      return total * effect.morale.multiplier;
    }
    return total;
  }, baseMaxMorale);

  return {
    max: maxMorale,
    current: get(currentMoraleAtom),
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

// Actions
export const actionsCountAtom = atom((get) => {
  const effects = get(effectsAtom);
  const baseActions = 2;

  return effects.reduce((total, effect) => {
    if (effect.actions?.bonus) {
      return total + effect.actions.bonus;
    }
    return total;
  }, baseActions);
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

// Speed
export const speedAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const effects = get(effectsAtom);
  const physique = get(physiqueAtom);
  const baseSpeed: Record<Locomotion, number> = {
    ...speciesData.speed,
  };

  effects.forEach((effect) => {
    if (effect.speed?.locomotion) {
      const type = effect.speed.locomotion;
      baseSpeed[type] += effect.speed.bonus || 0;
      baseSpeed[type] = Math.ceil(
        baseSpeed[type] * (effect.speed.multiplier || 1)
      );
    }
  });

  Object.keys(baseSpeed).forEach((locomotion) => {
    if (physique.current / physique.max <= 0.5 && physique.current > 1) {
      baseSpeed[locomotion as Locomotion] = Math.ceil(
        baseSpeed[locomotion as Locomotion] / 2
      );
    } else if (physique.current <= 1) {
      baseSpeed[locomotion as Locomotion] = 0;
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
  const physique = get(physiqueAtom);
  const morale = get(moraleAtom);
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
      (skill.form === SkillForm.Physical && physique.current <= 1) ||
      (skill.form === SkillForm.Mental && morale.current <= 1);
    rollValues[skill.type] = {
      dice: weakHealth ? 0 : getDiceForLevel(level),
      modifier: (modifiers[skill.type] || 0) + getDiceBonusForLevel(level),
      hasAdvantage: false,
      hasDisadvantage:
        skill.form === SkillForm.Physical
          ? physique.current / physique.max <= 0.5
          : morale.current / morale.max <= 0.5,
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
  currentPhysique: get(currentPhysiqueAtom),
  currentMorale: get(currentMoraleAtom),
  currentStamina: get(currentStaminaAtom),
  items: get(itemsAtom),
  money: get(moneyAtom),
  image: get(imageAtom),
}));
