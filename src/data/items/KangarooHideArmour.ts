import { Item } from "../../models/items";
import { WearType } from "../../enums/WearType";
import { DamageType } from "../../enums/DamageType";

export const KangarooHideArmour: Item = {
  name: "Kangaroo hide armour",
  description: "You gain +1 armour for force and slash damage types.",
  effects: [
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
  defaultCost: 100,
};
