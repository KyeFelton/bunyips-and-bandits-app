import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Wattalang are a floret folk native to the dry woodlands of Downunda.
    Their appearance reflects the characteristics of the wattle flower,
    featuring soft yellow blossoms and bark-like skin.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        They are generally slender in build, and their clothing is minimal,
        typically consisting of bark or woven plant fibres.
      </p>
      <p>
        Wattalang communities inhabit forested regions where vegetation is
        abundant. Their homes are shaped from living plant matter, manipulated
        through natural growth and binding. Settlements often blend into the
        surrounding landscape, forming interconnected clusters of branches and
        flowering trees.
      </p>
      <p>
        Wattalang are often regarded as peaceful and attentive caretakers of
        their environment. Their culture places emphasis on ecological balance,
        renewal, and cooperation with other forest-dwelling folk.
      </p>
    </Body>
  </>
);

export const Wattalang: WikiContent = {
  id: WikiId.Wattalang,
  category: WikiCategory.Folk,
  title: "Wattalang",
  blurb:
    "The Wattalang are a floret folk native to the dry woodlands of Downunda.",
  summary,
  main: content,
};
