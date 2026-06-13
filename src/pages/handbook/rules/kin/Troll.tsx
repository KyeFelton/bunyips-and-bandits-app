import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";
import { KinStatsTable } from "../../../../components/KinStatsTable";
import { AllKin } from "../../../../data/kin";

const kin = AllKin.Troll;

const summary = (
  <p>
    Trolls are a giant folk native to the swamps and mountains of Engloria. They
    are large humanoids with broad noses, heavy brows, mossy hair, and enormous
    hands and feet.
  </p>
);

const content = (
  <>
    <p>
      Moss and lichen often grow within their matted hair that covers their
      body. Their posture is typically hunched, contributing to their imposing
      appearance. Traditional clothing consists of rough, worn garments made
      from hides or scavenged fabrics.
    </p>
    <p>
      Troll dwellings are usually located in damp, secluded areas such as
      moss-covered caves or subterranean dens. They prefer regions that provide
      natural shelter and access to water sources. Some groups migrate
      seasonally, while others maintain permanent lairs in mountainous or
      forested regions.
    </p>
    <p>
      Trolls are known to be cunning, dangerous, and to sometimes eat other
      people. Their societies are loosely organised, with individuals or small
      family groups maintaining independent territories.
    </p>
    <h2>Stats</h2>
    <KinStatsTable kin={kin} />
  </>
);

export const Troll: WikiContent = {
  id: WikiId.Troll,
  category: WikiCategory.Folk,
  title: "Troll",
  blurb:
    "Trolls are a giant folk native to the swamps and mountains of Engloria.",
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
