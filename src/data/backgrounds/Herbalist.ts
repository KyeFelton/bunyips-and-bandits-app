import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Herbalist as Trait } from "../traits/Herbalist";

export const Herbalist: Background = {
  name: "Herbalist",
  description:
    "You have deep knowledge of plants, fungi, and natural remedies. Whether you're a bush medicine practitioner gathering native herbs or an apothecary mixing tinctures and salves, you understand which plants heal and which ones harm.",
  expertiseSkills: [SkillType.Nature, SkillType.Perception],
  traits: [Trait],
};
