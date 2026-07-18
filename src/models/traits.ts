import { SkillType } from "../enums/SkillType";
import { OngoingEffect } from "./effect";

export type Trait = {
  name: string;
  description: string;
  effects?: OngoingEffect[];
};

export type TraitSource =
  | "Background"
  | "Custom"
  | "Injury"
  | "Trauma"
  | SkillType;

export type TraitEntry = {
  trait: Trait;
  source: TraitSource;
  customIndex?: number;
};
