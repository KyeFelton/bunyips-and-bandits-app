import { Callout, WikiPage } from "../../../components/WikiPage";
import sleepingWombatInnImage from "../../../images/handbook/sleeping wombat inn.png";

const main = (
  <>
    <p>
      G'day, adventurer! Bunyips and Bandits is a tabletop role-playing game set
      in a fantasy world inspired by the landscapes, creatures, and legends of
      Australia. Whether you're trekking through the Outback, navigating the
      waterways of a crocodile-infested billabong, or trading stories at a smoky
      bush pub, adventure is never far away.
    </p>
    <img
      src={sleepingWombatInnImage}
      alt={"sleeping wombat inn"}
      className="md:w-[50%] md:float-right px-6 m-0"
    />
    <p>
      This is a game of cooperative storytelling, where you and your friends
      take on the roles of unique characters, facing challenges set by the Games
      Master (GM)—the one running the world, narrating the scenes, and keeping
      the story moving.
    </p>
    <p>
      As you explore, you'll meet strange and wonderful creatures, stumble into
      unexpected dangers, and have to think on your feet to survive. Your
      choices shape the story, and the dice add some randomness to determine
      whether things go to plan or take a turn for the worse.
    </p>
    <Callout variant="warning">
      Bunyips and Bandits draws inspiration from real Australian history,
      culture and landscape. It is not by any means a fair representation of
      Australia, past or present. Australia is a place with a long, deep, and
      ongoing history. For many thousands of years it has been inhabited by
      Aboriginal and Torres Strait Islander peoples. Before the European
      invasion, there were over two hundred nations, each with their own
      language, laws, and stories. Their homes were wrongfully seized by British
      colonists, and with it, lives, culture and language have been lost. The
      weight of these tragedies is still felt by Aboriginal and Torres Strait
      Islander people today.
    </Callout>

    <h2>Core Principles</h2>
    <p>Curiosity, creativity, and courage is at the heart of this game.</p>
    <p>
      <b>Reduce cognitive load.</b> The rules are intended to be simple.
      Calculations and status tracking should be automated by this website where
      possible to reduce the mental strain on players and the GM.
    </p>
    <p>
      <b>Rulings over rules.</b> The rules serve as a framework to align players
      and make decisions. They do not cover every possible scenario and outcome.
      When a situation isn't covered, the GM makes a call and play continues.
    </p>
    <p>
      <b>Magic that feels real.</b> Magic offers potential but also has
      limitations. You can shoot lightning, shapeshift into a creature, or coax
      words from a dead man's lips. You can't conjure food from nothing, time
      travel, or reach into other dimensions. Magic has a cost, and is a skill
      that anyone can train.
    </p>
    <p>
      <b>If it's feasible, you can try it.</b> Skill levels show how reliably
      you succeed under pressure. They don't restrict what you're allowed to
      attempt. A low skill means failure is more likely, not that the attempt is
      forbidden.
    </p>
    <p>
      <b>Combat is not balanced.</b> Some foes are fragile, whilst others may
      demolish your party. Pick your fights well. Outright combat isn't your
      only option either. You can plead, retreate, ambush, outwit or deceive
      your enemies.
    </p>
    <p>
      <b>Open for all.</b> The game is intended to be accessible to everyone,
      always. The rules and setting of the game are free for use by anyone. New
      players are welcome and encouraged to build their own content.
    </p>

    <h2>What You'll Need</h2>
    <p>
      Your setup depends on your style. This website provides a character sheet,
      dice and the rulebook, so you need nothing else except a group of friends
      to play with. The GM may also want to organise a tabletop (physical or
      virtual) to play on and a note editor to manage NPCs.
    </p>
    <p>
      If you prefer a tactile experience, you can play with paper, pens, and a
      polyhedral dice set: four-sided (d4), six-sided (d6), eight-sided (d8),
      ten-sdided (d10) and twelve-sided (d12).
    </p>

    <h2>Is this game for you?</h2>
    <p>This game is a good fit if you're looking for:</p>
    <ul className="list-disc ml-4">
      <li>
        <b>A rules-light experience.</b> The game uses minimal rules and expects
        the GM to make calls. You won't find a rule for every edge case—just
        clear intent and the expectation that the table will sort it out.
      </li>
      <li>
        <b>An Australian themed setting.</b> From kangaroos to didgeridoos,
        sausage sangas to thongs, you'll be immersed to in a fantasy world
        inspired by Australia that feels distinct from your classical European
        or Asian settings.
      </li>
      <li>
        <b>Fantasy with a sense of realism.</b> The game is meant to be set in a
        more down-to-earth fantasy setting. Rules should make sense, magic
        should have limitations, and death should be a real threat.
      </li>
      <li>
        <b>Digital play.</b> The digital character sheet manages character stats
        and provides an interactive rules reference, reducing friction at the
        table.
      </li>
    </ul>
    <p>This game is probably not the right fit if you're after:</p>
    <ul className="list-disc ml-4">
      <li>
        <b>Deep mechanical optimisation.</b> Balance is loose and precision is
        low. If you enjoy calculating damage per round or mastering complex
        mechanical systems, look elsewhere.
      </li>
      <li>
        <b>Pen-and-paper play.</b> Some mechanics assume digital support to
        reduce cognitive load. Without the website, other systems handle
        pen-and-paper play better.
      </li>
      <li>
        <b>Wacky and absurdist adventures.</b> Magic exists but follows strict
        laws. The world leans toward believability rather than bizarre.
      </li>
    </ul>

    {/* Inspirations
      Add a heading 'Inspirations' to the Introduction. It should include:
      - Magic System: Avatar the Last Airbender, Full Metal Alchemist.
      - Game Rules: Savage Worlds (tiered dice), Call of Cthulhu (level progression, sanity tracking), OSR, Shadowdark and Knave (rules-light ethos, death, item tracking). Mother ship (hidden death) 
      - Commentaters: Ben Milton (Questing Beast), Deficient Master
      - Setting: Game of Thrones, God of War, Monster Hunter, Scavengers Reign. So many Australian inspirations...
 */}
  </>
);

export function Introduction() {
  return <WikiPage title="Introduction" main={main} />;
}
