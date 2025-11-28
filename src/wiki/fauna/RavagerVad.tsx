import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Ravager vads, or ravagers, are the principal combatants and defenders of the
    Swarm. They serve as living weapons, protecting hive queens and the inner
    chambers of the mud cities. Ravagers are heavily armoured and psychically
    attuned, acting as conduits for hive-wide psychic coordination during
    battle.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Ravager vads are large, heavily built arthropods covered in sharp
        spines. They possess four legs for locomotion, two powerful arms tipped
        with single curved claws, and a long segmented tail ending in a venomous
        barb. Their heads are circular and ringed by petal-like appendages
        surrounding a worm-like mouth filled with sharp teeth. The petals serve
        as sensory and psychic organs, constantly vibrating with hive
        transmissions. Ravagers have no visual organs and navigate entirely
        through psychic perception.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Ravagers are fiercely territorial and serve as the hive's primary
        defense. They remain dormant until commanded to act, then attack with
        speed and ferocity disproportionate to their size. Their barbed tails
        deliver a paralytic venom, and they use their claws to dismember prey or
        intruders. Ravagers also act as psychic amplifiers within the hive,
        transmitting Malvada's will to nearby vads.
      </p>
    </Body>
  </>
);

export const RavagerVad: WikiContent = {
  id: WikiId.RavagerVad,
  category: WikiCategory.Fauna,
  title: "Ravager Vad",
  blurb:
    "Ravager vads are the principal combatants and defenders of the Swarm.",
  summary,
  main: content,
};
