import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Drifter as Trait } from "../traits/Drifter";

export const Drifter: Background = {
  name: "Drifter",
  description:
    "You wander from place to place with no fixed home, relying on your wits and instincts to survive. Whether you're a swagman traveling the outback tracks or a vagabond drifting between frontier towns, you've learned to read people and situations, and somehow, fortune often favors you.",
  expertiseSkills: [SkillType.Agility, SkillType.Psychology],
  traits: [Trait],
};
