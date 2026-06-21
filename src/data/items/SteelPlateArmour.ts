import { DamageType } from "../../enums/DamageType";
import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";
import { WearType } from "../../enums/WearType";

export const SteelPlateArmour: Item = {
  name: "Steel plate armour",
  equippedEffects: [
    {
      armour: {
        damageType: DamageType.Slash,
        bonus: 2,
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
        bonus: -2,
      },
    },
  ],
  singleUse: false,
  wearType: WearType.Clothes,
  slots: 3,
  defaultCost: 2500,
};
