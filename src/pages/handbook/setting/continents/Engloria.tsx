import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";

const summary = (
  <p>
    Engloria is a temperate region in the east known for its rolling hills,
    misty forests, and fertile river valleys.
  </p>
);

const content = (
  <>
    <p>
      The landscape is shaped by centuries of cultivation, with farmland, stone
      villages, and fortified towns spread across the countryside. The climate
      is cool and wet, supporting oak and birch woodlands as well as expansive
      meadows.
    </p>
  </>
);

export const Engloria: WikiContent = {
  id: WikiId.Engloria,
  category: WikiCategory.Continents,
  title: "Engloria",
  blurb:
    "Engloria is a temperate region in the east known for its rolling hills, misty forests, and fertile river valleys.",
  summary,
  main: content,
};
