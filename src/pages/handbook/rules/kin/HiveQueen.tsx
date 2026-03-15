import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";

const summary = (
  <p>
    The Hive Queen are an arthropodal folk of the Swarm whose purpose is to
    manage a hive and conduct raids on villages. They are bipedal insectoids,
    standing at a height of two metres.
  </p>
);

const content = (
  <>
    <p>
      They are both mentally and physically powerful. They are advanced
      psychics, and use their abilities to telepathically watch and command
      their subjects.
    </p>
    <p>
      Their heads lack facial features, but can unfurl like a flower to reveal
      "petals" of flesh lined with barbs, and a large open mouth. It is said
      that any creature who stares directly into the mouth of a Hive Queen will
      be permanently cursed with terror and madness.
    </p>
  </>
);

export const HiveQueen: WikiContent = {
  id: WikiId.HiveQueen,
  category: WikiCategory.Folk,
  title: "Hive Queen",
  blurb:
    "The Hive Queen are an arthropodal folk of the Swarm whose purpose is to manage a hive and conduct raids on villages.",
  summary,
  main: content,
};
