import { SkillType } from "../enums/SkillType";
import { Effect } from "./effect";

export type Item = {
  name: string;
  description: string;
  effects?: Effect[];
  singleUse: boolean;
  weight: number;
};

export const Antidote: Item = {
  name: "Antidote",
  description:
    "When consumed within one hour of taking toxic damage, you regain up to 5 health lost.",
  effects: [
    {
      health: {
        static: 5,
      },
    },
  ],
  singleUse: true,
  weight: 0.2,
};

export const FirstAidKit: Item = {
  name: "First aid kit",
  description:
    " You roll 1d8 instead of 1d4 when determining the amount of health regained from first aid.",
  singleUse: false,
  weight: 1,
};

export const MiriScale: Item = {
  name: "Miri's scale",
  description:
    "A large, rainbow scale believed to belong Miri. Being in possession of the scale grants you +5 bonus to nature and spirit checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Nature,
        static: 5,
      },
    },
    {
      skill: {
        skillType: SkillType.Spirit,
        static: 5,
      },
    },
  ],
  singleUse: false,
  weight: 2,
};

export const KujuHat: Item = {
  name: "Kuju hat",
  description:
    "A flower hat believed to belong to a Kuju, a magical creature from Tolrusian mythology. Wearing the hat brings good luck. You gain +5 bonus to luck checks when wearing it.",
  effects: [
    {
      luck: {
        static: 5,
      },
    },
  ],
  singleUse: false,
  weight: 0.5,
};
