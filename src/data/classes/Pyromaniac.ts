import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";

export const Pyromaniac: Class = {
  name: "Pyromaniac",
  description:
    "Pyromaniacs are the masters of controlled chaos, using flames to disrupt and destroy their enemies. This specialty uses a combination of sorcery and morphing to produce fire at will.",
  skillBonuses: {
    [SkillType.Pyro]: 3,
  },
};
