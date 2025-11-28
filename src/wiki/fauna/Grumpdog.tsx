import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Grumpdogs are sturdy, broad-shouldered canines popular among Englorians.
    Recognised for their squat build, perpetually scowling features, and ability
    to change their skin, they are both loyal companions and dependable guards.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Grumpdogs are medium-sized, muscular dogs with relatively short legs,
        broad chests, and a wrinkled face that gives them a naturally irritable
        expression. Their coat is short and coarse, typically ranging from grey
        to brindle, with a leathery hide beneath. When threatened, they can
        undergo a rapid physiological change that causes their skin to harden
        into large keratinous scales, forming armour over their body.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Grumpdogs are primarily domesticated animals found in urban and rural
        areas across Engloria.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        They are omnivorous scavengers, feeding on meat, grains, and domestic
        scraps. Their sturdy digestion allows them to thrive on a wide variety
        of foods, making them easy to maintain in settlements or aboard long
        journeys.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Despite their dour appearance, Grumpdogs are loyal, courageous, and
        highly protective of their handlers. They are territorial and respond
        aggressively to perceived threats but are otherwise calm and steady. The
        hardening of their skin occurs as a defensive reflex. They are poor
        runners but exceptionally strong for their size, making them suited for
        guarding, hauling, and patrol duties.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        Englorians have long bred Grumpdogs as companion animals, guards, and
        symbols of steadfastness. They are used by tradesmen, soldiers, and
        farmers alike. Their durability and dependable temperament have made
        them a fixture in both urban homes and military encampments, often
        depicted as emblems of loyalty and grit.
      </p>
    </Body>
  </>
);

export const Grumpdog: WikiContent = {
  id: WikiId.Grumpdog,
  category: WikiCategory.Fauna,
  title: "Grumpdog",
  blurb:
    "Grumpdogs are sturdy, broad-shouldered canines popular among Englorians.",
  summary,
  main: content,
};
