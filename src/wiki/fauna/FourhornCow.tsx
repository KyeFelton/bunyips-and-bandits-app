import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The fourhorn cow is a hardy breed of cattle distinguished by its four facial
    horns. Domesticated by the Englorians, it serves as a primary source of
    milk, meat, and labour, particularly valued for its endurance and strength.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Fourhorn cattle are large, muscular bovines with a pronounced hump over
        the shoulders, long tail, mane along their neck, and four symmetrical
        horns on their head—two curving upward and two projecting outward. Their
        coats range from deep brown to pale tan, often with black or white
        markings covering the face and spotted along the neck.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        They are raised across the lowlands and plains of Engloria, often in
        mixed grazing herds with sheep. They prefer open grasslands and river
        valleys where water and forage are abundant. In the wild, feral
        populations can survive in scrubland regions.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Fourhorn cows are grazing herbivores, subsisting on grass, hay, and
        cultivated grains. They are efficient foragers and can digest coarse
        vegetation unsuitable for other livestock, making them ideal for
        marginal farmland.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        These cattle are calm but protective of their young and herdmates. Males
        are territorial during breeding seasons and engage in horn-locking
        contests to establish dominance. They are strong, steady animals with
        reliable temperaments. Their endurance makes them well suited to both
        agriculture and transport.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        Englorians have bred fourhorn cattle for versatility and strength. They
        are used for milk and meat production, as draught animals, and
        occasionally for ceremonial purposes.
      </p>
    </Body>
  </>
);

export const FourhornCow: WikiContent = {
  id: WikiId.FourhornCow,
  category: WikiCategory.Fauna,
  title: "Fourhorn Cow",
  blurb:
    "The fourhorn cow is a hardy breed of cattle distinguished by its four facial horns.",
  summary,
  main: content,
};
