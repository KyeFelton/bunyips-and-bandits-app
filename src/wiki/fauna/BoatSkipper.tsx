import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The boat skipper is a large, amphibious fish native to coastal and estuarine
    environments across Downunda. It is capable of surviving extended periods on
    land and is recognised for its unusual locomotion using pectoral fins as
    limbs. Boat skippers are aggressive, opportunistic predators known to enter
    boats, shorelines, and even settlements in search of prey.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Boat skippers reach lengths of up to two metres and possess muscular,
        elongated bodies covered in thick, slimy scales that prevent
        dehydration. Their pectoral fins are broad and jointed, allowing them to
        crawl and leap across land. They have large, protruding eyes positioned
        high on the head and a wide mouth lined with small, sharp teeth. Their
        skin emits a faint briny odour.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Boat skippers inhabit coastal shallows, mangroves, and river mouths,
        often venturing onto mudflats or sandbanks during low tide. They prefer
        warm, humid climates and are capable of breathing through both gills and
        modified skin membranes.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        They are carnivorous, preying on smaller fish, crustaceans, seabirds,
        and land-dwelling animals that approach the shoreline, including humans.
        Their hunting behaviour includes ambushing prey from the water's edge
        and using powerful leaps to seize victims.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Boat skippers are solitary and territorial, often returning to the same
        hunting grounds. They are known to climb onto docks and boats,
        scavenging food or attacking small animals and fishermen. They can
        remain on land for several hours before returning to water. During dry
        seasons, they migrate along coastlines to wetter regions, and in the wet
        seasons they breed in shallow estuaries. Males prepare shallow
        depressions in the mud where females deposit eggs. The male guards the
        nest aggressively until the eggs hatch. Juveniles are semi-aquatic from
        birth, remaining close to the nest until large enough to venture into
        open water.
      </p>
    </Body>
  </>
);

export const BoatSkipper: WikiContent = {
  id: WikiId.BoatSkipper,
  category: WikiCategory.Fauna,
  title: "Boat Skipper",
  blurb:
    "The boat skipper is a large, amphibious fish native to coastal and estuarine environments across Downunda.",
  summary,
  main: content,
};
