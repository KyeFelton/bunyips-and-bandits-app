import { Item } from "../../models/items";

export const KujuHat: Item = {
  name: "Kuju hat",
  description:
    "A flower hat believed to belong to a Kuju, a magical creature from Tolrusian mythology. Wearing the hat brings good luck. You gain +5 bonus to luck checks when wearing it.",
  effects: [
    {
      luck: {
        bonus: 5,
      },
    },
  ],
  singleUse: false,
  weight: 0.5,
};
