import { SkillType } from "../enums/SkillType";
import { DamageType } from "../enums/DamageType";
import { Effect } from "./effect";

export type Item = {
  name: string;
  description: string;
  effects?: Effect[];
  singleUse: boolean;
  weight: number;
};

export type CharacterItem = Item & {
  equipped: boolean;
  quantity: number;
};

export type ItemDictionary = Record<string, CharacterItem>;

export const Antidote: Item = {
  name: "Antidote",
  description:
    "When consumed within one hour of taking toxic damage, you regain up to 5 health lost.",
  effects: [
    {
      health: {
        bonus: 5,
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
        bonus: 5,
      },
    },
    {
      skill: {
        skillType: SkillType.Spirit,
        bonus: 5,
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
        bonus: 5,
      },
    },
  ],
  singleUse: false,
  weight: 0.5,
};

export const SteelPlateArmour: Item = {
  name: "Steel plate armour",
  description:
    "You gain +2 armour for all damage types, and an additional +3 armour for slash, force and electric damage. You lose -2 on agility and dexterity checks.",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: 2,
      },
    },
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 5,
      },
    },
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 2,
      },
    },
    {
      armour: {
        damageType: DamageType.Slash,
        bonus: 5,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        bonus: 5,
      },
    },
    {
      skill: {
        skillType: SkillType.Dexterity,
        bonus: -2,
      },
    },
    {
      skill: {
        skillType: SkillType.Agility,
        bonus: -2,
      },
    },
  ],
  singleUse: false,
  weight: 20,
};

export const SteelSword: Item = {
  name: "Steel sword",
  description: "Your weapon attacks deal 6 slash damage when wielded.",
  effects: [
    {
      weaponDamage: {
        bonus: 6,
      },
    },
  ],
  singleUse: false,
  weight: 1,
};
