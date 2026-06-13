import imageSrc from "../../images/kin/troll.png";
import { Kin } from "../../models/kin";
import { Engloria } from "../ancestries";
import { Giant } from "../species";

export const Troll: Kin = {
  ancestry: Engloria,
  species: Giant,
  name: "Troll",
  description:
    "Trolls are a giant kin native to the swamps and mountains of Engloria. They are large humanoids with broad noses, heavy brows, mossy hair, and enormous hands and feet.",
  imageSrc,
};
