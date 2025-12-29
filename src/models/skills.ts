import { SkillType } from "../enums/SkillType";
import { SkillForm } from "../enums/SkillForm";

export type Skill = {
  type: SkillType;
  magicSkill: boolean;
  description: string;
  form: SkillForm;
};

export const Strength: Skill = {
  type: SkillType.Strength,
  magicSkill: false,
  description:
    "Physical maneuvers requiring strength, such as breaking down a door, carrying a heavy load, or escaping a grapple.",
  form: SkillForm.Physical,
};

export const Agility: Skill = {
  type: SkillType.Agility,
  magicSkill: false,
  description:
    "Physical maneuvers requiring balance and quick reflexes, such as dodging an attack, running through a busy street, or recovering from a fall.",
  form: SkillForm.Physical,
};

export const Dexterity: Skill = {
  type: SkillType.Dexterity,
  magicSkill: false,
  description:
    "Tasks requiring fine motor control and hand-eye coordination, such as pick pocketing, playing an instrument, or throwing a knife.",
  form: SkillForm.Physical,
};

export const Stealth: Skill = {
  type: SkillType.Stealth,
  magicSkill: false,
  description:
    "Avoiding detection, such as surprise ambushing or sneaking past another creature.",
  form: SkillForm.Physical,
};

export const Intelligence: Skill = {
  type: SkillType.Intelligence,
  magicSkill: false,
  description:
    "Tasks requiring mental acuity, such as investigating a scene, researching in a library, or recalling historical events.",
  form: SkillForm.Mental,
};

export const Nature: Skill = {
  type: SkillType.Nature,
  magicSkill: false,
  description:
    "Wilderness and creature-related tasks, such as taming a beast, tracking, or navigating a forest.",
  form: SkillForm.Mental,
};

export const Willpower: Skill = {
  type: SkillType.Willpower,
  magicSkill: false,
  description:
    "Mental fortitude, such as resisting psychic attacks or countering attempts of intimidation.",
  form: SkillForm.Mental,
};

export const Charisma: Skill = {
  type: SkillType.Charisma,
  magicSkill: false,
  description:
    "Social interactions requiring influence, such as charming, persuading or deceiving others.",
  form: SkillForm.Mental,
};

export const Psychology: Skill = {
  type: SkillType.Psychology,
  magicSkill: false,
  description:
    "Assessing the behaviours and mannerisms of others to determine their true thoughts and emotions.",
  form: SkillForm.Mental,
};

export const Perception: Skill = {
  type: SkillType.Perception,
  magicSkill: false,
  description:
    "Detecting things through your senses, such as spotting hidden objects, hearing faint sounds, or tracking scents.",
  form: SkillForm.Mental,
};

export const Pyro: Skill = {
  type: SkillType.Pyro,
  magicSkill: true,
  description:
    "Fire sorcery, such as igniting a campfire or stunning an enemy with fireworks.",
  form: SkillForm.Physical,
};

export const Electric: Skill = {
  type: SkillType.Electric,
  magicSkill: true,
  description:
    "Electric sorcery, such as casting a lightning bolt or attracting nearby magnetic objects.",
  form: SkillForm.Physical,
};

export const Kinetic: Skill = {
  type: SkillType.Kinetic,
  magicSkill: true,
  description:
    "Kinetic sorcery, such as levitating an object or manifesting a powerful windstorms.",
  form: SkillForm.Physical,
};

export const Radiant: Skill = {
  type: SkillType.Radiant,
  magicSkill: true,
  description:
    "Light sorcery, such as blinding an enemy or crafting a visual illusion.",
  form: SkillForm.Physical,
};

export const Sonic: Skill = {
  type: SkillType.Sonic,
  magicSkill: true,
  description:
    "Sound sorcery, such as casting an audial illusion or blasting a foe with sonic waves.",
  form: SkillForm.Physical,
};

export const Psychic: Skill = {
  type: SkillType.Psychic,
  magicSkill: true,
  description:
    "Psionics, such as mind reading or hypnotising another creature.",
  form: SkillForm.Mental,
};

export const Biotic: Skill = {
  type: SkillType.Biotic,
  magicSkill: true,
  description:
    "Manipulating living matter, such as healing wounds, shapeshifting or producing poisons.",
  form: SkillForm.Physical,
};

export const Spirit: Skill = {
  type: SkillType.Spirit,
  magicSkill: true,
  description:
    "Evocation, such as speaking to the dead or summoning spirits to your aid.",
  form: SkillForm.Mental,
};
