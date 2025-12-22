import { SkillType } from "../../enums/SkillType";
import { Class } from "../../models/class";

export const Hypnotist: Class = {
  name: "Hypnotist",
  description:
    "Hypnotists are the puppeteers of the mind, bending reality through suggestion and illusion. With a mere whisper or a piercing gaze, they can lull enemies into a trance, distort perceptions, or even command others to act against their own will.",
  skillBonuses: {
    [SkillType.Psychic]: 3,
  },
};
