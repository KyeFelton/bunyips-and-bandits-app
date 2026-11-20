import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";

export const WindSpearOfCassreina: Item = {
  name: "Wind Spear of Cassreina",
  description:
    "A spear believed to be the weapon gifted by Eva to Cassreina to fight the Night Dragon. Made of an unknown, silver metal, and decorated with symbols of wind.",
  equippedEffects: [
    {
      weapon: {
        bonus: 5,
        damageType: DamageType.Slash,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Run,
        increase: true,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Swim,
        increase: true,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Climb,
        increase: true,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Fly,
        increase: true,
      },
    },
    {
      custom:
        "When a seen enemy moves from Near to Close distance with you, you may immediately make a free attack against them with the spear.",
    },
  ],
  singleUse: false,
  slots: 2,
  itemType: ItemType.Weapon,
};
