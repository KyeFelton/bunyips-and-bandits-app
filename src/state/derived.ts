import { atom } from "jotai";
import {
  speciesAtom,
  levelAtom,
  pathsAtom,
  skillLevelUpgradesAtom,
  itemsAtom,
  currentHealthAtom,
  currentSanityAtom,
  currentStaminaAtom,
  nameAtom,
  genderAtom,
  ageAtom,
  languagesAtom,
  personalityAtom,
  imageAtom,
  moneyAtom,
} from "./primitives";
import { Minotaur, Jeli, Pixie } from "../models/species";
import { SkillType } from "../enums/SkillType";
import { SaveFile } from "../models/saveFile";

const species = { Minotaur, Jeli, Pixie };

export const luckAtom = atom<number>(0);

// Get species data
export const speciesDataAtom = atom((get) => {
  const speciesName = get(speciesAtom);
  return species[speciesName as keyof typeof species];
});

// Health, Sanity, Stamina
export const healthAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const level = get(levelAtom);
  return {
    max:
      speciesData.health.initial + (level - 1) * speciesData.health.increments,
    current: get(currentHealthAtom),
    increments: speciesData.health.increments,
  };
});

export const sanityAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const level = get(levelAtom);
  return {
    max:
      speciesData.sanity.initial + (level - 1) * speciesData.sanity.increments,
    current: get(currentSanityAtom),
    increments: speciesData.sanity.increments,
  };
});

export const staminaAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const level = get(levelAtom);
  return {
    max:
      speciesData.stamina.initial +
      (level - 1) * speciesData.stamina.increments,
    current: get(currentStaminaAtom),
    increments: speciesData.stamina.increments,
  };
});

// Movement and Senses
export const speedAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const paths = get(pathsAtom);
  const items = get(itemsAtom);

  const baseSpeed = { ...speciesData.speed };

  // Apply modifiers from traits and items
  paths.forEach((path) => {
    path.unlockables
      .filter((unlock) => unlock.level <= path.level)
      .forEach((unlock) => {
        unlock.traits.forEach((trait) => {
          trait.effects?.forEach((effect) => {
            if (effect.speed?.movementType) {
              const type = effect.speed.movementType;
              baseSpeed[type] += effect.speed.static || 0;
            }
          });
        });
      });
  });

  items
    .filter((item) => item.equipped && item.effects)
    .forEach((item) => {
      item.effects?.forEach((effect) => {
        if (effect.speed?.movementType) {
          const type = effect.speed.movementType;
          baseSpeed[type] += effect.speed.static || 0;
        }
      });
    });

  return baseSpeed;
});

export const sensesAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const paths = get(pathsAtom);
  const items = get(itemsAtom);

  const senses = speciesData.senses;

  // Add senses from traits and items
  paths.forEach((path) => {
    path.unlockables
      .filter((unlock) => unlock.level <= path.level)
      .forEach((unlock) => {
        unlock.traits.forEach((trait) => {
          trait.effects?.forEach((effect) => {
            if (effect.sense) {
              senses[effect.sense] = true;
            }
          });
        });
      });
  });

  items
    .filter((item) => item.equipped && item.effects)
    .forEach((item) => {
      item.effects?.forEach((effect) => {
        if (effect.sense) {
          senses[effect.sense] = true;
        }
      });
    });

  return senses;
});

// Skills and Combat
export const availablePathPointsAtom = atom((get) => {
  const level = get(levelAtom);
  return Math.floor(level / 2) + 2;
});

export const availableSkillPointsAtom = atom((get) => {
  const level = get(levelAtom);
  return Math.floor(level / 5) * 2;
});

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

export const skillModifiersAtom = atom((get) => {
  const paths = get(pathsAtom);
  const items = get(itemsAtom);

  const modifiers: Record<SkillType, number> = {} as Record<SkillType, number>;

  // Add modifiers from traits
  paths.forEach((path) => {
    path.unlockables
      .filter((unlock) => unlock.level <= path.level)
      .forEach((unlock) => {
        unlock.traits.forEach((trait) => {
          trait.effects?.forEach((effect) => {
            if (effect.skill?.skillType) {
              const type = effect.skill.skillType;
              modifiers[type] =
                (modifiers[type] || 0) + (effect.skill.static || 0);
            }
          });
        });
      });
  });

  // Add modifiers from items
  items
    .filter((item) => item.equipped && item.effects)
    .forEach((item) => {
      item.effects?.forEach((effect) => {
        if (effect.skill?.skillType) {
          const type = effect.skill.skillType;
          modifiers[type] = (modifiers[type] || 0) + (effect.skill.static || 0);
        }
      });
    });

  return modifiers;
});

export const armourAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const paths = get(pathsAtom);
  const items = get(itemsAtom);

  const armour = { ...speciesData.armour };

  // Add armour from traits
  paths.forEach((path) => {
    path.unlockables
      .filter((unlock) => unlock.level <= path.level)
      .forEach((unlock) => {
        unlock.traits.forEach((trait) => {
          trait.effects?.forEach((effect) => {
            if (effect.armour?.damageType) {
              const type = effect.armour.damageType;
              armour[type] += effect.armour.static || 0;
            }
          });
        });
      });
  });

  // Add armour from items
  items
    .filter((item) => item.equipped && item.effects)
    .forEach((item) => {
      item.effects?.forEach((effect) => {
        if (effect.armour?.damageType) {
          const type = effect.armour.damageType;
          armour[type] += effect.armour.static || 0;
        }
      });
    });

  return armour;
});

export const weaponDamageAtom = atom((get) => {
  const paths = get(pathsAtom);
  const items = get(itemsAtom);
  let damage = 0;

  // Add damage from traits
  paths.forEach((path) => {
    path.unlockables
      .filter((unlock) => unlock.level <= path.level)
      .forEach((unlock) => {
        unlock.traits.forEach((trait) => {
          trait.effects?.forEach((effect) => {
            if (effect.weaponDamage?.static) {
              damage += effect.weaponDamage.static;
            }
          });
        });
      });
  });

  // Add damage from items
  items
    .filter((item) => item.equipped && item.effects)
    .forEach((item) => {
      item.effects?.forEach((effect) => {
        if (effect.weaponDamage?.static) {
          damage += effect.weaponDamage.static;
        }
      });
    });

  return damage;
});

export const saveFileAtom = atom<SaveFile>((get) => ({
  name: get(nameAtom),
  species: get(speciesAtom),
  gender: get(genderAtom),
  age: get(ageAtom),
  languages: get(languagesAtom),
  personality: get(personalityAtom),
  level: get(levelAtom),
  paths: get(pathsAtom),
  skillLevelUpgrades: get(skillLevelUpgradesAtom),
  currentHealth: get(currentHealthAtom),
  currentSanity: get(currentSanityAtom),
  currentStamina: get(currentStaminaAtom),
  items: get(itemsAtom),
  money: get(moneyAtom),
  image: get(imageAtom),
}));
