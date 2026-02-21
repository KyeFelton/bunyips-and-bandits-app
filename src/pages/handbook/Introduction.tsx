import { Body, Callout, H3, WikiPage } from "../../components/WikiPage";
import sleepingWombatInnImage from "../../images/handbook/sleeping wombat inn.png";

const main = (
  <>
    <Body>
      <p>
        G'day, adventurer! Bunyips and Bandits is a tabletop role-playing game
        set in a fantasy world inspired by the landscapes, creatures, and
        legends of Australia. Whether you're trekking through the Outback,
        navigating the waterways of a crocodile-infested billabong, or trading
        stories at a smoky bush pub, adventure is never far away.
      </p>
      <img
        src={sleepingWombatInnImage}
        alt={"sleeping wombat inn"}
        className="md:w-[50%] md:float-right px-6 m-0"
      />
      <p>
        This is a game of cooperative storytelling, where you and your friends
        take on the roles of unique characters, facing challenges set by the
        Games Master (GM)—the one running the world, narrating the scenes, and
        keeping the story moving.
      </p>
      <p>
        As you explore, you'll meet strange and wonderful creatures, stumble
        into unexpected dangers, and have to think on your feet to survive.
        Your choices shape the story, and the dice determine whether things go
        to plan or take a turn for the worse.
      </p>
      <Callout variant="warning">
        Bunyips and Bandits draws inspiration from real Australian history,
        culture and landscape. It is not by any means a fair representation of
        Australia, past or present. Australia is a place with a long, deep, and
        ongoing history. For many thousands of years it has been inhabited by
        Aboriginal and Torres Strait Islander peoples. Their cultures are not
        singular, but instead a network of over two hundred nations, each with
        their own language, laws, and stories. Their land was wrongfully seized
        by European invaders, and with it, lives, culture and language have
        been lost. The weight of these tragedies is still felt by Aboriginal
        and Torres Strait Islander peoples today.
      </Callout>
    </Body>
    <H3>Core Principles</H3>
    <Body>
      <p>
        <b>Curiosity, creativity, and courage.</b> The game rewards players who
        ask questions, try unusual approaches, and take risks. There's no rule
        for every situation—if you can describe it, the GM will find a way to
        resolve it.
      </p>
      <p>
        <b>Play, not paperwork.</b> The companion app handles calculations
        automatically so you can focus on your character, not the numbers.
        Health, stats, and actions are all tracked for you.
      </p>
      <p>
        <b>Rulings over rules.</b> The handbook explains intent, not every
        possible outcome. When a situation isn't covered, the GM makes a call
        and play continues. This is a feature, not a flaw.
      </p>
      <p>
        <b>Anyone can try anything.</b> Skill levels show how reliably you
        succeed under pressure—they don't restrict what you're allowed to
        attempt. A low skill means failure is more likely, not that the attempt
        is forbidden.
      </p>
      <p>
        <b>Combat as war, not sport.</b> Encounters are not balanced. Some foes
        are trivial; others will kill the party outright. The right response to
        an impossible fight is often retreat, preparation, or deception—not a
        frontal assault.
      </p>
    </Body>
    <H3>Is this game for you?</H3>
    <Body>
      <p>This game is a good fit if you're looking for:</p>
      <ul className="list-disc ml-4">
        <li>
          <b>A rules-light experience.</b> The game uses minimal rules and
          expects the GM to make calls. You won't find a rule for every edge
          case—just clear intent and the expectation that the table will sort
          it out.
        </li>
        <li>
          <b>A unique setting.</b> Downunda is not a reskinned medieval Europe.
          It's a world rooted in Australian folklore, with creatures,
          landscapes, and stories unlike anything in a typical fantasy game.
        </li>
        <li>
          <b>Digital play.</b> The companion app manages character stats and
          provides an interactive rules reference, reducing friction at the
          table. You can focus on the story, not the spreadsheet.
        </li>
      </ul>
      <p>This game is probably not the right fit if you're after:</p>
      <ul className="list-disc ml-4">
        <li>
          <b>Deep mechanical optimisation.</b> Balance is loose and precision
          is low. If you enjoy calculating damage per round or mastering complex
          mechanical systems, look elsewhere.
        </li>
        <li>
          <b>Strict pen-and-paper play.</b> Some mechanics assume digital
          support to reduce cognitive load. Without the app, other systems
          handle pen-and-paper play better.
        </li>
        <li>
          <b>Wacky or absurdist adventures.</b> Magic exists and is constrained
          by strict laws. The world leans toward believability. Consequences are
          real. The tone is warm and adventurous, not wacky.
        </li>
      </ul>
    </Body>
    <H3>What You'll Need</H3>
    <Body>
      <p>
        Your setup depends on your style. The companion app manages character
        sheets and provides an interactive rulebook—you don't need paper or a
        pencil if you don't want them. At minimum, you need a group of friends
        and a sense of adventure.
      </p>
      <p>
        If you prefer a tactile experience, you can play with paper, pens, and
        a polyhedral dice set: d4, d6, d8, d12, and d20. The GM may also want
        a board to track character positions during combat, though theatre of
        the mind works just as well.
      </p>
    </Body>
  </>
);

export function Introduction() {
  return <WikiPage title="Handbook" main={main} />;
}
