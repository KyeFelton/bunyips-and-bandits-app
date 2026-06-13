import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";
import { Human } from "../../../../data/species/Human";
import { KinStatsTable } from "../../../../components/KinStatsTable";
import { getSpeciesImage } from "../../../../utils/speciesImages";

const summary = <p></p>;

const content = (
  <>
    <p></p>
    <h2>Stats</h2>
    <KinStatsTable species={Human} />
  </>
);

export const Dharrigal: WikiContent = {
  id: WikiId.Dharrigal,
  category: WikiCategory.Folk,
  title: "Dharrigal",
  blurb: "",
  summary,
  main: content,
  infoBox: {
    imageSrc: getSpeciesImage("Human", "Downunda"),
    traits: [
      { key: "Species", value: Human.name },
      { key: "Ancestry", value: "Downunda" },
      { key: "Size", value: Human.size },
    ],
  },
};
