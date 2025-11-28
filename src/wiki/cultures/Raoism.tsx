import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, H3, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Raoism is a religious sect of the Englorian faith that is based on the life
    and teachings of Rao.
  </p>
);

const content = (
  <>
    <H2>Traditions and Beliefs</H2>

    <H3>New Messiah</H3>
    <Body>
      <p>
        Worshippers of the faith believe Rao to be the New Messiah whose coming
        was prophesied in ancient Englorian scripts. He saved the world from
        the Devourer and continues to protect the civilisations of the West
        from the Swarm in the East. He is the personification of righteousness
        and a role model for all.
      </p>
      <p>
        Salvation Day is a date for commemorating Rao and showing gratitude for
        his victory over the Devourer.
      </p>
    </Body>

    <H3>Gladiator fights</H3>
    <Body>
      <p>
        Gladiators are combatants who engage in violent duels with other
        gladiators or beasts to entertain an audience. Some are commemorated
        champions who have trained for the special occasion, whilst others are
        mere criminals who have been forced to fight in the arena as
        retribution.
      </p>
      <p>
        Gladiator fights are held in recognition and appreciation of Rao. Rao
        himself will often spectate the events, and may even participate in some
        battles. All fights are deadly - a party can only win once all opponents
        are dead.
      </p>
    </Body>

    <H3>Forbidden magic</H3>
    <Body>
      <p>
        Learning magic outside of one's trade is forbidden by Raoists as it is
        deemed dangerous. One should place all faith and trust in Rao to defend
        and protect the kingdom, so one should not need to learn other forms of
        magic.
      </p>
    </Body>

    <H2>Clothing</H2>
    <Body>
      <p>
        Priests and priestesses wear electric blue robes with white embroidery.
        Lower status followers and the common folk are expected to wear grey
        when at a place of worship.
      </p>
    </Body>
  </>
);

export const Raoism: WikiContent = {
  id: WikiId.Raoism,
  category: WikiCategory.Cultures,
  title: "Raoism",
  blurb:
    "Raoism is a religious sect of the Englorian faith that is based on the life and teachings of Rao.",
  summary,
  main: content,
};
