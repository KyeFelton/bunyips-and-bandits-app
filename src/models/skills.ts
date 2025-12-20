import { SkillType } from "../enums/SkillType";
import { SkillForm } from "../enums/SkillForm";

export type Skill = {
  type: SkillType;
  pathSkill: boolean;
  description: string;
  form: SkillForm;
};

export const Strength: Skill = {
  type: SkillType.Strength,
  pathSkill: false,
  description:
    "Physical maneuvers requiring strength, such as breaking down a door, carrying a heavy load, or escaping a grapple.",
  form: SkillForm.Physical,
};

export const Agility: Skill = {
  type: SkillType.Agility,
  pathSkill: false,
  description:
    "Physical maneuvers requiring balance and quick reflexes, such as dodging an attack, running through a busy street, or recovering from a fall.",
  form: SkillForm.Physical,
};

export const Dexterity: Skill = {
  type: SkillType.Dexterity,
  pathSkill: false,
  description:
    "Tasks requiring fine motor control and hand-eye coordination, such as pick pocketing, playing an instrument, or throwing a knife.",
  form: SkillForm.Physical,
};

export const Stealth: Skill = {
  type: SkillType.Stealth,
  pathSkill: false,
  description:
    "Avoiding detection, such as surprise ambushing or sneaking past another creature.",
  form: SkillForm.Physical,
};

export const Intelligence: Skill = {
  type: SkillType.Intelligence,
  pathSkill: false,
  description:
    "Tasks requiring mental acuity, such as investigating a scene, researching in a library, or recalling historical events.",
  form: SkillForm.Mental,
};

export const Nature: Skill = {
  type: SkillType.Nature,
  pathSkill: false,
  description:
    "Wilderness and creature-related tasks, such as taming a beast, tracking, or navigating a forest.",
  form: SkillForm.Mental,
};

export const Willpower: Skill = {
  type: SkillType.Willpower,
  pathSkill: false,
  description:
    "Mental fortitude, such as resisting psychic attacks or countering attempts of intimidation.",
  form: SkillForm.Mental,
};

export const Charisma: Skill = {
  type: SkillType.Charisma,
  pathSkill: false,
  description:
    "Social interactions requiring influence, such as charming, persuading or deceiving others.",
  form: SkillForm.Mental,
};

export const Psychology: Skill = {
  type: SkillType.Psychology,
  pathSkill: false,
  description:
    "Assessing the behaviours and mannerisms of others to determine their true thoughts and emotions.",
  form: SkillForm.Mental,
};

export const Perception: Skill = {
  type: SkillType.Perception,
  pathSkill: false,
  description:
    "Detecting things through your senses, such as spotting hidden objects, hearing faint sounds, or tracking scents.",
  form: SkillForm.Mental,
};

export const Pyro: Skill = {
  type: SkillType.Pyro,
  pathSkill: true,
  description: "Fire sorcery, such as igniting a creature on fire.",
  form: SkillForm.Physical,
};

export const Electric: Skill = {
  type: SkillType.Electric,
  pathSkill: true,
  description: "Electric sorcery, such as casting a lightning bolt.",
  form: SkillForm.Physical,
};

export const Kinetic: Skill = {
  type: SkillType.Kinetic,
  pathSkill: true,
  description: "Kinetic sorcery, such as telekinesis.",
  form: SkillForm.Physical,
};

export const Radiant: Skill = {
  type: SkillType.Radiant,
  pathSkill: true,
  description: "Light sorcery, such as illuminating a room.",
  form: SkillForm.Physical,
};

export const Sonic: Skill = {
  type: SkillType.Sonic,
  pathSkill: true,
  description:
    "Sound sorcery, such as producing a terrifying shriek in the distance.",
  form: SkillForm.Physical,
};

export const Psychic: Skill = {
  type: SkillType.Psychic,
  pathSkill: true,
  description: "Psionics, such as mind reading.",
  form: SkillForm.Mental,
};

export const Biotic: Skill = {
  type: SkillType.Biotic,
  pathSkill: true,
  description:
    "Manipulating living matter, such as healing wounds, shapeshifting and producing poisons.",
  form: SkillForm.Physical,
};

export const Spirit: Skill = {
  type: SkillType.Spirit,
  pathSkill: true,
  description: "Evocation, such as speaking to the dead.",
  form: SkillForm.Mental,
};
