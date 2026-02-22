import { Blockquote, Body, H3, WikiPage } from "../../../components/WikiPage";

const main = (
  <>
    <Body>
      <p>
        Bunyips and Bandits is a sandbox setting—there's no singular canon, no
        predetermined story, and no gatekeepers. The world begins in Downunda,
        rooted in Australian landscape and folklore, but it's designed to grow.
        New folk, fauna, places, and adventures can be created by anyone,
        drawing on other cultures and traditions from around the world. The
        handbook provides a shared framework to keep new creations consistent
        with the world as it already exists.
      </p>
      <p>
        The game is built around episodic play. Each adventure has a clear
        beginning and end. Characters can come and go, and new players can join
        without needing to catch up on years of history. That said, episodes
        don't have to stand alone—stories can be linked together into a longer,
        more complex narrative if that's what your group commits to.
      </p>
    </Body>
    <H3>The World's Voice</H3>
    <Body>
      <p>
        All lore in Bunyips and Bandits is written in an encyclopedic
        voice—objective, informative, and grounded. Think of a nature
        documentary or a field guide. Descriptions stick to observable facts and
        measurable details. The world speaks through concrete specifics, not
        emotional language or narrative flourishes.
      </p>
      <ul className="list-disc ml-4">
        <li>
          Present tense for all descriptions and current states. Past tense only
          for historical events.
        </li>
        <li>Third-person perspective throughout.</li>
        <li>Short paragraphs—two to four sentences each.</li>
        <li>
          Specific, concrete details over vague impressions. No flowery or
          poetic language.
        </li>
      </ul>
      <p>
        All text uses Australian English. "Colour" not "color." "Summarise" not
        "summarize." "Defence" not "defense."
      </p>
      <Blockquote>
        The Birim are a reptilian folk originating from the deserts of Downunda.
        They are distinguished by their tall and slender physique, with features
        resembling goannas. Their build allows them to move through narrow gaps
        and rocky terrain with ease.
      </Blockquote>
    </Body>
    <H3>Creating Folk</H3>
    <Body>
      <p>
        Folk are the playable and non-playable peoples of the world—distinct
        species with their own cultures, habits, and histories.
      </p>
      <ul className="list-disc ml-4">
        <li>
          <b>Opening paragraph.</b> Folk type, origin, key physical features.
        </li>
        <li>
          <b>Habitat and settlements.</b> Where they live, what their housing is
          like.
        </li>
        <li>
          <b>Culture and social structure.</b> How they're perceived, social
          traits, traditional clothing if applicable.
        </li>
      </ul>
    </Body>
    <H3>Creating Fauna</H3>
    <Body>
      <p>
        Fauna are the animals and monsters of Downunda—often dangerous, usually
        strange, and always specific. Use precise measurements rather than vague
        size comparisons.
      </p>
      <ul className="list-disc ml-4">
        <li>
          <b>Opening paragraph.</b> Species type, habitat, key threat or
          feature.
        </li>
        <li>
          <b>Description.</b> Physical appearance, size with measurements,
          notable features, sounds or smells.
        </li>
        <li>
          <b>Habit.</b> Habitat details, den or lair descriptions, active hours.
        </li>
        <li>
          <b>Diet.</b> What they eat, hunting or feeding methods.
        </li>
        <li>
          <b>Behaviour.</b> Social structure, hunting tactics, mating,
          territorial behaviour.
        </li>
        <li>
          <b>Domestication (if applicable).</b> Association with people.
        </li>
      </ul>
    </Body>
    <H3>Creating Towns</H3>
    <Body>
      <ul className="list-disc ml-4">
        <li>
          <b>Opening paragraph.</b> Location type, size or significance, key
          feature.
        </li>
        <li>
          <b>Demographics.</b> Who lives here and what they do.
        </li>
        <li>
          <b>Description (if detailed).</b> Physical features, notable
          buildings.
        </li>
        <li>
          <b>History.</b> How the town came to be.
        </li>
        <li>
          <b>Notable sites.</b> Places worth visiting or avoiding.
        </li>
      </ul>
    </Body>
    <H3>Creating Characters</H3>
    <Body>
      <ul className="list-disc ml-4">
        <li>
          <b>Opening paragraph.</b> Gender, ancestry, role or title,
          affiliation.
        </li>
        <li>
          <b>Description.</b> Physical appearance, clothing.
        </li>
        <li>
          <b>Personality.</b> Behaviour patterns, mannerisms, speech patterns.
        </li>
        <li>
          <b>History.</b> Background and key events (past tense is acceptable
          here).
        </li>
        <li>
          <b>Motivation.</b> Goals, desires, reasons for their actions.
        </li>
        <li>
          <b>Encounter (if relevant).</b> Game mechanics for player interaction.
        </li>
      </ul>
    </Body>
    <H3>Creating Factions</H3>
    <Body>
      <ul className="list-disc ml-4">
        <li>
          <b>Opening paragraph.</b> Group type, size, purpose, leader.
        </li>
        <li>
          <b>Additional sections as needed:</b> structure, beliefs, operations.
        </li>
      </ul>
    </Body>
  </>
);

export function Homebrew() {
  return <WikiPage title="Homebrew" main={main} />;
}
