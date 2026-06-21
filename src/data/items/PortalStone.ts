import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

const flavorDescription =
  "Portal stones are rare and highly valuable minerals used for teleportation.";

const consumedEffect = (distance: string) => ({
  custom: `When smashed, instantly teleports everything within close distance ${distance} in a random direction.`,
});

const SmallPortalStone: Item = {
  name: "Portal stone (small)",
  description: flavorDescription,
  consumedEffect: consumedEffect("1d6 × 10m"),
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 800,
  itemType: ItemType.Gemstone,
};

const LargePortalStone: Item = {
  name: "Portal stone (large)",
  description: flavorDescription,
  consumedEffect: consumedEffect("1d6 × 1km"),
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 2000,
  itemType: ItemType.Gemstone,
};

export { SmallPortalStone, LargePortalStone };
