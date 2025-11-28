import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Mudbuilders are a small, intelligent species of crab native to the mangrove
    estuaries of Downunda. Despite their diminutive size, they display complex
    social organisation and are notable for their psychic communication
    abilities. They construct intricate mud dwellings along tidal flats.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Mudbuilders measure approximately ten centimetres across and possess
        flat, oval-shaped bodies covered in a smooth, grey-brown carapace that
        blends with their environment. Their claws are proportionally large and
        adapted for shaping and compacting mud. Two forward-facing eyes protrude
        on short stalks, capable of independent movement. When communicating
        psychically, their eyes produce a dull bioluminescent, purple glow.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Mudbuilders inhabit the muddy banks and mangrove roots of estuaries
        throughout Downunda. They construct communal mounds made from layered
        mud and plant matter, which can reach up to a metre in height. These
        structures contain a network of tunnels and chambers that remain cool
        and moist even during low tide. Settlements often consist of dozens of
        mounds clustered together along tidal flats.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        They are omnivorous scavengers, feeding on algae, detritus, small
        invertebrates, and decaying organic material.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Mudbuilders are social and highly cooperative. They use their psychic
        abilities to coordinate construction and defend their colonies. This
        collective mental link allows them to share sensory impressions and
        emotions. While generally peaceful, they can repel intruders through
        disorienting psychic waves that induce confusion or nausea. Mudbuilders
        have been observed engaging in trade-like exchanges with nearby folk
        settlements, exchanging rare shells and minerals for food scraps.
      </p>
    </Body>
  </>
);

export const Mudbuilder: WikiContent = {
  id: WikiId.Mudbuilder,
  category: WikiCategory.Fauna,
  title: "Mudbuilder",
  blurb:
    "Mudbuilders are a small, intelligent species of crab native to the mangrove estuaries of Downunda.",
  summary,
  main: content,
};
