import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const Pitchfork: Item = {
  name: "Pitchfork",
  description: "A long-handled fork used for moving hay. The tines make it a serviceable polearm.",
  equippedEffects: [
    {
      weapon: {
        bonus: 2,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  itemType: ItemType.ForceWeapon,
};
