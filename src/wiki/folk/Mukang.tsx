import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Mukang are a monkey-like folk originating from the lower regions of Shan
    Guo and Rajakha. They share features with macaques, including expressive
    faces, agile limbs, and fur-covered bodies.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Their manner of dress varies by region but is generally simple and
        practical, suited to climbing and outdoor activity.
      </p>
      <p>
        Mukang settlements are typically built in elevated locations such as
        trees, cliff faces, or mountainsides. Their homes are makeshift in
        nature, constructed from wood, rope, and available natural materials.
        These structures often look wonky but somehow hold strong. They are
        often expanded upon over time as communities grow and shift.
      </p>
      <p>
        Mukang are often regarded as energetic and curious, with a natural
        inclination toward improvisation and experimentation. Their culture
        reflects a flexible approach to craftsmanship and problem-solving,
        favouring adaptation over rigid structure.
      </p>
    </Body>
  </>
);

export const Mukang: WikiContent = {
  id: WikiId.Mukang,
  category: WikiCategory.Folk,
  title: "Mukang",
  blurb:
    "The Mukang are a monkey-like folk originating from the lower regions of Shan Guo and Rajakha.",
  summary,
  main: content,
};
