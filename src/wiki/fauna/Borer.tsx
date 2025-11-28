import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Borers are large, muscular skink-like reptiles adapted for digging through
    soil and stone. Renowned for their strength and endurance, they have been
    domesticated by the Joonyar, who use them as beasts of burden and transport
    within their subterranean settlements.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Borers are heavily built reptiles ranging from two to three metres in
        length, with thick, overlapping scales and compact bodies suited to
        tunnelling. Their forelimbs are exceptionally strong and tipped with
        large claws adapted for burrowing. They possess a broad, flattened head
        with small eyes protected by transparent lids. Their hide often carries
        a dusty or earthy scent due to constant contact with soil and rock.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Wild borers inhabit rocky hillsides, dry caves, and sub-surface burrows
        across arid and semi-arid regions. They prefer compacted soil and soft
        rock layers where they can construct complex tunnel networks for nesting
        and protection.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Borers are omnivorous, feeding primarily on roots, fungi, insects, and
        small subterranean animals. They are capable of surviving long periods
        with limited food or water, an adaptation to their underground habitat.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Borers are solitary and territorial in the wild, using scent markings
        and low-frequency vibrations to communicate. They are slow-moving above
        ground but display remarkable efficiency when digging. During mating
        seasons, males compete by displaying strength through rapid excavation
        displays and low rumbling calls. Their thick hides and claws serve as
        both tools and defence against predators.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        Trained borers are used to carve tunnels, haul materials, and carry
        riders through the subterranean passages. They are regarded as vital to
        Joonyar engineering and infrastructure.
      </p>
    </Body>
  </>
);

export const Borer: WikiContent = {
  id: WikiId.Borer,
  category: WikiCategory.Fauna,
  title: "Borer",
  blurb:
    "Borers are large, muscular skink-like reptiles adapted for digging through soil and stone.",
  summary,
  main: content,
};
