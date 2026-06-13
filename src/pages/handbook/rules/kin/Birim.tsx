import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";
import { Reptilian } from "../../../../data/species/Reptilian";
import { KinStatsTable } from "../../../../components/KinStatsTable";
import { getSpeciesImage } from "../../../../utils/speciesImages";

const summary = (
  <p>
    The Birim are a reptilian folk originating from the deserts of Downunda.
    They are distinguished by their tall and slender physique, with features
    resembling goannas.
  </p>
);

const content = (
  <>
    <p>
      Their build allows them to move through narrow gaps and rocky terrain with
      ease. Their skin is typically dark in colour with yellow speckling, and
      they often display feather-like crests on their heads.
    </p>
    <p>
      Traditionally, Birim clothing consists of woven skirts, with the upper
      body left uncovered. They reside primarily in cave systems within desert
      regions, where the stone provides both shelter and protection from the
      heat. Birim generally avoid the daytime surface environment, emerging
      mainly at night to hunt, forage, or interact with neighbouring
      communities.
    </p>
    <p>
      The Birim are often regarded as reserved and contemplative, with a
      reputation for quiet observation and thoughtful counsel.
    </p>
    <h2>Stats</h2>
    <KinStatsTable species={Reptilian} />
  </>
);

export const Birim: WikiContent = {
  id: WikiId.Birim,
  category: WikiCategory.Folk,
  title: "Birim",
  blurb:
    "The Birim are a reptilian folk originating from the deserts of Downunda.",
  summary,
  main: content,
  infoBox: {
    imageSrc: getSpeciesImage(Reptilian.name, "Downunda"),
    traits: [
      { key: "Species", value: Reptilian.name },
      { key: "Ancestry", value: "Downunda" },
      { key: "Size", value: Reptilian.size },
    ],
  },
};
