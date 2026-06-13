import { Ancestry } from "./ancestry";
import { Species } from "./species";

export type Kin = {
  ancestry: Ancestry;
  species: Species;
  name: string;
  description: string;
  imageSrc: string;
};
