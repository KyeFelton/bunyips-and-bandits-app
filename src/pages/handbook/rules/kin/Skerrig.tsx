import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";
import { Avian } from "../../../../data/species/Avian";
import { KinStatsTable } from "../../../../components/KinStatsTable";
import { getSpeciesImage } from "../../../../utils/speciesImages";

const summary = (
  <p>
    The Skerrig are an avian folk native to the coasts and rivers of Engloria
    and Downunda. Their plumage varies widely, often resembling seabirds such as
    gulls, cormorants, and puffins.
  </p>
);

const content = (
  <>
    <p>
      Traditional dress includes sailor clothing suited for life near water.
    </p>
    <p>
      Skerrig settlements are found along shorelines, rivers, and islands. Their
      homes are commonly constructed from wood or stone, ranging from floating
      dwellings on calm waters to cliff-top houses overlooking the sea. Fishing,
      trading, and navigation are central to their way of life.
    </p>
    <p>
      Skerrig are often regarded as proud and outspoken, with strong maritime
      traditions and a collective identity shaped by seafaring culture.
      Storytelling, song, and competition are common features of their social
      gatherings.
    </p>
    <h2>Stats</h2>
    <KinStatsTable species={Avian} />
  </>
);

export const Skerrig: WikiContent = {
  id: WikiId.Skerrig,
  category: WikiCategory.Folk,
  title: "Skerrig",
  blurb:
    "The Skerrig are an avian folk native to the coasts and rivers of Engloria and Downunda.",
  summary,
  main: content,
  infoBox: {
    imageSrc: getSpeciesImage("Avian", "Engloria"),
    traits: [
      { key: "Species", value: Avian.name },
      { key: "Ancestry", value: "Engloria" },
      { key: "Size", value: Avian.size },
    ],
  },
};
