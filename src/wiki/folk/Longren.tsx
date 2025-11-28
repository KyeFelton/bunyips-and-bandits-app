import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Longren are a reptilian folk native to the mountainous regions of Shan
    Guo. Their appearance draws resemblance to Eastern dragons, featuring scaled
    skin, elongated faces, horns and flowing whisker-like tendrils.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        They are typically adorned in refined silk garments, often richly
        coloured and decorated with intricate patterns.
      </p>
      <p>
        Longren communities are established in high-altitude settlements built
        along mountain ridges and valleys. Their villages are characterised by
        ornate architecture, terraced designs, and extensive use of stone and
        wood. These locations are often chosen for their natural beauty and
        isolation, allowing the Longren to maintain longstanding cultural
        traditions.
      </p>
      <p>
        Longren are often regarded as dignified and skilled artisans, with a
        strong emphasis on craft, artistry, and scholarly practice. Their
        societies are structured around apprenticeship and mastery of trade,
        with cultural value placed on refinement and precision.
      </p>
    </Body>
  </>
);

export const Longren: WikiContent = {
  id: WikiId.Longren,
  category: WikiCategory.Folk,
  title: "Longren",
  blurb:
    "The Longren are a reptilian folk native to the mountainous regions of Shan Guo.",
  summary,
  main: content,
};
