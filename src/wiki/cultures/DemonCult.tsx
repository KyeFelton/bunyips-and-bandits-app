import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Demon Cult is a religious cult that branched from traditional Mennanese
    beliefs. Whilst Mennanese believe the Creator is holy and Azmiorth is the
    epitome of evil, Demon Cultists believe the reverse is true - Azmiorth is
    revered as a hero who liberated the world from the Creator's tyranny.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        The principal goal of Demon Cultists is to revive their fallen leader.
        With the return of Azmiorth, they can rid the world of evil and create a
        new utopia. Some believe Teacher is the trapped soul of Azmiorth and the
        Idol is the key to resurrecting their leader.
      </p>
    </Body>
  </>
);

export const DemonCult: WikiContent = {
  id: WikiId.DemonCult,
  category: WikiCategory.Cultures,
  title: "Demon Cult",
  blurb:
    "The Demon Cult is a religious cult that branched from traditional Mennanese beliefs.",
  summary,
  main: content,
};
