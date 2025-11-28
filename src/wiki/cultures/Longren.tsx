import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Longren are known for their scholarly discipline, intricate
    craftsmanship, and strong moral code centred on harmony, order, and
    enlightenment. Their cities are governed by a head magister and an advisory
    council of scholars, whose duties include the preservation of law, art, and
    magical study.
  </p>
);

const content = (
  <>
    <H2>History</H2>
    <Body>
      <p>
        The Longren trace their origins to scattered mountain settlements. These
        early communities were primarily agricultural and self-sustaining, each
        governed by elders who maintained local customs and spiritual
        observances. Over time, trade and communication between the mountain
        enclaves increased, leading to the establishment of formal councils and
        the development of a shared written language. This cultural unification
        laid the foundation for the rise of Afae, which would later become the
        political and spiritual centre of Longren civilisation.
      </p>
      <p>
        Situated atop Mount Afae, the city's elevation symbolised divine
        proximity and purity of thought, aligning with Longren philosophy that
        physical ascension mirrored spiritual enlightenment. Under the direction
        of the head magister and the central council, Afae became a hub of
        education, innovation, and theological debate. Its academies attracted
        scholars from across the mountain ranges, fostering advances in alchemy,
        metallurgy, and magical theory. The city's influence extended across
        Shan Guo, and smaller mountain towns modelled their governance and
        institutions on Afae's example.
      </p>
      <p>
        Afae's prosperity was further consolidated through the standardisation
        of law and the creation of the Edicts of Harmony, a codified system that
        defined the ethical and civic responsibilities of Longren citizens.
        During this period, the Longren developed a complex bureaucracy to
        administer trade routes, resource collection, and temple maintenance.
        The city's temples became centres of both worship and study, with
        priests often doubling as mathematicians, healers, or philosophers. This
        integration of faith and intellect became a defining feature of Longren
        culture.
      </p>
      <p>
        The Afaen Cataclysm marked the end of this unified civilisation. The
        destruction of Afae resulted in the collapse of the central government
        and the loss of many key records, scholars, and artefacts. Surviving
        Longren communities retreated to isolated mountain cities, where local
        councils assumed governance in the absence of central authority. Trade
        routes deteriorated, and contact between cities became sporadic. Over
        time, distinct regional dialects, artistic styles, and interpretations
        of theology emerged, fragmenting what had once been a cohesive
        civilisation.
      </p>
      <p>
        In the centuries following the Cataclysm, attempts were made to
        re-establish unity among the surviving Longren cities, but each effort
        failed due to political rivalry and differing doctrines concerning the
        cause of Afae's fall. Some city-states adopted isolationist policies,
        focusing on self-preservation and scholarly purity, while others pursued
        more pragmatic or militarised approaches to survival. Today, Longren
        civilisation exists as a network of independent city-states that share a
        common ancestry and culture but operate autonomously. Afae remains a
        symbol of both the civilisation's former greatness and the dangers of
        unrestrained ambition.
      </p>
    </Body>

    <H2>Traditions and Beliefs</H2>
    <Body>
      <p>
        The Longren worship a pantheon of gods believed to govern the natural
        and spiritual order of the world. Towns often include various shrines,
        each dedicated to a different deity. Central to their theology is
        Xinshi, a divine messenger who mediates between mortals and gods.
        Xinshi's guidance is considered essential to interpreting divine will,
        though his messages are often cryptic or misleading. The Longren believe
        wisdom is seen not as obedience to the gods, but as understanding the
        hidden meaning behind their signs.
      </p>
      <p>
        Education and mastery of trade are central to Longren culture. Every
        citizen is expected to study a discipline—whether it be art, alchemy,
        philosophy, or combat—and advance through apprenticeships under
        established masters. Artistic expression is deeply spiritual, with each
        creation believed to channel divine essence from the gods.
      </p>
    </Body>
  </>
);

export const Longren: WikiContent = {
  id: WikiId.Longren,
  category: WikiCategory.Cultures,
  title: "Longren",
  blurb:
    "The Longren are known for their scholarly discipline, intricate craftsmanship, and strong moral code centred on harmony, order, and enlightenment.",
  summary,
  main: content,
};
