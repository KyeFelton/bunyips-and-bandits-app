import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, H3, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Mennanese, commonly referred to as the Sand Nomads, are the peoples
    native to the Great Sand Desert of Mennan. They have adapted to one of the
    harshest environments on the Continent, developing a culture deeply tied to
    mobility, trade, and survival in arid conditions. Mennanese society is
    defined by its nomadic traditions, dependence on oases, and the use of
    trunkirds to traverse the desert.
  </p>
);

const content = (
  <>
    <H2>Demographics</H2>
    <Body>
      <p>
        The majority of Mennanese are falqar, but humans and yaksha can be found
        within trading outposts or permanent oasis towns, though they form a
        minority. Falqar communities are typically nomadic, travelling in family
        bands or small caravans that move seasonally between oases and trade
        hubs.
      </p>
      <p>
        Population density is low, with most groups numbering only a few dozen
        individuals. Extended families form the core social unit, and leadership
        is generally based on experience, wisdom, and the ability to ensure the
        group's survival.
      </p>
    </Body>

    <H2>Language</H2>
    <Body>
      <p>
        Whilst most falqar caravans speak their own languages of Squawk, the
        Mennanese language is spoken throughout the Great Sand Desert. Trade and
        diplomacy are often conducted in a simplified dialect understood by most
        desert travellers.
      </p>
    </Body>

    <H2>History</H2>
    <Body>
      <p>
        The Mennanese are chiefly nomadic. For most of their history, Mennanese
        society has been decentralised, organised into clans and caravans.
      </p>
      <p>
        Around a century ago, the region briefly unified under the Dynasty of
        the Sun Emperor, a Trunkird ruler said to possess extraordinary sorcery.
        The dynasty established several fortified oasis cities and a network of
        trade routes that brought wealth to the desert. Following the Emperor's
        death, his heirs fought over succession, leading to the fragmentation of
        the realm and the return to traditional nomadic structures. The ruins of
        these early desert cities remain as pilgrimage and trading sites.
      </p>
    </Body>

    <H2>Legends</H2>

    <H3>Creation</H3>
    <Body>
      <p>
        In the beginning, all that existed were two cosmic beings; the Void and
        the Creator. In some recounts they are believed to be a romantic couple,
        and are referred as the Father and Mother respectively. Other stories
        state they are simply good friends or siblings. Regardless, the stories
        agree that the two loved each other.
      </p>
      <p>
        One day, the Creator got bored, so they decided to create a world for
        entertainment. They first created the lands, the seas and skies of the
        world. Next the Creator formed the first creatures known as the Avatars
        to help uphold order and take care of the new world. Finally, the
        Creator made the animals and plants of the world.
      </p>
    </Body>

    <H3>War with Azmiorth</H3>
    <Body>
      <p>
        At first the world was a peaceful place held together by the Avatars.
        However, the harmony ceased when the avatar Azmiorth grew weary of his
        duties, jealous of the Creator and wanted to create a world of his own.
        Eventually he tricked and murdered the Creator. He consumed their cosmic
        energy, granting him the ability to create creatures of his own to serve
        him. These creatures came to be known as demons, with Azmiorth being the
        Demon King.
      </p>
      <p>
        Azmiorth's thirst for blood continued as he captured, killed and
        consumed more of his siblings to build his empire. In his rampage he
        destroyed the sun, casting the world into a shadow. When the Void became
        aware of the treachery, they along with the other Avatars fought a
        cataclysmic war to defeat Azmiorth and his army. They prevailed and
        Azmiorth was defeated. The Void then created the Eternal Prison, an
        ethereal plane of nothingness, and imprisoned Azmiorth there.
      </p>
      <p>
        To repopulate the world without causing another catastrophe, the Void
        granted the remaining Avatars the power to create life and bring
        balance. The Avatars then populated the world with new life to help
        restore the world from the destruction of the war.
      </p>
      <p>
        Despite the defeat of Azmiorth, many of his demon servants escaped. They
        lurk in the shadows, waiting for the moment when the world turns to
        darkness and their leader returns.
      </p>
    </Body>

    <H2>Traditions and beliefs</H2>

    <H3>Avatar of the Sky</H3>
    <Body>
      <p>
        Aqara, the Avatar of the Sky, who takes the form of a giant eagle, is
        believed to be the protector of Mennan. The Mennanese believe Aqara
        watches from above, guiding caravans and shielding the faithful from
        sandstorms and demons. At sunrise and sunset, travellers offer short
        prayers to Aqara for safe passage.
      </p>
    </Body>

    <H3>Trunkirds</H3>
    <Body>
      <p>
        Trunkirds are treated with great respect among the Mennanese, often
        treated as an equal. It is illegal to harm or eat trunkirds, and they
        are given food and water before all other domestic animals.
      </p>
    </Body>

    <H2>Clothing</H2>
    <Body>
      <p>
        Mennanese clothing is designed for practicality in extreme desert
        conditions. Garments are loose-fitting and layered to allow airflow
        while protecting against sun and sand. Light, breathable fabrics such as
        linen and woven fibres are commonly used.
      </p>
    </Body>

    <H2>Architecture</H2>
    <Body>
      <p>
        Permanent structures are rare outside major oases. Temporary camps
        consist of tents made from woven cloth and animal hides, supported by
        wooden or bone frames. These are easily assembled and dismantled to
        accommodate nomadic travel.
      </p>
      <p>
        Oasis settlements and caravanserais feature low, rectangular buildings
        constructed from sun-dried bricks or carved stone. Thick walls and
        narrow windows help regulate interior temperature, and flat roofs are
        used for sleeping during cool nights. Public wells and shaded courtyards
        serve as communal gathering points.
      </p>
      <p>
        Larger cities, particularly those dating to the era of the Sun Emperor,
        display grand arches, domed roofs, and geometric decoration. These
        architectural remnants demonstrate the influence of past dynastic rule
        and stand as monuments amid the desert expanse.
      </p>
    </Body>

    <H2>Agriculture and Domestication</H2>
    <Body>
      <p>
        Agriculture in Mennan is limited to oases and irrigated valleys. Dates,
        figs, and hardy grains such as millet and barley are cultivated where
        water allows. Small garden plots are maintained communally, often shaded
        by palms to reduce evaporation.
      </p>
      <p>
        Trunkirds serve as the principal beasts of burden, used for
        transportation, hauling, and carrying supplies across long distances.
        They are also bred for eggs, which form a significant portion of the
        Mennanese diet.
      </p>
    </Body>
  </>
);

export const Mennanese: WikiContent = {
  id: WikiId.Mennanese,
  category: WikiCategory.Cultures,
  title: "Mennanese",
  blurb:
    "The Mennanese, commonly referred to as the Sand Nomads, are the peoples native to the Great Sand Desert of Mennan.",
  summary,
  main: content,
};
