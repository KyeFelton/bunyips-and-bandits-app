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
    "Used for physical maneuvers requiring strength, such as breaking down a door, carrying a heavy load, escaping a grapple or determining damage from a punch.",
  form: SkillForm.Physical,
};

export const Agility: Skill = {
  type: SkillType.Agility,
  pathSkill: false,
  description:
    "Used for physical maneuvers requiring balance and quick reflexes, such as dodging an attack, running through a busy street, or recovering from a fall.",
  form: SkillForm.Physical,
};

export const Dexterity: Skill = {
  type: SkillType.Dexterity,
  pathSkill: false,
  description:
    "Used for tasks requiring fine motor control and hand-eye coordination, such as pick pocketing, disabling a trap, playing an instrument, or determing whether a punch hits a moving creature.",
  form: SkillForm.Physical,
};

export const Throw: Skill = {
  type: SkillType.Throw,
  pathSkill: false,
  description: "Used for hurling objects with precision and distance.",
  form: SkillForm.Physical,
};

export const Stealth: Skill = {
  type: SkillType.Stealth,
  pathSkill: false,
  description:
    "Used for avoiding detection, such as surprise ambushing or sneaking past another creature.",
  form: SkillForm.Physical,
};

export const Intelligence: Skill = {
  type: SkillType.Intelligence,
  pathSkill: false,
  description:
    "Used for tasks requiring mental acuity, such as investigating a scene, researching in a library, or recalling historical events.",
  form: SkillForm.Mental,
};

export const Nature: Skill = {
  type: SkillType.Nature,
  pathSkill: false,
  description:
    "Used for wilderness and creature-related tasks, such as taming a beast, tracking, or navigating a forest.",
  form: SkillForm.Mental,
};

export const Willpower: Skill = {
  type: SkillType.Willpower,
  pathSkill: false,
  description:
    "Used for mental fortitude, such as resisting psychic attacks or countering attempts of intimidation.",
  form: SkillForm.Mental,
};

export const Charisma: Skill = {
  type: SkillType.Charisma,
  pathSkill: false,
  description:
    "Used for social interactions requiring influence, such as charming, persuading or deceiving others.",
  form: SkillForm.Mental,
};

export const Psychology: Skill = {
  type: SkillType.Psychology,
  pathSkill: false,
  description:
    "Used for assessing the behaviours and mannerisms of others to determine their true thoughts and emotions.",
  form: SkillForm.Mental,
};

export const Sight: Skill = {
  type: SkillType.Sight,
  pathSkill: false,
  description:
    "Used for visual perception tasks, such as spotting hidden objects or seeing in the dark.",
  form: SkillForm.Mental,
};

export const Hearing: Skill = {
  type: SkillType.Hearing,
  pathSkill: false,
  description:
    "Used for auditory perception tasks, such as hearing faint noise or identifying specific sounds in a noisy environment.",
  form: SkillForm.Mental,
};

export const Smell: Skill = {
  type: SkillType.Smell,
  pathSkill: false,
  description:
    "Used for olfactory perception tasks, such as detecting and tracking scents.",
  form: SkillForm.Mental,
};

export const Martial: Skill = {
  type: SkillType.Martial,
  pathSkill: true,
  description: "Used for armed melee attacks.",
  form: SkillForm.Physical,
};

export const Pyro: Skill = {
  type: SkillType.Pyro,
  pathSkill: true,
  description: "Used for fire sorcery, such as igniting a creature on fire.",
  form: SkillForm.Physical,
};

export const Electric: Skill = {
  type: SkillType.Electric,
  pathSkill: true,
  description: "Used for electric sorcery, such as casting a lightning bolt.",
  form: SkillForm.Physical,
};

export const Kinetic: Skill = {
  type: SkillType.Kinetic,
  pathSkill: true,
  description: "Used for kinetic sorcery, such as telekinesis.",
  form: SkillForm.Physical,
};

export const Radiant: Skill = {
  type: SkillType.Radiant,
  pathSkill: true,
  description: "Used for light sorcery, such as illuminating a room.",
  form: SkillForm.Physical,
};

export const Sonic: Skill = {
  type: SkillType.Sonic,
  pathSkill: true,
  description:
    "Used for sound sorcery, such as producing a terrifying shriek in the distance.",
  form: SkillForm.Physical,
};

export const Pyschic: Skill = {
  type: SkillType.Psychic,
  pathSkill: true,
  description: "Used for psionics, such as mind reading.",
  form: SkillForm.Mental,
};

export const Toxic: Skill = {
  type: SkillType.Toxic,
  pathSkill: true,
  description: "Used for producing poisons, venom and acids.",
  form: SkillForm.Physical,
};

export const Healing: Skill = {
  type: SkillType.Healing,
  pathSkill: true,
  description: "Used for healing creatures through morphing.",
  form: SkillForm.Physical,
};

export const Spirit: Skill = {
  type: SkillType.Spirit,
  pathSkill: true,
  description: "Used for evocation, such as speaking to the dead.",
  form: SkillForm.Mental,
};
