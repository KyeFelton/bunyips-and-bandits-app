import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Falqar are an avian folk native to the desert regions surrounding the
    great sands of Mennan. Their feathers range in shades of brown, gold, and
    white, and have an appearance similar to falcons and eagles.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Traditional clothing consists of light, flowing robes and veils that
        protect against heat and sand.
      </p>
      <p>
        Falqar communities are nomadic, travelling in small groups that migrate
        across the desert with trunkirds that carry their supplies. Their camps
        are temporary and easily assembled, using tents made of woven fibres and
        animal hides. Trade and resource gathering are vital aspects of their
        journeys, as they maintain contact with distant oasis settlements and
        caravan routes.
      </p>
      <p>
        Falqar are often regarded as vigilant and independent, guided by a deep
        respect for freedom of movement and the open sky. They maintain oral
        traditions that preserve history through song and poetry, with
        leadership often determined by experience and wisdom rather than
        inheritance.
      </p>
    </Body>
  </>
);

export const Falqar: WikiContent = {
  id: WikiId.Falqar,
  category: WikiCategory.Folk,
  title: "Falqar",
  blurb:
    "The Falqar are an avian folk native to the desert regions surrounding the great sands of Mennan.",
  summary,
  main: content,
};
