import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    Tolrus occupies the northernmost reaches of the Continent and is dominated by taiga forests, tundra plains, and polar deserts.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Long winters and short, mild summers define the region's climate, and much of its terrain remains frozen for most of the year. Settlements are concentrated along river valleys and coastal areas where the soil thaws enough for limited agriculture and fishing. The people of Tolrus have adapted to harsh conditions through communal living, subsistence hunting, and reliance on domesticated animals for transport and warmth.
      </p>
    </Body>
  </>
);

export const Tolrus: WikiContent = {
  id: WikiId.Tolrus,
  category: WikiCategory.Continents,
  title: "Tolrus",
  blurb:
    "Tolrus occupies the northernmost reaches of the Continent and is dominated by taiga forests, tundra plains, and polar deserts.",
  summary,
  main: content,
};
