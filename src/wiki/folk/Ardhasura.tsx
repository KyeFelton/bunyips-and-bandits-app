import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Ardhasura are a mutant folk originating from the subcontinent of Rajakha
    that mutated from humans many millennia ago. They are notable for their four
    arms, red-toned skin, and prominent curved fangs.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Many decorate their bodies with painted symbols or metallic ornaments,
        signifying lineage or spiritual practice. Traditional clothing consists
        of draped fabrics, sashes, and arm bands suited to the warm climate of
        their homeland.
      </p>
      <p>
        Ardhasura settlements are commonly built near rivers, plateaus, or
        sacred sites. Their architecture favours carved stone and monumental
        design, with open courtyards and tiered temples forming the centre of
        community life. Many communities maintain ancient traditions of
        stonecraft, sculpture, and ceremonial art, reflecting both practical and
        spiritual aspects of their culture.
      </p>
      <p>
        Ardhasura are often regarded as disciplined and honour-bound, placing
        value on strength, endurance, and wisdom gained through meditation and
        labour. Their societies are typically organised around extended families
        and spiritual orders, with a strong emphasis on duty and respect for
        ancestral guidance.
      </p>
    </Body>
  </>
);

export const Ardhasura: WikiContent = {
  id: WikiId.Ardhasura,
  category: WikiCategory.Folk,
  title: "Ardhasura",
  blurb:
    "The Ardhasura are a mutant folk originating from the subcontinent of Rajakha that mutated from humans many millennia ago.",
  summary,
  main: content,
};
