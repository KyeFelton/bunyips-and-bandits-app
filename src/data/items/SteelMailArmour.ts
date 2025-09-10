import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";
import { SkillType } from "../../enums/SkillType";

export const SteelMailArmour: Item = {
  name: "Steel mail armour",
  description:
    "You gain +2 armour for all damage types, and additional +1 armour for slash damage. You lose -1 on agility and -2 on stealth checks.",
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
        bonus: 2,
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
        bonus: 3,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        bonus: 2,
      },
    },
    {
      skill: {
        skillType: SkillType.Stealth,
        bonus: -2,
      },
    },
    {
      skill: {
        skillType: SkillType.Agility,
        bonus: -1,
      },
    },
  ],
  singleUse: false,
  weight: 20,
  defaultCost: 1800,
};
