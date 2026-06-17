import { Item } from "../../models/items";
import { WearType } from "../../enums/WearType";
import { DamageType } from "../../enums/DamageType";
import { SkillType } from "../../enums/SkillType";

export const CrocodileScaleArmour: Item = {
  name: "Crocodile scale armour",
  description:
    "You gain +3 armour for all damage types. You lose -1 on agility and dexterity checks",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: 3,
      },
    },
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 3,
      },
    },
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 3,
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
        bonus: 3,
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
  wearType: WearType.Clothes,
  slots: 4,
  defaultCost: 3500,
};
