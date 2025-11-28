import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Yaksha are sprites native to Rajakha. They are small in stature and
    characterised by their turquoise-hued skin, muscular features, pointed
    fangs, and piercing eyes.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Many adorn themselves with jewellery, trinkets, and intricate fabrics,
        displaying a visible appreciation for ornamentation. Their clothing is
        often richly coloured and made from fine materials suited to warm, humid
        climates.
      </p>
      <p>
        Yaksha communities are commonly situated near riverbanks, jungles, or
        beneath temple foundations. They construct subterranean dwellings
        reinforced with carved stone and decorated with gold leaf and inlaid
        metalwork. These underground homes serve both as living spaces and as
        vaults for their collections of precious items. Mining, trade, and
        craftsmanship in metal are prominent aspects of their livelihood.
      </p>
      <p>
        Yaksha are often regarded as sociable and material-minded, taking pride
        in the accumulation and preservation of beautiful objects. Their culture
        emphasises generosity and exchange, with wealth serving as a symbol of
        both status and devotion.
      </p>
    </Body>
  </>
);

export const Yaksha: WikiContent = {
  id: WikiId.Yaksha,
  category: WikiCategory.Folk,
  title: "Yaksha",
  blurb: "The Yaksha are sprites native to Rajakha.",
  summary,
  main: content,
};
