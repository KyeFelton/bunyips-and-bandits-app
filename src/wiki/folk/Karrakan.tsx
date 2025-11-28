import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Karrakan are an avian folk with ancestral ties to Downunda. Their
    feather colours vary widely, with some resembling pink galahs,
    sulphur-crested cockatoos, or black cockatoos.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Karrakan communities are largely nomadic, moving frequently from place
        to place. They construct temporary shelters using natural materials such
        as branches and leaves, which are dismantled when they continue their
        travels. This lifestyle allows them to adapt to a variety of
        environments across the continent.
      </p>
      <p>
        Karrakan are often regarded as talkative and expressive, with strong
        traditions of oral storytelling and exchange of knowledge during their
        travels. Their culture emphasises movement, communication, and
        interaction with many different communities.
      </p>
    </Body>
  </>
);

export const Karrakan: WikiContent = {
  id: WikiId.Karrakan,
  category: WikiCategory.Folk,
  title: "Karrakan",
  blurb: "The Karrakan are an avian folk with ancestral ties to Downunda.",
  summary,
  main: content,
};
