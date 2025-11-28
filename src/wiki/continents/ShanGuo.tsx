import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    Shan Guo lies west of the Continent. The land is defined by dramatic limestone peaks, river basins, and fertile plains.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        It experiences a temperate climate with distinct wet and dry seasons. Terraced farming and canal systems are common, reflecting centuries of engineered adaptation to the landscape. Shan Guo is heavily urbanised, with walled cities and mountain monasteries linked by trade routes that follow the great rivers.
      </p>
    </Body>
  </>
);

export const ShanGuo: WikiContent = {
  id: WikiId.ShanGuo,
  category: WikiCategory.Continents,
  title: "Shan Guo",
  blurb:
    "Shan Guo lies west of the Continent.",
  summary,
  main: content,
};
