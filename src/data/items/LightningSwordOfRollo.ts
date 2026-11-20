import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

const customEffect = `On the first attack of each combat, deals an additional 5 {{damage:${DamageType.Electric}}} damage.`;

export const LightningSwordOfRollo: Item = {
  name: "Lightning Sword of Rollo",
  description:
    `A legendary sword believed to be the weapon gifted by Eva to Rollo to fight the Night Dragon. The sword is made of an unknown, electric blue metal, and decorated with symbols of lightning. Deals 5 {{damage:${DamageType.Slash}}} damage when wielded. ${customEffect}`,
  equippedEffects: [
    {
      weapon: {
        bonus: 5,
        damageType: DamageType.Slash,
      },
    },
    {
      custom: customEffect,
    },
  ],
  singleUse: false,
  slots: 1,
  itemType: ItemType.Weapon,
};
