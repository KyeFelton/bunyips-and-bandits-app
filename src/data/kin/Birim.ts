import imageSrc from "../../images/kin/birim.png";
import { Kin } from "../../models/kin";
import { Downunda } from "../ancestries";
import { Reptilian } from "../species";

export const Birim: Kin = {
  ancestry: Downunda,
  species: Reptilian,
  name: "Birim",
  description:
    "The Birim are a reptilian kin originating from the deserts of Downunda. They are distinguished by their tall and slender physique, with features resembling goannas.",
  imageSrc,
};
