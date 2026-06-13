import imageSrc from "../../images/kin/englorian.png";
import { Kin } from "../../models/kin";
import { Engloria } from "../ancestries";
import { Human } from "../species";

export const Englorian: Kin = {
  ancestry: Engloria,
  species: Human,
  name: "Englorian",
  description:
    "Englorians descend from human settlers who originated in Engloria.",
  imageSrc,
};
