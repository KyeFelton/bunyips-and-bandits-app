import { SkillType } from "src/enums/SkillType";
import { Effect } from "./effect";
import { DamageType } from "src/enums/DamageType";

export type Trait = {
  name: string;
  description: string;
  effects?: Effect[];
};

export const Strong: Trait = {
  name: "Strong",
  description: "Increase your weapons damage by 2.",
  effects: [
    {
      weaponDamage: {
        static: 2,
      },
    },
  ],
};

export const Opportunist: Trait = {
  name: "Opportunist",
  description:
    "Once per round, upon an enemy moving past you, you can perform an extra action to attack.",
};

export const Vigilant: Trait = {
  name: "Vigilant",
  description: "Increase your evasion count by 1.",
  effects: [
    {
      evasions: {
        static: 1,
      },
    },
  ],
};

export const ThickSkin: Trait = {
  name: "Thick Skin",
  description: "Increase your armour for slash and force damage by 1.",
  effects: [
    {
      armour: {
        damageType: DamageType.Slash,
        static: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        static: 1,
      },
    },
  ],
};

export const Instinctive: Trait = {
  name: "Instinctive",
  description: "You can perform an extra action on the first round of combat.",
};
