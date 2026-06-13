import imageSrc from "../../images/kin/gnome.png";
import { Kin } from "../../models/kin";
import { Engloria } from "../ancestries";
import { Delver } from "../species";

export const Gnome: Kin = {
  ancestry: Engloria,
  species: Delver,
  name: "Gnome",
  description:
    "Gnomes are delvers originating from the underground regions of Engloria. They are small in stature and are recognised by their sky-blue skin, white hair, and glowing yellow eyes.",
  imageSrc,
};
