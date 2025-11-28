import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Rosette are a floret folk native to the forests of Engloria. They
    possess features resembling roses, including petal formations on the head
    and shoulders and leafy skin textures.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Their colouring varies from soft greens to deep reds and pinks.
        Traditional clothing consists of woven leaves and grasses, used more for
        decoration than necessity.
      </p>
      <p>
        Rosette communities are typically located in dense woodland areas, where
        they manipulate surrounding vegetation to form living structures. Their
        homes are shaped from growing plants rather than built from harvested
        materials, blending seamlessly into the natural environment. Settlements
        are often arranged in circular patterns around central groves or
        clearings.
      </p>
      <p>
        Rosette are often regarded as nurturing and community-minded,
        maintaining close relationships with the natural world. They are
        commonly associated with the care of plant life and forest stewardship.
      </p>
    </Body>
  </>
);

export const Rosette: WikiContent = {
  id: WikiId.Rosette,
  category: WikiCategory.Folk,
  title: "Rosette",
  blurb: "The Rosette are a floret folk native to the forests of Engloria.",
  summary,
  main: content,
};
