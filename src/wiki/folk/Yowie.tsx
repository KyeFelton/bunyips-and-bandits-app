import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    Yowies are a giant folk found in the highlands of Downunda. They are large,
    fur-covered humanoids with features resembling marsupials, including a
    pronounced muzzle and a thick tail similar to that of a kangaroo.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Their fur ranges from pale grey to dark brown, providing insulation
        against cold climates. Traditional clothing consists of animal furs worn
        for additional warmth.
      </p>
      <p>
        Yowie settlements are built from stone and situated in remote, elevated
        regions. Their homes are sturdy structures designed to withstand cold
        winds and heavy snow. Many Yowies live in small family units, though
        some communities maintain larger mountain villages connected by narrow
        passes.
      </p>
      <p>
        Yowies are often regarded as solitary and self-reliant. They maintain a
        strong connection to the mountains and are skilled in survival, hunting,
        and construction in rugged terrain.
      </p>
    </Body>
  </>
);

export const Yowie: WikiContent = {
  id: WikiId.Yowie,
  category: WikiCategory.Folk,
  title: "Yowie",
  blurb: "Yowies are a giant folk found in the highlands of Downunda.",
  summary,
  main: content,
};
