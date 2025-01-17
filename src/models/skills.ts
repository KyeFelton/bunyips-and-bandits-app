import { SkillType } from "src/enums/SkillType";

export type Skill = {
  type: SkillType;
  description: string;
};

export const Strength: Skill = {
  type: SkillType.Strength,
  description:
    "Used for physical maneuvers requiring strength, such as breaking down a door, carrying a heavy load or playing a game of tug of war.",
};

export const Agility: Skill = {
  type: SkillType.Agility,
  description:
    "Used for physical maneuvers requiring balance and quick reflexes, such as dodging an attack, running through a busy street, or recovering from a fall.",
};

export const Dexterity: Skill = {
  type: SkillType.Dexterity,
  description:
    "Used for tasks requiring fine motor control and hand-eye coordination, such as pick pocketing, disabling a trap, or playing an instrument.",
};

export const Martial: Skill = {
  type: SkillType.Martial,
  description:
    "Used for both armed and unarmed melee attacks in combat situations.",
};

export const Throw: Skill = {
  type: SkillType.Throw,
  description: "Used for hurling objects with precision and distance.",
};

export const Intelligence: Skill = {
  type: SkillType.Intelligence,
  description:
    "Used for tasks requiring mental acuity, such as investigating a scene, researching in a library, or recalling historical events.",
};

export const Nature: Skill = {
  type: SkillType.Nature,
  description:
    "Used for wilderness and creature-related tasks, such as taming a beast, tracking, or navigating a forest.",
};

export const Willpower: Skill = {
  type: SkillType.Willpower,
  description:
    "Used for mental fortitude, such as resisting psychic attacks or countering attempts of intimidation.",
};

export const Charisma: Skill = {
  type: SkillType.Charisma,
  description:
    "Used for social interactions requiring influence, such as charming, persuading or deceiving others.",
};

export const Psychology: Skill = {
  type: SkillType.Psychology,
  description:
    "Used for assessing the behaviours and mannerisms of others to determine their true thoughts and emotions.",
};

export const Stealth: Skill = {
  type: SkillType.Stealth,
  description:
    "Used for avoiding detection, such as surprise ambushing or sneaking past another creature.",
};

export const Sight: Skill = {
  type: SkillType.Sight,
  description:
    "Used for visual perception tasks, such as spotting hidden objects or seeing in the dark.",
};

export const Hearing: Skill = {
  type: SkillType.Hearing,
  description:
    "Used for auditory perception tasks, such as hearing faint noise or identifying specific sounds in a noisy environment.",
};

export const Smell: Skill = {
  type: SkillType.Smell,
  description:
    "Used for olfactory perception tasks, such as detecting and tracking scents.",
};

export const Pyro: Skill = {
  type: SkillType.Pyro,
  description: "Used for fire sorcery, such as igniting a creature on fire.",
};

export const Electric: Skill = {
  type: SkillType.Electric,
  description: "Used for electric sorcery, such as casting a lightning bolt.",
};

export const Kinetic: Skill = {
  type: SkillType.Electric,
  description: "Used for kinetic sorcery, such as telekinesis.",
};

export const Radiant: Skill = {
  type: SkillType.Radiant,
  description: "Used for light sorcery, such as illuminating a room.",
};

export const Sonic: Skill = {
  type: SkillType.Sonic,
  description:
    "Used for sound sorcery, such as producing a terrifying shriek in the distance.",
};

export const Pyschic: Skill = {
  type: SkillType.Psychic,
  description: "Used for psionics, such as mind reading.",
};

export const Toxic: Skill = {
  type: SkillType.Toxic,
  description: "Used for producing poisons, venom and acids.",
};

export const Healing: Skill = {
  type: SkillType.Healing,
  description: "Used for healing creatures through morphing.",
};

export const Spirit: Skill = {
  type: SkillType.Spirit,
  description: "Used for evocation, such as speaking to the dead.",
};
