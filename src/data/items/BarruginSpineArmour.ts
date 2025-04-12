import { DamageType } from "../../enums/DamageType";
import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";

export const BarruginSpineArmour: Item = {
  name: "Barrugin spine armour",
  description:
    "You gain +4 armour for all damage types. Foes that touch your armour take 1d8 slash damage. You lose -1 on agility and dexterity checks.",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: 4,
      },
    },
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 4,
      },
    },
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 4,
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
        skillType: SkillType.Agility,
        bonus: -1,
      },
    },
    {
      skill: {
        skillType: SkillType.Dexterity,
        bonus: -1,
      },
    },
  ],
  singleUse: false,
  weight: 20.0,
  defaultCost: 20000,
};
