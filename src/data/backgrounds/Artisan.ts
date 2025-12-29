import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Artisan as Trait } from "../traits/Artisan";

export const Artisan: Background = {
  name: "Artisan",
  description:
    "You are a skilled craftsperson who creates useful and beautiful items with your hands. Whether you're a blacksmith forging tools, a potter shaping clay, or a weaver working wool from the shearing sheds, your trade demands precision and patience.",
  expertiseSkills: [SkillType.Dexterity, SkillType.Perception],
  traits: [Trait],
};
