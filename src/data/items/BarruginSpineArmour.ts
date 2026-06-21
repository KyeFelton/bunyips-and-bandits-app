import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";
import { WearType } from "../../enums/WearType";
import { ItemType } from "../../enums/ItemType";

export const BarruginSpineArmour: Item = {
  name: "Barrugin spine armour",
  equippedEffects: [
    {
      armour: {
        damageType: DamageType.Slash,
        bonus: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
    {
      custom: "Foes that make contact with the armour take 2 Slash damage.",
    },
  ],
  singleUse: false,
  wearType: WearType.Clothes,
  slots: 5,
  defaultCost: 20000,
  itemType: ItemType.Armour,
};
