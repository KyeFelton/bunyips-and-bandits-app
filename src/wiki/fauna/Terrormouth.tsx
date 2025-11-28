import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The terrormouth is a large, quadrupedal predatory bird native to the forests
    of Downunda. Known for its formidable strength and aggressive behaviour, it
    occupies a top position in its ecosystem and poses a significant danger to
    humanoid settlers and travellers.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Terrormouths are heavily built birds standing at 2m by the shoulder,
        supported by muscular, taloned legs adapted for both speed and power.
        Their bodies are covered in dense, grey, mottled feathers. Their head
        features strong breaks, wide mouths and large, forward-facing eyes
        suited for low-light hunting. A large expandable throat sac enables them
        to make thunderous calls.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Terrormouths inhabit dense forests and scrublands throughout Downunda.
        They establish wide territories centred around nests of compacted
        vegetation. Most are nocturnal, relying on stealth and camouflage to
        ambush prey. Their booming calls are often heard echoing through forests
        at night, marking territory and attracting mates.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Omnivorous, terrormouths feed on a wide range of food sources including
        small mammals, reptiles, carrion, fruits, and fungi. They are capable of
        swallowing large prey whole, using their elastic throat sac to
        accommodate the size. When hunting, they rely on bursts of speed and a
        crushing bite to incapacitate prey.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Terrormouths are solitary and territorial, showing aggressive behaviour
        toward intruders, including people. Their temperaments vary
        seasonally—more reclusive during dry periods but highly defensive during
        breeding seasons. They are devoted parents, with both sexes guarding and
        feeding their young. When threatened, terrormouths emit deep growls and
        puff their feathers to appear larger before lunging at perceived
        threats. Their combination of intelligence, strength, and adaptability
        has led to numerous local efforts to drive them away from settled areas.
      </p>
    </Body>
  </>
);

export const Terrormouth: WikiContent = {
  id: WikiId.Terrormouth,
  category: WikiCategory.Fauna,
  title: "Terrormouth",
  blurb:
    "The terrormouth is a large, quadrupedal predatory bird native to the forests of Downunda.",
  summary,
  main: content,
};
