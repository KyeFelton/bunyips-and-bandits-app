import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Spy as Trait } from "../traits/Spy";
import { FullBodyCloak, HuntingKnife, LockpickKit, MagnifyingGlass, MakeupKit, Notebook, SewingKit, Spyglass, SteelDagger } from "../items";

export const Spy: Background = {
  name: "Spy",
  description:
    "You've worked in the shadows gathering information and uncovering secrets. You could be a private detective solving mysteries for hire or an intelligence agent for an organisation.",
  startingSkillLevels: [
    {
      skill: SkillType.Psychology,
      level: 5
    },
    {
      skill: SkillType.Perception,
      level: 3
    }
  ],
  traits: [Trait],
  startingItems: [
    {
      name: "Detective",
      money: 100,
      items: [Notebook, MagnifyingGlass, LockpickKit, HuntingKnife],
    },
    {
      name: "Informant",
      money: 100,
      items: [Notebook, FullBodyCloak, Spyglass, SewingKit, MakeupKit, SteelDagger],
    },
  ],
};
