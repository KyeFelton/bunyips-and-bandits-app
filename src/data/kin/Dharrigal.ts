import imageSrc from "../../images/kin/dharrigal.png";
import { Kin } from "../../models/kin";
import { Downunda } from "../ancestries";
import { Human } from "../species";

export const Dharrigal: Kin = {
  ancestry: Downunda,
  species: Human,
  name: "Dharrigal",
  description:
    "Humans of Downunda are diverse in culture, with many tracing their lineage to the Dharrigal peoples who have inhabited these lands for countless generations.",
  imageSrc,
};
