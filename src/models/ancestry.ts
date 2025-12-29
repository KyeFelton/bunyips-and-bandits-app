import { Trait } from "./traits";

export type Ancestry = Trait & {
  species: string[];
};
