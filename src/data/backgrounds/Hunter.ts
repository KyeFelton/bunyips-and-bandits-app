import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Hunter as Trait } from "../traits/Hunter";

export const Hunter: Background = {
  name: "Hunter",
  description:
    "You've made your living tracking and hunting game in the wilderness. Whether you're a tracker following game through the outback, a ranger patrolling the bush, or a professional hunter supplying meat to settlements, you know how to read the land and survive in the wild.",
  expertiseSkills: [SkillType.Stealth, SkillType.Nature],
  traits: [Trait],
};
