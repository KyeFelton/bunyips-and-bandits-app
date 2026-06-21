import { Item } from "../../models/items";
import { WearType } from "../../enums/WearType";
import { DamageType } from "../../enums/DamageType";

export const CrocodileScaleArmour: Item = {
  name: "Crocodile scale armour",
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
  slots: 3,
  defaultCost: 3500,
};
