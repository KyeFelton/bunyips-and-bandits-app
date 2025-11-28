import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Joonyar are a sprite folk that live in the underground regions of
    Downunda. They are small humanoids with skin in shades of eucalyptus, brown
    hair, and glowing orange eyes that provide illumination in low-light
    environments.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Their clothing is crafted from shells and pearls bound together with
        roots and other natural fibres.
      </p>
      <p>
        Joonyar communities are established in subterranean networks beneath
        forests and coastal areas. Their dwellings are carved into soil and
        stone, reinforced with woven roots and lined with polished shells. Many
        tunnels connect to underground springs or openings near riverbanks,
        enabling trade and exchange with surface dwellers. Collections of
        natural items such as shells, pearls and minerals are commonly displayed
        within their homes.
      </p>
      <p>
        Joonyar are often regarded as gentle and inquisitive, with a nurturing
        disposition toward their environment and one another. They are known for
        assisting travellers who lose their way underground and for maintaining
        balanced ecosystems within the caves and tunnels they inhabit.
      </p>
    </Body>
  </>
);

export const Joonyar: WikiContent = {
  id: WikiId.Joonyar,
  category: WikiCategory.Folk,
  title: "Joonyar",
  blurb:
    "The Joonyar are a sprite folk that live in the underground regions of Downunda.",
  summary,
  main: content,
};
