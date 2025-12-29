import { Background } from "../../models/backgrounds";
import { SkillType } from "../../enums/SkillType";
import { Labourer as Trait } from "../traits/Labourer";

export const Labourer: Background = {
  name: "Labourer",
  description:
    "Years of hard physical work have built your strength and endurance. Whether you were a miner digging for gold, a logger felling timber in the bush, or a sailor working the docks of a bustling port, you've learned to push through exhaustion and keep working when others would quit.",
  expertiseSkills: [SkillType.Strength, SkillType.Willpower],
  traits: [Trait],
};
