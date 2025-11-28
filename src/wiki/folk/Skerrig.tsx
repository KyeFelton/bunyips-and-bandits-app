import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Skerrig are an avian folk native to the coasts and rivers of Engloria
    and Downunda. Their plumage varies widely, often resembling seabirds such as
    gulls, cormorants, and puffins.
  </p>
);

const content = (
  <>
    <Body>
      <p>Traditional dress includes sailor clothing suited for life near water.</p>
      <p>
        Skerrig settlements are found along shorelines, rivers, and islands.
        Their homes are commonly constructed from wood or stone, ranging from
        floating dwellings on calm waters to cliff-top houses overlooking the
        sea. Fishing, trading, and navigation are central to their way of life.
      </p>
      <p>
        Skerrig are often regarded as proud and outspoken, with strong maritime
        traditions and a collective identity shaped by seafaring culture.
        Storytelling, song, and competition are common features of their social
        gatherings.
      </p>
    </Body>
  </>
);

export const Skerrig: WikiContent = {
  id: WikiId.Skerrig,
  category: WikiCategory.Folk,
  title: "Skerrig",
  blurb:
    "The Skerrig are an avian folk native to the coasts and rivers of Engloria and Downunda.",
  summary,
  main: content,
};
