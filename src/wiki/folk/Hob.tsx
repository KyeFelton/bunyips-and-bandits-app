import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    Hobs are a goblin folk with ancestral ties to Engloria. They are slightly
    shorter than humans, with a stocky build, coarse body hair, and facial
    features often likened to bats, including wide-set eyes, ugly, flat nose and
    pointed ears.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Their clothing is typically made from reused or worn materials, giving
        them a practical yet rough appearance.
      </p>
      <p>
        Hobs live alongside human communities in both rural and urban
        environments. They are commonly found working on farms, in villages, or
        as part of town populations, often inhabiting modest dwellings
        integrated with those of other folk. Their presence is widespread,
        though their communities are usually small in scale compared to human
        settlements.
      </p>
      <p>
        Hobs are often regarded as sociable and playful, with a reputation for
        light-heartedness and mischief. They are frequently seen engaging in
        communal activities and are noted for their adaptability across many
        environments.
      </p>
    </Body>
  </>
);

export const Hob: WikiContent = {
  id: WikiId.Hob,
  category: WikiCategory.Folk,
  title: "Hob",
  blurb: "Hobs are a goblin folk with ancestral ties to Engloria.",
  summary,
  main: content,
};
