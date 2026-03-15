import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";

const summary = (
  <p>
    The djugi is a flying, aquatic gastropod native to the wetlands of Downunda.
    It is a highly efficient predator that hunts both underwater and in the air
    using jets of corrosive acid to subdue prey.
  </p>
);

const content = (
  <>
    <h2>Description</h2>

    <p>
      Djugi are soft-bodied molluscs that can grow up to two metres in length,
      with flattened, fin-like appendages used for swimming and flight. Their
      skin exhibits iridescent shades of blue, silver, and white, aiding in
      camouflage against water and sky. The creature's underbelly contains
      specialized glands that produce a potent acid, which can be ejected in
      narrow streams up to several metres.
    </p>

    <h2>Habit</h2>

    <p>
      Djugi inhabit freshwater wetlands, marshes, and slow-moving rivers
      throughout Downunda. During the dry season, they burrow into the mud or
      remain in deeper waters until rainfall replenishes their habitat.
    </p>

    <h2>Diet</h2>

    <p>
      Djugi are carnivorous, preying on fish, amphibians, and small mammals.
      They use their acidic spray to kill or paralyse prey before consuming it.
      Larger individuals are known to attack creatures close to their own size,
      including humans, using both acid and constrictive grasping motions of
      their fins to subdue them.
    </p>

    <h2>Behaviour</h2>

    <p>
      Djugi are solitary hunters and highly territorial toward others of their
      kind. They rely on ambush tactics, emerging silently from the water to
      attack unsuspecting prey near the surface. Their acid also serves as a
      defensive for deterring predators. Reproduction occurs during the wet
      season, when females deposit gelatinous egg clusters among reeds or
      floating debris. The young hatch fully aquatic before developing the
      ability to fly after two weeks.
    </p>
  </>
);

export const Djugi: WikiContent = {
  id: WikiId.Djugi,
  category: WikiCategory.Fauna,
  title: "Djugi",
  blurb:
    "The djugi is a flying, aquatic gastropod native to the wetlands of Downunda.",
  summary,
  main: content,
};
