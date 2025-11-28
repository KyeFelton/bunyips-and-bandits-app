import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Garkains are elusive, nocturnal creatures found throughout the remote
    rainforests of Downunda. Known for their stealth and ambush hunting style,
    they occupy a feared place in local folklore due to reports of their ability
    to suffocate people with their bodies.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Garkains are hunched humanoid figures with remarkable strength for size,
        standing at around 1.5m tall. Their facial features are flat, with wide
        nostrils and large eyes suited for low light. Loose folds of skin hang
        from their body, which they use to fly and can wrap around prey to
        restrict movement and airflow.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        They inhabit deep rainforest regions, particularly areas with thick
        canopy cover and permanent humidity.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Garkains are carnivorous, feeding primarily on arboreal mammals, large
        birds, reptiles and people. They rely on ambush tactics, flying from
        above to envelop prey.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Garkains are solitary and nocturnal. They hunt at night, and during the
        day they sleep under a pile of leaves. Their hunting method involves
        silent observation followed by rapid descent and constriction using
        their body folds.
      </p>
    </Body>
  </>
);

export const Garkain: WikiContent = {
  id: WikiId.Garkain,
  category: WikiCategory.Fauna,
  title: "Garkain",
  blurb:
    "Garkains are elusive, nocturnal creatures found throughout the remote rainforests of Downunda.",
  summary,
  main: content,
};
