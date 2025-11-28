import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    Downunda is an expansive island located to the east of the Continent,
    characterised by tropical coasts, arid deserts, and dense interior forests.
    Its geography ranges from red sand plains and rocky gorges in the west to
    lush wetlands and forests in the east.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        The region's flora and fauna are unique, with many species found nowhere
        else in the world.
      </p>
      <p>
        Downunda was once connected to the Continent by a land bridge until the
        Great Storm flooded the crossing, transforming the crossing to the
        Fireridge archipelago.
      </p>
    </Body>
  </>
);

export const Downunda: WikiContent = {
  id: WikiId.Downunda,
  category: WikiCategory.Continents,
  title: "Downunda",
  blurb:
    "Downunda is an expansive island located to the east of the Continent, characterised by tropical coasts, arid deserts, and dense interior forests.",
  summary,
  main: content,
};
