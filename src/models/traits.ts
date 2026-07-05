import { OngoingEffect } from "./effect";

export type Trait = {
  name: string;
  description: string;
  effects?: OngoingEffect[];
};
