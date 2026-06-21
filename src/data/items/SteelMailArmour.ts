import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { WearType } from "../../enums/WearType";
import { DamageType } from "../../enums/DamageType";
import { SkillType } from "../../enums/SkillType";

export const SteelMailArmour: Item = {
  name: "Steel mail armour",
  equippedEffects: [
    {
      armour: {
        damageType: DamageType.Slash,
        bonus: 2,
      },
    },
    {
      skill: {
        skillType: SkillType.Stealth,
        bonus: -1,
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
  wearType: WearType.Clothes,
  slots: 3,
  defaultCost: 1800,
  itemType: ItemType.Armour,
};
