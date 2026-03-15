import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";
import { Goblin } from "../../../../data/species/Goblin";
import { KinStatsTable } from "../../../../components/KinStatsTable";
import { getSpeciesImage } from "../../../../utils/speciesImages";

const summary = (
  <p>
    Hobs are a goblin folk with ancestral ties to Engloria. They are slightly
    shorter than humans, with a stocky build, coarse body hair, and facial
    features often likened to bats, including wide-set eyes, flat nose and
    pointed ears.
  </p>
);

const content = (
  <>
    <p>
      Their clothing is typically made from reused or worn materials, giving
      them a practical yet rough appearance.
    </p>
    <p>
      Hobs live alongside human communities in both rural and urban
      environments. They are commonly found working on farms, in villages, or as
      part of town populations, often inhabiting modest dwellings integrated
      with those of other folk. Their presence is widespread, though their
      communities are usually small in scale compared to human settlements.
    </p>
    <p>
      Hobs are often regarded as sociable and playful, with a reputation for
      light-heartedness and mischief. They are frequently seen engaging in
      communal activities and are noted for their adaptability across many
      environments.
    </p>
    <h2>Stats</h2>
    <KinStatsTable species={Goblin} />
  </>
);

export const Hob: WikiContent = {
  id: WikiId.Hob,
  category: WikiCategory.Folk,
  title: "Hob",
  blurb: "Hobs are a goblin folk with ancestral ties to Engloria.",
  summary,
  main: content,
  infoBox: {
    imageSrc: getSpeciesImage("Goblin", "Engloria"),
    traits: [
      { key: "Species", value: Goblin.name },
      { key: "Ancestry", value: "Engloria" },
      { key: "Size", value: Goblin.size },
    ],
  },
};
