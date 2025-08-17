import { motion } from "framer-motion";
import { Page } from "../Wiki/Page";

const summary = (
  <>
    <p>
      G’day, adventurer! Welcome to Bunyips and Bandits, a tabletop role-playing
      game set in a world inspired by the landscapes, creatures, and legends of
      Australia. Whether you’re trekking through the Outback, navigating the
      waterways of a crocodile-infested billabong, or trading stories at a smoky
      bush pub, adventure is never far away.
    </p>
    <p>
      This is a game of cooperative storytelling, where you and your friends
      take on the roles of unique characters, facing challenges set by the Games
      Master (GM)—the one running the world, narrating the scenes, and keeping
      the story moving.
    </p>
    <p>
      As you explore, you’ll meet strange and wonderful creatures, stumble into
      unexpected dangers, and have to think on your feet to survive. Your
      choices shape the story, and the dice determine whether things go to plan
      or take a turn for the worse.
    </p>
  </>
);

const sections = [
  {
    title: "How the Game Works",
    content: (
      <>
        <p>
          Bunyips and Bandits is all about collaborative storytelling. Before
          you dive into adventure, you’ll create your own character with a
          unique background, skills, and motivations. They might be a cunning
          trickster, a brawny bushranger, or a sorcerer who accidentally sets
          their own pants on fire while trying to cast a spell.
        </p>
        <p>
          The GM is the one pulling the strings—setting up the world, playing
          non-player characters (NPCs), and ensuring the game flows smoothly (or
          chaotically, depending on the players). The GM also acts as the
          ultimate referee, deciding how events play out based on a combination
          of logic, game rules, and a little bit of storytelling flair. The core
          of the game boils down to this:
        </p>
        <ol className="list-decimal ml-4">
          <li>The GM describes a scene.</li>
          <li>You decide what your character does.</li>
          <li>
            Dice rolls determine whether you pull it off spectacularly, fail
            hilariously, or land somewhere in between.
          </li>
          <li>The story unfolds, shaped by your actions and decisions.</li>
        </ol>
        <p>
          The game is intended to be fast and flexible, designed to keep the
          action moving rather than bogging you down with numbers. The rules
          encourage creativity—if you want to try something ridiculous, the GM
          won’t stop you (although the outcome might not be favourable).
        </p>
        <p>
          This handbook provides a starting framework, but the most important
          rule is that everyone at the table enjoys themselves. If something
          doesn’t quite fit your playstyle, tweak it. The game is meant to be
          adaptable, just like the creatures that roam its world.
        </p>
      </>
    ),
  },
  {
    title: "What You’ll Need",
    content: (
      <>
        <p>
          Your game setup depends on your style. The Bunyips and Bandits App has
          been created to enhance and streamline the playing experience, but
          it's not required. If you prefer a more tactile experience, you can
          play with paper, pens and dice. The game uses polyhedral dice sets,
          including d4, d6, d8, d12, and d20. The GM may also want a board to
          track character positions in combat, but if you’re a fan of Theatre of
          the Mind, let your imagination do the work. At the end of the day, all
          you really need is a good group of friends and a sense of adventure.
        </p>
      </>
    ),
  },
  {
    title: "Characters",
    content: (
      <>
        <p>
          At the heart of Bunyips and Bandits are the characters you create and
          play. While the GM plays the role of everyone and everything else,
          players will be in control of one character—making their choices,
          speaking in their voice, and deciding how they handle the dangers (and
          opportunities) that come their way.
        </p>
      </>
    ),
    subSections: [
      {
        title: "Creating Your First Character",
        content: (
          <>
            <p>
              Before setting off on your first adventure, you’ll need to create
              a character. This involves a few simple steps:
            </p>
            <ol className="list-decimal ml-4">
              <li>
                <b>Choose a species</b>: You can play as one of many different
                creatures, each with their own strengths, weaknesses, and unique
                traits. Your species affects your base stats, including health,
                movement, senses, size, armour, and skills.
              </li>
              <li>
                <b>Describe your character</b>: Think about who they are beyond
                the numbers on the sheet. What’s their name? What do they look
                like? Where do they come from? Why have they taken to the
                adventuring life instead of settling down somewhere safe? The GM
                will work with you to weave your character into the world,
                ensuring they have a reason to be involved in the story.
              </li>
              <li>
                <b>Select a level</b>: Your character’s level denotes the amount
                of experience they have, ranked from 1-10. As your character
                levels up, they become more skilful and powerful.
              </li>
              <li>
                <b>Choose your paths</b>: Paths define a unique set of traits
                and actions that your character has acquired and mastered. At
                level 1, you can choose one path to start with. You’ll be able
                to progress this path or unlock new ones to develop your
                character’s abilities as you level up.
              </li>
              <li>
                <b>Upgrade your skills</b>: Every character has a set of skills
                that define their physical and mental abilities. At the start,
                you’ll have some default skills from your species, plus two
                skill upgrades to improve any abilities you like. After each
                level up to an odd number, you gain an additional two skill
                upgrades.
              </li>
              <li>
                <b>Enhance your health</b>: Every character has three health
                attributes - physique, morale, and stamina. After each level up
                to an even number, you gain two health points to distribute
                among these attributes as you see fit, increasing your
                survivability in different situations.
              </li>
              <li>
                <b>Create a unique trait</b>: Every adventurer has something
                special about them—something that sets them apart. A performer
                may be better at winning the crowd. An assassin may be skilled
                at blending into the shadows. A hunter may be better at tracking
                animals. This is where you and the GM get creative. Your unique
                trait is linked to your backstory and gives your character an
                advantage in certain situations.
              </li>
            </ol>
          </>
        ),
      },
      {
        title: "Species",
        content: (
          <>
            <p>
              Your species affects your character’s base stats and natural
              abilities. Some species are tougher, others are faster, and some
              have heightened senses. What you choose will influence how you
              experience the world, both in terms of game mechanics and
              role-playing opportunities.
            </p>
          </>
        ),
      },
      {
        title: "Levelling",
        content: (
          <>
            <p>
              As you adventure, your character gains experience and improves
              over time. Levelling up unlocks stronger abilities, better stats,
              and new paths. The most novice characters start at level 1 and can
              work their way up to level 10 by completing missions and surviving
              dangerous encounters. The GM decides when levelling up
              happens—usually after completing a major milestone. For balance,
              it’s generally recommended that all characters level up together
              so that no one gets left behind.
            </p>
            <p>
              The table below shows the upgrades your character gains upon each
              level up:
            </p>
            <table className="w-auto text-center border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 font-bold">Level</th>
                  <th className="border p-2 font-bold">Paths</th>
                  <th className="border p-2 font-bold">Skills</th>
                  <th className="border p-2 font-bold">Health</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">+1</td>
                  <td className="border p-2">+2</td>
                  <td className="border p-2"></td>
                </tr>
                <tr>
                  <td className="border p-2">2</td>
                  <td className="border p-2">+1</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">+2</td>
                </tr>
                <tr>
                  <td className="border p-2">3</td>
                  <td className="border p-2">+1</td>
                  <td className="border p-2">+2</td>
                  <td className="border p-2"></td>
                </tr>
                <tr>
                  <td className="border p-2">4</td>
                  <td className="border p-2">+1</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">+2</td>
                </tr>
                <tr>
                  <td className="border p-2">5</td>
                  <td className="border p-2">+1</td>
                  <td className="border p-2">+2</td>
                  <td className="border p-2"></td>
                </tr>
                <tr>
                  <td className="border p-2">6</td>
                  <td className="border p-2">+1</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">+2</td>
                </tr>
                <tr>
                  <td className="border p-2">7</td>
                  <td className="border p-2">+1</td>
                  <td className="border p-2">+2</td>
                  <td className="border p-2"></td>
                </tr>
                <tr>
                  <td className="border p-2">8</td>
                  <td className="border p-2">+1</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">+2</td>
                </tr>
                <tr>
                  <td className="border p-2">9</td>
                  <td className="border p-2">+1</td>
                  <td className="border p-2">+2</td>
                  <td className="border p-2"></td>
                </tr>
                <tr>
                  <td className="border p-2">10</td>
                  <td className="border p-2">+1</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">+2</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
      {
        title: "Skills",
        content: (
          <>
            <p>
              Skills determine how well your character performs various actions.
              Each skill is categorized as either physical or mental, which
              affects how your character’s health impacts their performance.
            </p>
            <p>
              Skills range from level 1 to level 10, with higher levels granting
              better rolls and stronger effects. At level 1, you start with two
              skill upgrades, and as you progress, you gain more opportunities
              to improve.
            </p>
            <h4>Physical Skills</h4>
            <ul className="list-disc ml-4">
              <li>
                <b>Strength</b>: used for physical manoeuvres requiring
                strength, such as breaking down a door, carrying a heavy load,
                or escaping a grapple
              </li>
              <li>
                <b>Agility</b>: used for physical manoeuvres requiring balance
                and quick reflexes, such as dodging an attack, running through a
                busy street, or recovering from a fall
              </li>
              <li>
                <b>Dexterity</b>: used for tasks requiring fine motor control
                and hand-eye coordination, such as pick pocketing, disabling a
                trap, or playing an instrument
              </li>
              <li>
                <b>Throw</b>: used for hurling objects with precision and
                distance
              </li>
              <li>
                <b>Stealth</b>: used for avoiding detection, such as surprise
                ambushing or sneaking past another creature
              </li>
              <li>
                <b>Martial</b>: used for armed melee attacks
              </li>
              <li>
                <b>Pyro</b>: used for fire sorcery, such as igniting a creature
                on fire
              </li>
              <li>
                <b>Electric</b>: used for electric sorcery, such as casting a
                lightning bolt
              </li>
              <li>
                <b>Kinetic</b>: used for kinetic sorcery, such as manifesting a
                gust of wind
              </li>
              <li>
                <b>Radiant</b>: used for light sorcery, such as camouflaging
                into your surroundings
              </li>
              <li>
                <b>Sonic</b>: used for sound sorcery, such as mimicking the
                voice of another creature
              </li>
              <li>
                <b>Toxic</b>: used for producing poisons, venom and acids
              </li>
              <li>
                <b>Healing</b>: used for healing creatures
              </li>
            </ul>
            <h4>Mental Skills</h4>
            <ul className="list-disc ml-4">
              <li>
                <b>Intelligence</b>: used for tasks requiring mental acuity,
                such as investigating a scene, researching in a library, or
                recalling historical events
              </li>
              <li>
                <b>Nature</b>: used for wilderness and animal-related tasks,
                such as taming an animal, tracking, or navigating a forest
              </li>
              <li>
                <b>Willpower</b>: used for mental fortitude, such as resisting
                psychic attacks or countering attempts of intimidation
              </li>
              <li>
                <b>Charisma</b>: used for social interactions requiring
                influence, such as charming, persuading or deceiving others
              </li>
              <li>
                <b>Psychology</b>: used for assessing the behaviours and
                mannerisms of others to determine their true thoughts and
                emotions
              </li>
              <li>
                <b>Sight</b>: used for visual perception tasks, such as spotting
                hidden objects or seeing in the dark
              </li>
              <li>
                <b>Hearing</b>: used for auditory perception tasks, such as
                hearing a faint noise or identifying specific sounds in a noisy
                environment
              </li>
              <li>
                <b>Smell</b>: used for olfactory perception tasks, such as
                detecting and tracking scents
              </li>
              <li>
                <b>Psychic</b>: used for psionics, such as mind reading
              </li>
              <li>
                <b>Spirit</b>: used for evocation, such as speaking to the dead
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Paths",
        content: (
          <>
            <p>
              Paths define a set of learnings in a field of sorcery, morphing,
              psionics, evocation or martial arts. Consider them as
              specialisations that define what your character excels at. Each
              path unlocks new skills, actions, and passive traits that can give
              you the edge in combat or social encounters. You start with one
              path at level 1. After each level up, you can progress an
              existing, trained path or choose to learn a new one.
            </p>
          </>
        ),
      },
      {
        title: "Health",
        content: (
          <>
            <p>
              Your character isn’t invincible—adventuring comes with its fair
              share of scrapes, bruises, and mind-melting horrors. The game
              tracks three aspects of your character’s health - physique, morale
              and stamina.
            </p>
            <p>
              One way to recover health is through resting. To rest, you need to
              spend several hours of inactivity at a settlement with beds and
              food, such as a campground, inn or hospital. The amount of
              physique and morale you recover is dependent on your stamina
              before the rest, whilst stamina always replenishes to full after a
              rest.
            </p>
            <h4>Physique</h4>
            <p>
              Physique tracks how much physical damage you can endure before
              collapsing.
            </p>
            <p>
              If your morale drops below half, your movement speed is halved and
              you have disadvantage on all physical skill checks. At only 1
              physique, you become incapacitated—meaning you can’t move, fight,
              or do much of anything, and automatically fail any physical skill
              check.
            </p>
            <p>
              If your physique hits zero, you’re knocked unconscious and
              potentially dead. Another player must check your vital signs to
              determine your fate. When they do, roll any die - if the result is
              even, you’re alive but unconscious; if odd, you’re died.
            </p>
            <h4>Morale</h4>
            <p>
              Morale refers to your mental resilience, tested by terrifying
              encounters and psychic manipulation. Certain experiences—like
              witnessing the death of an ally horrific—can drain your morale.
            </p>
            <p>
              As your morale depletes, your mental state starts to deteriorate.
              At less than half morale, you have disadvantage on all mental
              skill checks. At 1 morale, you automatically fail all mental skill
              checks.
            </p>
            <p>
              Upon dropping to zero morale, you lose control. Roll a d4 and then
              take the matching condition from the list below. The condition
              lasts until you recover at least one morale.
            </p>
            <ol className="list-decimal ml-4">
              <li>
                <b>Delusions</b>: You experience constant hallucinations. You
                may mistake people for monsters, monsters for people or have
                flashbacks of past experiences.
              </li>
              <li>
                <b>Hysteria</b>: You have frequent, uncontrollable emotional
                outbursts, including laughing, crying and screaming.
              </li>
              <li>
                <b>Amnesia</b>: You forget who you are and why you’re here.
              </li>
              <li>
                <b>Paranoia</b>: You’re overwhelmed with fear, easily startled
                and flee from all danger. You even have trouble trusting your
                friends.
              </li>
            </ol>
            <h4>Stamina</h4>
            <p>
              Your stamina is how much energy you have before exhaustion sets
              in. Stamina depletes as you perform actions with a stamina cost.
              If an action has a stamina cost, you need to have at least that
              much left in your stamina pool to perform it.
            </p>
            <p>
              Stamina also affects how much health you can recover from resting.
              If you have at least half your maximum stamina before resting,
              then you can recover 2 physique and 2 morale after the rest. If
              you have less than half your maximum stamina, you only recover 1
              physique and 1 morale per rest. If you have no stamina left, you
              can’t recover any health. In any case, your stamina always
              replenishes to full after a rest.
            </p>
          </>
        ),
      },
      {
        title: "Armour",
        content: (
          <>
            <p>
              Not all damage is equal—some creatures are resistant to certain
              types and vulnerable to others. There are five types of physical
              damage, and each creature has armour score for each:
            </p>
            <ul className="list-disc ml-4">
              <li>
                <b>Fire</b>
              </li>
              <li>
                <b>Electric</b>
              </li>
              <li>
                <b>Toxic</b>
              </li>
              <li>
                <b>Slash</b>
              </li>
              <li>
                <b>Force</b>
              </li>
            </ul>
            <p>
              If you have a positive amour score, you reduce incoming damage of
              that type by your armour score. If your armour score is negative,
              you take extra damage equal to the value instead.
            </p>
          </>
        ),
      },
      {
        title: "Size",
        content: (
          <>
            <p>
              Not all creatures are built the same. Every character is assigned
              a size dependent on the species you chose. Certain actions,
              spells, or environmental hazards may affect characters differently
              based on their size. Sizes are categorised based on their
              approximate dimensions:
            </p>
            <ul className="list-disc ml-4">
              <li>
                <b>Tiny</b>: &lt;0.5m
              </li>
              <li>
                <b>Small</b>: 0.5 - 1m
              </li>
              <li>
                <b>Medium</b>: 1-2m
              </li>
              <li>
                <b>Large</b>: 2-4m
              </li>
              <li>
                <b>Huge</b>: &gt;4m
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Speed",
        content: (
          <>
            <p>
              Creatures can move in four ways: walking, climbing, swimming, and
              flying. Different species have access to different types of
              locomotion, each at its own speed. Your speed stat determines how
              far you can move per turn for each type of locomotion available to
              you.
            </p>
            <p>
              When your physique drops below half of its maximum, your movement
              speed is halved for all types of locomotion. If your physique
              drops to 1, your movement speed becomes 0 and you cannot move
              without assistance.
            </p>
          </>
        ),
      },
      {
        title: "Senses",
        content: (
          <>
            <p>
              You can’t interact with what you can’t detect—your senses
              determine how well you perceive the world around you. There are
              eight primary senses:
            </p>
            <ul className="list-disc ml-4">
              <li>
                <b>Standard sight</b>: Ability to see the visible light
                spectrum.
              </li>
              <li>
                <b>Infrared sight</b>: Perception of heat radiated as infrared
                light.
              </li>
              <li>
                <b>Standard hearing</b>: Capacity to hear airborne sounds.
              </li>
              <li>
                <b>Tremor hearing</b>: Feeling vibrations in the ground or water
              </li>
              <li>
                <b>Smell</b>: Detection of airborne odours
              </li>
              <li>
                <b>Psychic sense</b>: Sensing the presence of psychic waves
                emitted from cognitive thinking
              </li>
            </ul>
            <p>
              Different creatures are capable of different senses, and their
              level in the corresponding skill determines their adeptness in
              that sense. The environment also plays a role in determining how
              well the creature can perceive their surroundings. A dark cave
              makes things hard to see. A windy night messes with your ability
              to track scents. The GM decides how effective each sense is
              depending on the situation and the result of your skill check for
              that sense.
            </p>
          </>
        ),
      },
      {
        title: "Language",
        content: (
          <>
            <p>
              There are many different languages of the world. If two creatures
              share a language, they can communicate normally. If they don’t,
              well… good luck. You might be relying on gestures, drawings, or
              elaborate games of charades. Some psychic abilities allow
              characters to understand and communicate regardless of language
              barriers. Otherwise, you might just have to make do with pointing
              and hoping for the best.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Skill Checks",
    content: (
      <>
        <p>
          As you step into the game, the GM will present various scenarios and
          challenges along the way. Depending on your decisions and what the GM
          throws at you, you may need to make skill checks. Whether you’re
          trying to charm a merchant, track a beast, or break down a locked
          door, your character’s skill check determines how well they perform
          certain tasks.
        </p>
        <h4>When to Roll</h4>
        <p>
          The GM decides when a skill check is needed. If something is
          challenging, risky, or uncertain, you’ll likely need to roll for it.
          For example, if you say:
        </p>
        <ul className="list-disc ml-4">
          <li>
            <i>“I walk across the room.”</i> → No roll needed.
          </li>
          <li>
            <i>
              “I sprint across a crumbling rope bridge while dodging arrows.”
            </i>{" "}
            → Definitely a roll.
          </li>
        </ul>
        <p>
          The skill you roll depends on how you approach the problem. For
          example:
        </p>
        <ul className="list-disc ml-4">
          <li>
            Want to intimidate someone? Roll Strength (if you’re flexing
            menacingly) or Charisma (if you’re going for a more persuasive
            threat).
          </li>
          <li>
            Trying to escape from quicksand? You might roll Agility (to wriggle
            free) or Strength (to brute-force your way out).
          </li>
          <li>
            Performing first aid? That might be Dexterity (for steady hands) and
            Intelligence (for knowing where organs go).
          </li>
        </ul>
        <h4>Determining the Outcome</h4>
        <p>
          To perform a skill check, roll the die that corresponds to your skill
          level:
        </p>
        <ul className="list-disc ml-4">
          <li>Level 1: d4</li>
          <li>Level 2: d6</li>
          <li>Level 3: d8</li>
          <li>Level 4: d10</li>
          <li>Level 5: d12</li>
          <li>Level 6: d12 + 1</li>
          <li>Level 7: d12 + 2</li>
          <li>Level 8: d12 + 3</li>
          <li>Level 9: d12 + 4</li>
          <li>Level 10: d12 + 5</li>
        </ul>
        <p>
          If you have any bonuses (or penalties), add (or subtract) them from
          your roll.
        </p>
        <p>
          If you don’t have a level for the required skill, then you take 1 as
          the result.
        </p>
        <p>
          The GM chooses difficulty rating for the task that feels reasonable.
          Each rating has a target value that needs to be met in order to
          successfully complete the task:
        </p>
        <ul className="list-disc ml-4">
          <li>
            <b>Easy</b>: 2+
          </li>
          <li>
            <b>Moderate</b>: 4+
          </li>
          <li>
            <b>Hard</b>: 6+
          </li>
          <li>
            <b>Extreme</b>: 10+
          </li>
          <li>
            <b>Deadly</b>: 16+
          </li>
        </ul>
        <p>
          If your roll meets or beats the target number, you succeed. If not,
          well, the GM decides what happens next. Failure doesn’t always mean
          instant disaster—but it does mean things don’t go to plan. Instead of
          breaking down the door, maybe you hurt your shoulder. Instead of
          sneaking past the guards, maybe you step on a creaky floorboard.
          That’s where the GM gets to have some fun.
        </p>
      </>
    ),
  },
  {
    title: "Luck",
    content: (
      <>
        <p>
          Sometimes, life doesn’t come down to skill—it comes down to sheer dumb
          luck. Luck checks are used when an outcome is completely random with
          no skill involved. Does the abandoned shack have treasure or spiders?
          You’re running from an enemy and leap off a cliff—does a conveniently
          placed tree branch break your fall?
        </p>
        <p>
          A luck check is a simple d20 roll. Higher rolls mean better outcomes,
          and lower rolls mean things go pear-shaped.
        </p>
      </>
    ),
  },
  {
    title: "Combat",
    content: (
      <>
        <p>
          Sometimes, words fail. And when they do, there’s always combat. Combat
          can be initiated by anyone, including the GM. When a battle takes
          place, combat rules are applied.
        </p>
        <p>
          Combat follows a structured turn-based system, but it’s intended to be
          quick and flexible, encouraging creativity. The party that initiated
          the combat acts first, and then the opposing party goes next. Player
          turns go clockwise around the table, while the GM controls enemies on
          their turn. Each round represents about 5 seconds in the game world.
        </p>
      </>
    ),
    subSections: [
      {
        title: "Actions",
        content: (
          <>
            <p>
              On their turn, each character may perform as many actions as
              specified by the action count on their character sheet. Actions
              may incur damage, inflict statuses, or provide buffs.
            </p>
            <p>
              Every character has a list of actions that they have mastered, and
              can unlock more as they progress their paths. You can perform the
              actions you’ve learnt on your turn, or you can get creative and
              try something different. For example, you could try burning a
              bridge before your opponent crosses, or lasso a charging creature
              with your rope. In that case, describe your action to the GM and
              make a skill check to see if you succeed on it. GM will decide the
              outcome of your action based on your description and skill check
              result.
            </p>
            <p>
              Some actions cost stamina, while others don't. Be mindful—if you
              burn through all your stamina, you might find yourself too
              exhausted to fight when it really matters.
            </p>
          </>
        ),
      },
      {
        title: "Movement",
        content: (
          <>
            <p>
              Moving is an action available to all characters. The distance that
              a character can move in one turn is determined by their speed stat
              for the locomotion they use (i.e. walk, swim, climb or fly).
              Standard movement doesn’t use stamina, but the character can
              optionally expend stamina to increase the distance they move.
              Using one stamina will double the distance moved, using two
              stamina will triple the distance moved, and so on. They can expend
              a maximum of four stamina per movement action.
            </p>
            <p>
              Some terrain slows movement (mud, dense bush), while others make
              it risky (unstable bridges, slippery surfaces). The GM will let
              you know if the ground under your feet is about to betray you.
            </p>
          </>
        ),
      },
      {
        title: "Range and area of effect",
        content: (
          <>
            <p>
              Some actions cover an area that can hit multiple targets. All
              actions have a target point - a location where the caster
              unleashes their energy. Area of effect describe the size and shape
              of the area affected by the action:
            </p>
            <ul className="list-disc ml-4">
              <li>
                <b>Single target</b>: The action only affects one creature or
                object.
              </li>
              <li>
                <b>Multiple targets</b>: The action can affect as many creatures
                or objects in range, as chosen by the caster.
              </li>
              <li>
                <b>Cone</b>: A cone extends in a direction from its target
                point. The caster chooses a length and width of up to 5m.
              </li>
              <li>
                <b>Sphere</b>: A sphere extends from the target point, with a
                radius chosen by the caster up to 3m.
              </li>
              <li>
                <b>Arena</b>: The action affects all locations in the combat
                arena.
              </li>
            </ul>
            <p>
              Each action also has a range, which determines how far the target
              point can be located:
            </p>
            <ul className="list-disc ml-4">
              <li>
                <b>Self</b>: the caster is the target point.
              </li>
              <li>
                <b>Adjacent</b>: the caster or a square adjacent to the spell
                caster is the target point.
              </li>
              <li>
                <b>Nearby</b>: the spell caster can be positioned anywhere
                within 10m and the perception of the caster.
              </li>
              <li>
                <b>Distant</b>: the target point can be positioned anywhere
                within the perception of the caster.
              </li>
            </ul>
            <p>
              Obstructions can block attacks—if a wall, tree, or sturdy shield
              is in the way, the GM may rule that your action doesn’t hit as
              expected.
            </p>
            <p>
              Hidden enemies can’t be directly targeted, but they can be hit by
              area of effects if you’re lucky enough to guess their location.
            </p>
          </>
        ),
      },
      {
        title: "Hitting a target",
        content: (
          <>
            <p>
              Landing an attack isn’t always guaranteed—opponents can counter,
              dodge or resist attacks:
            </p>
            <ul className="list-disc ml-4">
              <li>
                <b>Counter</b>: The defender rolls the same skill check as the
                attacker to counter the attack. If the action uses a throw
                skill, then the defender rolls a kinetic check instead to
                deflect it.
              </li>
              <li>
                <b>Dodge</b>: If the attack is physical and doesn’t cover a
                large area, the defender can roll an agility check to dodge it.
              </li>
              <li>
                <b>Resist</b>: If it is a psychic attack, the defender can roll
                a willpower check to resist the effect.
              </li>
            </ul>
            <p>
              If the attacker rolls higher than the defender, the attack hits
              and the defender takes the effect of the action. If the defender
              rolls equal to or higher, they avoid the attack.
            </p>
            <p>
              Every character has an evasions count on their character sheet.
              The evasions count determines the number of attacks they can
              attempt to evade in one round of combat.
            </p>
          </>
        ),
      },
      {
        title: "Statuses",
        content: (
          <>
            <p>
              Some actions inflict statuses upon their foes. All statuses,
              except for burning, last only one round.
            </p>
            <ul className="list-disc ml-4">
              <li>
                <b>Stunned</b>: The character loses an evasion until their next
                turn. If they have no evasions, then they lose an action on
                their next turn. This status can be stacked multiple times in a
                round.
              </li>
              <li>
                <b>Empowered</b>: The character gains an evasion until their
                next turn. This status can be stacked multiple times in a round.
              </li>
              <li>
                <b>Protected</b>: The character armour increases by the
                specified amount for the specified damage type until their next
                turn. This status can be stacked multiple times in a round.
              </li>
              <li>
                <b>Restrained</b>: The character cannot dodge attacks or move to
                a new position until the end of their next turn.
              </li>
              <li>
                <b>Burning</b>: The character takes 1d8 fire damage at the start
                of each their turns. After taking the damage, the creature may
                use an action to douse the flame and remove the status.
              </li>
              <li>
                <b>Invisible</b>: The character cannot be detected through sight
                or infrared sight until their next turn.
              </li>
              <li>
                <b>Silent</b>: The character cannot be detected through hearing
                or tremor hearing until their next turn.
              </li>
              <li>
                <b>Odourless</b>: The character cannot be detected through smell
                until their next turn.
              </li>
              <li>
                <b>Composed</b>: The character cannot be detected by psychic
                sense until the end of their next turn.
              </li>
              <li>
                <b>Blinded</b>: The character cannot see visible or infrared
                light until the end of their next turn.
              </li>
              <li>
                <b>Deafened</b>: The character cannot hear sounds in the air or
                tremors in the earth or water until the end of their next turn.
              </li>
              <li>
                <b>Anosmic</b>: The character cannot smell until the end of
                their next turn.
              </li>
              <li>
                <b>Blocked</b>: The character cannot psychic sense until the end
                of their next turn.
              </li>
              <li>
                <b>Disoriented</b>: The character is blind, deaf and anosmic.
              </li>
              <li>
                <b>Deluded</b>: The caster controls the perception of the target
                to make them see, hear or smell an altered reality.
              </li>
              <li>
                <b>Hypnotised</b>: The target cannot harm the caster. They must
                obey any commands and act with the best interest of the caster.
                If the target is attacked by anyone from the opposing side, this
                status is removed.
              </li>
              <li>
                <b>Frightened</b>: The creature is immobilised with fear and
                their turn is skipped.
              </li>
              <li>
                <b>Madness</b>: The creature can only attack the closest
                creature near them.
              </li>
              <li>
                <b>Provoked</b>: The creature must use at least one of their
                actions to attempt to harm the caster.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Resolving Combat",
        content: (
          <>
            <p>
              When a character loses all of their health or morale, they are out
              of the combat. Once all characters in the same party have been
              defeated or surrender, they lose the combat. The victorious party
              chooses whether to kill, capture or leave the losers in their
              place. If the players lose the combat, it’s up to the GM to decide
              their fate.
            </p>
            <p>
              At any point during their turn, a character can attempt to flee.
              It is up to the GM discretion to determine whether a character has
              successfully fled the combat. If successful, then the character is
              out of the combat and their fate isn’t determined by their
              opponents.
            </p>
          </>
        ),
      },
    ],
  },
];

export function Handbook() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Page title="Handbook" summary={summary} sections={sections} />
    </motion.div>
  );
}
