import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Dandesheep are domesticated ovines known for their distinctive colourful,
    petal-like wool and leonine manes. Bred by the Englorians, they are valued
    for their bright wool, gentle temperament, and resilience in temperate
    climates.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Dandesheep are small-sized herd animals with a thick coat of soft wool
        that fans outward in layered tufts resembling flower petals. The colour
        of their wool changes based on their diet, ranging across the whole
        colour spectrum from red to blue. Mature rams and ewes both develop a
        fuller mane around the neck, giving them a lion-like appearance. Their
        faces are pale cream with dark, expressive eyes and short, rounded
        horns. They also produce a faint floral scent.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Dandesheep are found throughout the pastoral regions of Engloria,
        thriving in open meadows, rolling hills, and farmlands. They prefer mild
        climates with ample grazing pastures and are commonly kept in fenced
        fields near rural settlements.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        They are herbivorous grazers, feeding primarily on grasses, herbs, and
        cultivated fodder. Their wool quality and colour are known to change
        with their diet.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Dandesheep are docile, social herd animals that rely on group cohesion
        for safety. Rams occasionally butt heads during mating season, though
        serious injury is rare. They are adaptable and calm around humans,
        showing mild curiosity rather than fear.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        Englorians communities have bred Dandesheep for centuries, favouring
        individuals with vibrant wool and calm dispositions. Their fleece is
        used to produce fine textiles and dyes, while their meat and milk are
        secondary products.
      </p>
    </Body>
  </>
);

export const Dandesheep: WikiContent = {
  id: WikiId.Dandesheep,
  category: WikiCategory.Fauna,
  title: "Dandesheep",
  blurb:
    "Dandesheep are domesticated ovines known for their distinctive colourful, petal-like wool and leonine manes.",
  summary,
  main: content,
};
