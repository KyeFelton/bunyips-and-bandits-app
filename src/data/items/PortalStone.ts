import { Item } from "../../models/items";

const flavorDescription =
  "Portal stones are rare and highly valuable minerals used for teleportation.";

const consumedEffect = (colour: string, direction: string) => ({
  custom: `When a portal stone is fractured, it instantly teleports everything within its area of effect to a new location. This area is spherical, centered on the stone itself.

The size of the sphere depends on the stone's size. Small stones can create a sphere capable of fitting one medium sized creature, whilst large stones can teleport a small house.

The distance of teleportation is determined by the severity of the fracture. A small crack may displace creatures or objects by tens of metres. Shattering the stone can result in teleportation over several kilometres.

The direction of the teleportation is based on the colour of the portal stone. ${colour} portal stones teleport to the ${direction} of its original location.`,
});

const SmallGreenPortalStone: Item = {
  name: "Small green portal stone",
  description: flavorDescription,
  consumedEffect: consumedEffect("Green", "South-East"),
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 800,
};

const SmallOrangePortalStone: Item = {
  name: "Small orange portal stone",
  description: flavorDescription,
  consumedEffect: consumedEffect("Orange", "North-East"),
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 800,
};

const SmallPurplePortalStone: Item = {
  name: "Small purple portal stone",
  description: flavorDescription,
  consumedEffect: consumedEffect("Purple", "West"),
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 800,
};

const LargeRedPortalStone: Item = {
  name: "Large red portal stone",
  description: flavorDescription,
  consumedEffect: consumedEffect("Red", "North"),
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 2000,
};

const LargeBluePortalStone: Item = {
  name: "Large blue portal stone",
  description: flavorDescription,
  consumedEffect: consumedEffect("Blue", "South-West"),
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 2000,
};

export {
  SmallGreenPortalStone,
  SmallOrangePortalStone,
  SmallPurplePortalStone,
  LargeBluePortalStone,
  LargeRedPortalStone,
};
