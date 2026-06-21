import { Item } from "../../models/items";

export const Antidote: Item = {
  name: "Antidote",
  consumedEffect: {
    body: 3,
    custom:
      "When drunk within one minute of taking toxic damage, recovers up to 3 health lost from the toxic damage.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
};
