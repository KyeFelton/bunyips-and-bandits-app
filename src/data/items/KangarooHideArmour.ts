import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { WearType } from "../../enums/WearType";
import { DamageType } from "../../enums/DamageType";

export const KangarooHideArmour: Item = {
  name: "Kangaroo hide armour",
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
  ],
  singleUse: false,
  wearType: WearType.Clothes,
  slots: 2,
  defaultCost: 100,
  itemType: ItemType.Armour,
};
