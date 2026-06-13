import imageSrc from "../../images/kin/joonyar.png";
import { Kin } from "../../models/kin";
import { Downunda } from "../ancestries";
import { Delver } from "../species";

export const Joonyar: Kin = {
  ancestry: Downunda,
  species: Delver,
  name: "Joonyar",
  description:
    "The Joonyar are a delver kin that live in the underground regions of Downunda. They are small humanoids with skin in shades of eucalyptus, brown hair, and glowing orange eyes that provide illumination in low-light environments.",
  imageSrc,
};
