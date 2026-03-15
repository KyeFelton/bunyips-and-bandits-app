import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";
import { Delver } from "../../../../data/species/Delver";
import { KinStatsTable } from "../../../../components/KinStatsTable";
import { getSpeciesImage } from "../../../../utils/speciesImages";

const summary = (
  <p>
    Gnomes are delvers originating from the underground regions of Engloria.
    They are small in stature and are recognised by their sky-blue skin, white
    hair, and glowing yellow eyes.
  </p>
);

const content = (
  <>
    <p>
      They are distinguished for the gemstones they collect and pierce into
      their skin. Traditional attire consists of finely woven, hooded robes,
      often designed to be both durable and decorative.
    </p>
    <p>
      Gnome communities are primarily located in subterranean environments. Many
      live in refurbished mines, where extensive networks of tunnels have been
      adapted into permanent homes and workshops. These underground spaces are
      typically reinforced with stonework and lit with mineral or alchemical
      sources of illumination.
    </p>
    <p>
      Gnomes are often regarded as diligent and industrious, with a focus on
      craftsmanship, mining, and resource management. Their settlements place
      strong emphasis on collective labour and long-term stability.
    </p>
    <h2>Stats</h2>
    <KinStatsTable species={Delver} />
  </>
);

export const Gnome: WikiContent = {
  id: WikiId.Gnome,
  category: WikiCategory.Folk,
  title: "Gnome",
  blurb:
    "Gnomes are delvers originating from the underground regions of Engloria.",
  summary,
  main: content,
  infoBox: {
    imageSrc: getSpeciesImage("Delver", "Engloria"),
    traits: [
      { key: "Species", value: Delver.name },
      { key: "Ancestry", value: "Engloria" },
      { key: "Size", value: Delver.size },
    ],
  },
};
