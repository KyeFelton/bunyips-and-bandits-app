import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";
import { Goblin } from "../../../../data/species/Goblin";
import { KinStatsTable } from "../../../../components/KinStatsTable";
import { getSpeciesImage } from "../../../../utils/speciesImages";

const summary = (
  <p>
    Drop Bears are a koala-like, goblin folk native to the forests of Downunda.
    They possess stocky, hunched bodies, with strong arms suited for climbing
    and wrestling.
  </p>
);

const content = (
  <>
    <p>
      Drop Bears tend to construct makeshift shelters in the forest canopy,
      often assembling crude and uneven treehouses. These dwellings are
      temporary in nature, as groups of Drop Bears frequently move from place to
      place rather than maintaining permanent settlements. Their mobility allows
      them to venture to new regions to hunt food.
    </p>
    <p>
      Drop Bears are often regarded as savage and dangerous, with an inclination
      toward killing and eating anyone that they find. Their name comes from the
      hunting style where they stalk prey in trees above and then pounce onto
      them when close enough.
    </p>
    <h2>Stats</h2>
    <KinStatsTable species={Goblin} />
  </>
);

export const Dropbear: WikiContent = {
  id: WikiId.Dropbear,
  category: WikiCategory.Folk,
  title: "Drop Bear",
  blurb:
    "Drop Bears are a koala-like, goblin folk native to the forests of Downunda.",
  summary,
  main: content,
  infoBox: {
    imageSrc: getSpeciesImage("Goblin", "Dharrigal"),
    traits: [
      { key: "Species", value: Goblin.name },
      { key: "Ancestry", value: "Dharrigal" },
      { key: "Size", value: Goblin.size },
    ],
  },
};
