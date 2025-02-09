import { atom } from 'jotai';
import { SkillType } from '../enums/SkillType';
import { CharacterItem } from '../models/items';
import { SelectedPath } from '../models/paths';
import { AllSpecies } from '../models/species';
import { SaveFile } from '../models/saveFile';

const startingSpecies = AllSpecies.Minotaur;

// --- Primitives --- //

// Basic character info
export const nameAtom = atom<string>('');
export const speciesAtom = atom<string>(startingSpecies.name);
export const genderAtom = atom<string>('');
export const ageAtom = atom<number>(0);
export const personalityAtom = atom<string>('');
export const languagesAtom = atom<string[]>([]);
export const imageAtom = atom<string | undefined>(undefined);

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
export const itemsAtom = atom<CharacterItem[]>([]);
export const moneyAtom = atom<number>(0);

// --- Derivatives --- //

// Get species data
export const speciesDataAtom = atom((get) => {
  const speciesName = get(speciesAtom);
  return AllSpecies[speciesName as keyof typeof AllSpecies];
});

// Health
export const healthAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const level = get(levelAtom);
  return {
    max: speciesData.health.initial + level * speciesData.health.increments,
    current: get(currentHealthAtom),
    increments: speciesData.health.increments,
  };
});

// Sanity
export const sanityAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const level = get(levelAtom);
  return {
    max: speciesData.sanity.initial + level * speciesData.sanity.increments,
    current: get(currentSanityAtom),
    increments: speciesData.sanity.increments,
  };
});

// Stamina
export const staminaAtom = atom((get) => {
  const speciesData = get(speciesDataAtom);
  const level = get(levelAtom);
  return {
    max: speciesData.stamina.initial + level * speciesData.stamina.increments,
    current: get(currentStaminaAtom),
    increments: speciesData.stamina.increments,
  };
});

// Actions
export const actionsCountAtom = atom<number>(2);

// Evasions
export const evasionsCountAtom = atom<number>(2);

// Movement
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

// Senses
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

// Armour
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

// Weapon damage
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

// Luck
export const luckAtom = atom<number>(0);

// Save file
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
