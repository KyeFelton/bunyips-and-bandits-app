import imageSrc from "../../images/kin/dropBear.png";
import { Kin } from "../../models/kin";
import { Downunda } from "../ancestries";
import { Goblin } from "../species";

export const DropBear: Kin = {
  ancestry: Downunda,
  species: Goblin,
  name: "Drop Bear",
  description:
    "Drop Bears are a koala-like, goblin kin native to the forests of Downunda. They possess stocky, hunched bodies, with strong arms suited for climbing and wrestling.",
  imageSrc,
};
