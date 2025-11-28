import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The bunyip is a large, amphibious predator native to the wetlands of
    Downunda. It is feared for its territorial aggression and its ability to
    ambush prey both in and out of water. Bunyips are known for their immense
    size variation, with some growing to enormous proportions, and their
    distinctive noxious breath, which they use to incapacitate victims before
    attack.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Bunyips are muscular, dog-like creatures with slick, water-resistant
        hides and long limbs suited to both swimming and walking on land. They
        possess pointed ears, broad snouts, and long sabre-like teeth that
        extend visibly from their jaws. The creatures emit a strong, putrid
        odour, particularly noticeable when they emerge from the water. Larger
        individuals have been documented to reach up to 4m at the shoulder and
        12m in length. Bunyips are also capable of exhaling a foul, toxic gas
        that weakens or disorients nearby prey.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Bunyips inhabit freshwater environments including billabongs, lakes,
        rivers, and swamps across Downunda. They construct lairs or resting
        hollows in submerged burrows, reed beds, or muddy banks. These creatures
        are rarely seen during daylight hours, preferring to remain underwater
        or concealed among vegetation.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Bunyips are carnivorous and opportunistic predators. They feed on
        aquatic and terrestrial animals, including fish, birds, livestock, and
        occasionally humanoids that stray too close to the water's edge. They
        are known to drag prey underwater to drown it before feeding.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Highly territorial and solitary, bunyips will attack almost any intruder
        within their domain. They are ambush predators, relying on patience and
        stealth to surprise prey from beneath the surface. When not hunting,
        they spend extended periods hibernating or resting underwater. Mating
        occurs during the wet season, when males emit deep, resonant bellows
        that carry across the water to attract females. The young are raised in
        secluded pools until capable of defending themselves. Bunyips have few
        natural predators due to their size and aggression.
      </p>
    </Body>
  </>
);

export const Bunyip: WikiContent = {
  id: WikiId.Bunyip,
  category: WikiCategory.Fauna,
  title: "Bunyip",
  blurb:
    "The bunyip is a large, amphibious predator native to the wetlands of Downunda.",
  summary,
  main: content,
};
