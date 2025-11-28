import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The trunkird is a large, four-legged, wingless bird native to the arid
    deserts of Mennan. It has been fully domesticated and is central to
    Mennanese civilisation, serving as a beast of burden, transport animal, and
    food source.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Trunkirds have broad bodies supported by four powerful, flat legs,
        granting them stability on shifting sands. Their plumage is coarse and
        sparse, coloured in shades of beige, ochre, and dark brown for desert
        camouflage. The most distinctive feature is their elongated, muscular
        trunk, extending from beneath the beak and capable of fine manipulation,
        including grasping tools, drawing water, and assisting in feeding.
        Adults typically stand around two metres at the shoulder, with males
        slightly larger and bearing darker plumage. Their large eyes and
        nictitating membranes protect against glare and sandstorms.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Wild trunkirds once roamed the open deserts and scrub plains of Mennan,
        but they now exist almost exclusively in domesticated or
        semi-domesticated herds. They are highly resilient to heat and drought,
        capable of travelling for days across arid terrain with minimal water.
        Trunkirds are most active during the cooler hours of morning and
        evening.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Omnivorous by nature, trunkirds feed primarily on hardy desert
        vegetation, roots, seeds, and small desert fauna. They use their trunks
        to uproot plants, collect fruit, and capture small animals. Their throat
        sacs can store both food and water, enabling them to survive long
        journeys between oases.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Trunkirds are social animals that live in herds, forming strong bonds
        with one another and with their handlers. They communicate through low
        rumbling calls and expressive trunk movements. When threatened, they use
        their size, talons, and trunk to deter predators. Breeding is seasonal,
        with females laying large eggs that are collected for consumption in
        most Mennanese settlements.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        Domesticated for centuries, trunkirds are vital to Mennanese transport
        and commerce. They are used to haul caravans, carry riders, and
        transport goods across the desert's vast expanses. Trunkird eggs are a
        staple food source, prized for their size and nutrient value. In rural
        communities, trunkirds also serve as a status symbol, with ornate
        harnesses and painted feathers used during festivals and processions.
      </p>
    </Body>
  </>
);

export const Trunkird: WikiContent = {
  id: WikiId.Trunkird,
  category: WikiCategory.Fauna,
  title: "Trunkird",
  blurb:
    "The trunkird is a large, four-legged, wingless bird native to the arid deserts of Mennan.",
  summary,
  main: content,
};
