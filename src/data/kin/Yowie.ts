import imageSrc from "../../images/kin/yowie.png";
import { Kin } from "../../models/kin";
import { Downunda } from "../ancestries";
import { Giant } from "../species";

export const Yowie: Kin = {
  ancestry: Downunda,
  species: Giant,
  name: "Yowie",
  description:
    "Yowies are a giant kin found in the highlands of Downunda. They are large, fur-covered humanoids with features resembling marsupials.",
  imageSrc,
};
