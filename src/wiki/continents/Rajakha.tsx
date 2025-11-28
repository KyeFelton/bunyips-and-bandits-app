import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    Rajakha is a tropical peninsula bordered by mountains and surrounded by warm seas.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Its geography includes dense rainforests, fertile plains, and monsoon-fed rivers that sustain abundant agriculture. The region's economy is based on rice, fruit, and spice cultivation, along with maritime trade that connects it to neighbouring lands. Settlements are organised around temple complexes that serve both religious and civic functions.
      </p>
    </Body>
  </>
);

export const Rajakha: WikiContent = {
  id: WikiId.Rajakha,
  category: WikiCategory.Continents,
  title: "Rajakha",
  blurb:
    "Rajakha is a tropical peninsula bordered by mountains and surrounded by warm seas.",
  summary,
  main: content,
};
