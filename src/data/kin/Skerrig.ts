import imageSrc from "../../images/kin/skerrig.png";
import { Kin } from "../../models/kin";
import { Engloria } from "../ancestries";
import { Avian } from "../species";

export const Skerrig: Kin = {
  ancestry: Engloria,
  species: Avian,
  name: "Skerrig",
  description:
    "The Skerrig are an avian kin native to the coasts and rivers of Engloria and Downunda. Their plumage varies widely, often resembling seabirds such as gulls and cormorants.",
  imageSrc,
};
