import { DamageType } from "../../enums/DamageType";
import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";

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
  defaultCost: 2500,
};
