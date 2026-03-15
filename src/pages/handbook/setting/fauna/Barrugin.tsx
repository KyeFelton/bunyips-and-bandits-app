import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";

const summary = (
  <p>
    The barrugin is a large, stocky monotreme native to the mountains and
    grasslands of Downunda. It is a distinctive grazer, notable for its sharp
    defensive spines and the regional variation in its fur and colouring.
    Despite its formidable appearance, the barrugin is generally peaceful and
    slow-moving, spending much of its time feeding or resting.
  </p>
);

const content = (
  <>
    <h2>Description</h2>

    <p>
      Barrugin possess broad, low-slung bodies supported by sturdy limbs tipped
      with long claws adapted for digging and defence. Their backs are lined
      with stiff spines that deter predators, and their short, blunt snouts end
      in leathery bills used for grazing. Most barrugin have thin, brown fur
      with yellow streaks, though populations in the Highlands exhibit thick
      white coats and translucent spines resembling icicles. Males can reach up
      to 1.5 metres at the shoulder and weigh close to one tonne, while females
      are slightly smaller.
    </p>

    <h2>Habit</h2>

    <p>
      Barrugin inhabit upland grasslands, open plateaus, and mountain slopes
      across Downunda. They are most active during the cooler hours of morning
      and evening. Highland variants are well-adapted to cold climates and often
      form small groups for warmth.
    </p>

    <h2>Diet</h2>

    <p>
      Barrugin are herbivorous grazers, feeding primarily on grasses, low
      shrubs, and hardy alpine vegetation. Their broad bills and grinding plates
      allow them to process tough plant fibres efficiently. They occasionally
      dig for roots or tubers during dry seasons.
    </p>

    <h2>Behaviour</h2>

    <p>
      Generally solitary or found in small family groups, barrugin are slow and
      deliberate in movement but capable of fierce defence when threatened. They
      hunch down to present their spines and lash out with their claws if
      cornered. Males are territorial during the breeding season and mark their
      range with scent glands near the shoulders. Females give birth to a single
      egg, which they incubate in a temporary pouch until the young is developed
      enough to walk independently.
    </p>
  </>
);

export const Barrugin: WikiContent = {
  id: WikiId.Barrugin,
  category: WikiCategory.Fauna,
  title: "Barrugin",
  blurb:
    "The barrugin is a large, stocky monotreme native to the mountains and grasslands of Downunda.",
  summary,
  main: content,
};
