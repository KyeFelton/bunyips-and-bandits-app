import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    Mennan, also known as the Great Sand Desert, occupies the vast central expanse of the Continent. It is a region of sweeping dunes, rocky plateaus, and intermittent oases formed around ancient riverbeds.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        The climate is extremely arid, with scorching days and cold nights, and rainfall is infrequent. Despite these conditions, Mennan hosts a network of nomadic and oasis-based settlements connected by long-established trade routes. Caravans transport salt, spices, and metals across the desert, linking distant kingdoms.
      </p>
    </Body>
  </>
);

export const Mennan: WikiContent = {
  id: WikiId.Mennan,
  category: WikiCategory.Continents,
  title: "Mennan",
  blurb:
    "Mennan, also known as the Great Sand Desert, occupies the vast central expanse of the Continent.",
  summary,
  main: content,
};
