import { DamageType } from "../../enums/DamageType";
import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";

export const SteelPlateArmour: Item = {
  name: "Steel plate armour",
  description:
    "You gain +2 armour for all damage types, and an additional +1 armour for slash and force damage. You lose -2 on agility and dexterity checks.",
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
        bonus: 4,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        bonus: 4,
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
  defaultCost: 2500,
};
