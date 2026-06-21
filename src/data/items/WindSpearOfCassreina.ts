import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";

export const WindSpearOfCassreina: Item = {
  name: "Wind Spear of Cassreina",
  description:
    "The wind spear is believed to be the weapon gifted by Eva to Cassreina to fight the Night Dragon. The spear is made of an unknown, silver metal, and decorated with symbols of wind.",
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
        "Creatures that are 2m away from you are considered adjacent when attacking with this weapon.",
    },
  ],
  singleUse: false,
  slots: 2,
  itemType: ItemType.SlashWeapon,
};
