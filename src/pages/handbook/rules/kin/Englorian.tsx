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

export const Englorian: WikiContent = {
  id: WikiId.Englorian,
  category: WikiCategory.Folk,
  title: "Englorian",
  blurb: "",
  summary,
  main: content,
  infoBox: {
    imageSrc: getSpeciesImage("Human", "Engloria"),
    traits: [
      { key: "Species", value: Human.name },
      { key: "Ancestry", value: "Engloria" },
      { key: "Size", value: Human.size },
    ],
  },
};
