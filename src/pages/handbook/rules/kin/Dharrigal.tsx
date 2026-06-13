import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";
import { KinStatsTable } from "../../../../components/KinStatsTable";
import { AllKin } from "../../../../data/kin";

const kin = AllKin.Dharrigal;

const summary = <p></p>;

const content = (
  <>
    <p></p>
    <h2>Stats</h2>
    <KinStatsTable kin={kin} />
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
    imageSrc: kin.imageSrc,
    traits: [
      { key: "Species", value: kin.species.name },
      { key: "Ancestry", value: kin.ancestry.name },
      { key: "Size", value: kin.species.size },
    ],
  },
};
