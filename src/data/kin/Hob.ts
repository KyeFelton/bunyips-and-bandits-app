import imageSrc from "../../images/kin/hob.png";
import { Kin } from "../../models/kin";
import { Engloria } from "../ancestries";
import { Goblin } from "../species";

export const Hob: Kin = {
  ancestry: Engloria,
  species: Goblin,
  name: "Hob",
  description:
    "Hobs are a goblin kin with ancestral ties to Engloria. They are slightly shorter than humans, with a stocky build, coarse body hair, and facial features often likened to bats, including wide-set eyes, flat nose and pointed ears.",
  imageSrc,
};
