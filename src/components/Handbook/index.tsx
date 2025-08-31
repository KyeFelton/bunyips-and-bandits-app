import { motion } from "framer-motion";
import { Page } from "../Wiki/Page";
import { ArmourIcon } from "../icons/ArmourIcon";
import { SkillIcon } from "../icons/SkillIcon";
import { SpeedIcon } from "../icons/SpeedIcon";
import { DamageType } from "../../enums/DamageType";
import { SkillType } from "../../enums/SkillType";
import { Locomotion } from "../../enums/Locomotion";
import { SightIcon } from "../icons/SenseIcon";
import { HearingIcon } from "../icons/SenseIcon";
import { SmellIcon } from "../icons/SenseIcon";
import { PsychicSenseIcon } from "../icons/SenseIcon";
import summonerImage from "../../images/handbook/summoner.png";
import bunyipImage from "../../images/handbook/bunyip.png";
import dropbearImage from "../../images/handbook/dropbear.png";
import apothecaryImage from "../../images/handbook/apothecary.png";
import sleepingWombatInnImage from "../../images/handbook/sleeping wombat inn.png";

const summary = (
  <>
    <p>
      G’day, adventurer! Welcome to Bunyips and Bandits, a tabletop role-playing
      game set in a world inspired by the landscapes, creatures, and legends of
      Australia. Whether you’re trekking through the Outback, navigating the
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
          action moving rather than bogging you down with specific details and
          calculations. The rules encourage creativity—if you want to try
          something ridiculous, the GM won’t stop you (although the outcome
          might not be favourable).
        </p>
        <p>
          This handbook should be viewed as framework to align everyone, rather
          than a rigid rule system. If something doesn’t quite fit your
          playstyle, discuss it with your party and tweak it. The game is meant
          to be adaptable. The only rule is that everyone at the table enjoys
          themselves.
        </p>
      </>
    ),
  },
  {
    title: "What You’ll Need",
    content: (
      <>
        <p>
          Your game setup depends on your style. This website has been created
          to enhance and streamline the playing experience, but it's not
          required. If you prefer a more tactile experience, you can play with
          paper, pens and dice. The game uses polyhedral dice sets, including
          d4, d6, d8, d12, and d20. The GM may also want a board to track
          character positions in combat, but if you’re a fan of Theatre of the
          Mind, let your imagination do the work. At the end of the day, all you
          really need is a good group of friends and a sense of adventure.
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
          speaking in their voice, and deciding how they handle the dangers and
          opportunities that come their way.
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
            <div className="md:w-[35%] md:float-right px-6">
              <img
                src={summonerImage}
                alt={"character artwork"}
                className="object-contain rounded-lg mt-0"
              />
            </div>
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
                level, you can upgrade one additional skill.
              </li>
              <li>
                <b>Enhance your health</b>: Every character has three health
                attributes - physique, morale, and stamina. After each level up,
                you can upgrade one of your health attributes as you see fit,
                increasing your survivability in different situations.
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
              over time. Levels indicate a character’s skill and capability,
              unlocking stronger abilities, improved stats, and new paths to
              explore. Characters start at level 1 and can work their way up to
              level 10 by completing missions and overcoming difficult
              encounters. The GM decides when levelling up happens—usually after
              completing a major milestone. Each time you level up, you may
              choose to progress one path, upgrade one skill, and enhance one
              health track, allowing you to tailor your character’s growth to
              your playstyle and strategy.
            </p>
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
              skill upgrades, and each time you level up thereafter, you can
              upgrade another skill.
            </p>
            <h4>Physical Skills</h4>
            <table className="md:mx-4">
              <thead>
                <tr>
                  <th></th>
                  <th>Skill</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Strength}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Strength</b>
                  </td>
                  <td>
                    Physical manoeuvres requiring strength, such as breaking
                    down a door, carrying a heavy load, or escaping a grapple.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Agility}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Agility</b>
                  </td>
                  <td>
                    Balance and quick reflexes, such as dodging an attack,
                    running through a busy street, or recovering from a fall.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Dexterity}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Dexterity</b>
                  </td>
                  <td>
                    Fine motor control and hand-eye coordination, such as pick
                    pocketing, disabling a trap, or playing an instrument.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Throw}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Throw</b>
                  </td>
                  <td>Hurling objects with precision and distance.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Stealth}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Stealth</b>
                  </td>
                  <td>
                    Avoiding detection, such as surprise ambushing or sneaking
                    past another creature.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Martial}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Martial</b>
                  </td>
                  <td>Armed melee attacks.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Pyro}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Pyro</b>
                  </td>
                  <td>Fire sorcery, such as igniting a creature on fire.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Electric}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Electric</b>
                  </td>
                  <td>Electric sorcery, such as casting a lightning bolt.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Kinetic}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Kinetic</b>
                  </td>
                  <td>Kinetic sorcery, such as manifesting a gust of wind.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Radiant}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Radiant</b>
                  </td>
                  <td>
                    Light sorcery, such as camouflaging into your surroundings.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Sonic}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Sonic</b>
                  </td>
                  <td>
                    Sound sorcery, such as mimicking the voice of another
                    creature.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Toxic}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Toxic</b>
                  </td>
                  <td>Producing poisons, venom and acids.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Healing}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Healing</b>
                  </td>
                  <td>Healing creatures.</td>
                </tr>
              </tbody>
            </table>
            <h4>Mental Skills</h4>
            <table className="md:mx-4 mt-2 mb-8">
              <thead>
                <tr>
                  <th></th>
                  <th>Skill</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Intelligence}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Intelligence</b>
                  </td>
                  <td>
                    Mental acuity, such as investigating a scene, researching in
                    a library, or recalling historical events.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Nature}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Nature</b>
                  </td>
                  <td>
                    Wilderness and animal-related tasks, such as taming an
                    animal, tracking, or navigating a forest.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Willpower}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Willpower</b>
                  </td>
                  <td>
                    Mental fortitude, such as resisting psychic attacks or
                    countering attempts of intimidation.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Charisma}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Charisma</b>
                  </td>
                  <td>
                    Social interactions requiring influence, such as charming,
                    persuading or deceiving others.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Psychology}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Psychology</b>
                  </td>
                  <td>
                    Assessing the behaviours and mannerisms of others to
                    determine their true thoughts and emotions.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Sight}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Sight</b>
                  </td>
                  <td>
                    Visual perception tasks, such as spotting hidden objects or
                    seeing in the dark.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Hearing}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Hearing</b>
                  </td>
                  <td>
                    Auditory perception tasks, such as hearing a faint noise or
                    identifying specific sounds in a noisy environment.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Smell}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Smell</b>
                  </td>
                  <td>
                    Olfactory perception tasks, such as detecting and tracking
                    scents.
                  </td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Psychic}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Psychic</b>
                  </td>
                  <td>Psionics, such as mind reading.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SkillIcon
                      type={SkillType.Spirit}
                      className="inline-block mr-1 pb-1"
                    />
                  </td>
                  <td>
                    <b>Spirit</b>
                  </td>
                  <td>Evocation, such as speaking to the dead.</td>
                </tr>
              </tbody>
            </table>
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
              determine your fate. When they do, roll any die—if the result is
              even, you’re alive but unconscious; if odd, you’re dead.
            </p>
            <h4>Morale</h4>
            <p>
              Morale refers to your mental resilience, tested by terrifying
              encounters and psychic manipulation. Certain experiences—like
              witnessing the death of an ally—can drain your morale.
            </p>
            <p>
              As your morale depletes, your mental state starts to deteriorate.
              At less than half morale, you have disadvantage on all mental
              skill checks. At 1 morale, you automatically fail all mental skill
              checks.
            </p>
            <div className="md:w-[35%] md:float-left px-6 mr-10">
              <img
                src={bunyipImage}
                alt={"character artwork"}
                className="object-contain rounded-lg mt-0"
              />
            </div>
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
                outbursts, including laughter, crying and screaming.
              </li>
              <li>
                <b>Amnesia</b>: You forget who you are and why you’re here.
              </li>
              <li>
                <b>Paranoia</b>: You’re overwhelmed with fear, easy to startle
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
            <table className="md:mx-4">
              <thead>
                <tr>
                  <th></th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-0">
                    <ArmourIcon
                      type={DamageType.Fire}
                      className="inline-block mr-1"
                    />
                  </td>
                  <td>
                    <b>Fire</b>
                  </td>
                  <td>Damage from flames, heat, and radiation.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <ArmourIcon
                      type={DamageType.Electric}
                      className="inline-block mr-1"
                    />
                  </td>
                  <td>
                    <b>Electric</b>
                  </td>
                  <td>Damage from electricity and lightning.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <ArmourIcon
                      type={DamageType.Toxic}
                      className="inline-block mr-1"
                    />
                  </td>
                  <td>
                    <b>Toxic</b>
                  </td>
                  <td>Damage from poisons, acids, and venom.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <ArmourIcon
                      type={DamageType.Slash}
                      className="inline-block mr-1"
                    />
                  </td>
                  <td>
                    <b>Slash</b>
                  </td>
                  <td>Damage from cutting, slashing, or bladed weapons.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <ArmourIcon
                      type={DamageType.Force}
                      className="inline-block mr-1"
                    />
                  </td>
                  <td>
                    <b>Force</b>
                  </td>
                  <td>Damage from blunt force, impacts, and crushing.</td>
                </tr>
              </tbody>
            </table>
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
            <table className="md:mx-4 mb-8">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Dimensions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Tiny</b>
                  </td>
                  <td>&lt; 0.5m</td>
                </tr>
                <tr>
                  <td>
                    <b>Small</b>
                  </td>
                  <td>0.5 - 1m</td>
                </tr>
                <tr>
                  <td>
                    <b>Medium</b>
                  </td>
                  <td>1 - 2m</td>
                </tr>
                <tr>
                  <td>
                    <b>Large</b>
                  </td>
                  <td>2 - 4m</td>
                </tr>
                <tr>
                  <td>
                    <b>Huge</b>
                  </td>
                  <td>&gt; 4m</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
      {
        title: "Speed",
        content: (
          <>
            <p>
              Different species have access to different types of locomotion,
              each at its own speed. Your speed stat determines how far you can
              move per turn for each type of locomotion available to you. There
              are four types of locomotion:
            </p>
            <table className="md:mx-4">
              <thead>
                <tr>
                  <th></th>
                  <th>Locomotion</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-0">
                    <SpeedIcon
                      type={Locomotion.Walk}
                      className="inline-block mr-1"
                    />
                  </td>
                  <td>
                    <b>Walk</b>
                  </td>
                  <td>Moving across land.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SpeedIcon
                      type={Locomotion.Climb}
                      className="inline-block mr-1"
                    />
                  </td>
                  <td>
                    <b>Climb</b>
                  </td>
                  <td>Scaling vertical surfaces or obstacles.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SpeedIcon
                      type={Locomotion.Swim}
                      className="inline-block mr-1"
                    />
                  </td>
                  <td>
                    <b>Swim</b>
                  </td>
                  <td>Moving through water or other liquids.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SpeedIcon
                      type={Locomotion.Fly}
                      className="inline-block mr-1"
                    />
                  </td>
                  <td>
                    <b>Fly</b>
                  </td>
                  <td>Moving through the air using wings or similar means.</td>
                </tr>
              </tbody>
            </table>
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
            <table className="md:mx-4">
              <thead>
                <tr>
                  <th></th>
                  <th>Sense</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-0">
                    <SightIcon
                      standard={true}
                      infrared={false}
                      className="inline-block mt-1"
                    />
                  </td>
                  <td>
                    <b>Standard sight</b>
                  </td>

                  <td>Ability to see the visible light spectrum.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SightIcon
                      standard={false}
                      infrared={true}
                      className="inline-block mt-1"
                    />
                  </td>
                  <td>
                    <b>Infrared sight</b>
                  </td>

                  <td>Perception of heat radiated as infrared light.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <HearingIcon
                      standard={true}
                      tremor={false}
                      className="inline-block mt-1"
                    />
                  </td>
                  <td>
                    <b>Standard hearing</b>
                  </td>

                  <td>Capacity to hear airborne sounds.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <HearingIcon
                      standard={false}
                      tremor={true}
                      className="inline-block mt-1"
                    />
                  </td>
                  <td>
                    <b>Tremor hearing</b>
                  </td>

                  <td>Feeling vibrations in the ground or water.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <SmellIcon className="inline-block mr-1 pb-1" />{" "}
                  </td>
                  <td>
                    <b>Smell</b>
                  </td>

                  <td>Detection of airborne odours.</td>
                </tr>
                <tr>
                  <td className="pr-0">
                    <PsychicSenseIcon className="inline-block mr-1 pb-1" />{" "}
                  </td>
                  <td>
                    <b>Psychic sense</b>
                  </td>

                  <td>Sensing the presence of cognitive thinking.</td>
                </tr>
              </tbody>
            </table>
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
        <div className="md:w-[42%] md:float-right p-6">
          <img
            src={apothecaryImage}
            alt={"apothecary"}
            className="object-contain rounded-lg mt-0"
          />
        </div>
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
          level and add the modifier:
        </p>
        <table className="ml-8 mt-0 w-auto text-center border-collapse">
          <thead>
            <tr>
              <th>Level</th>
              <th>Die</th>
              <th>Modifier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>d4</td>
              <td>-</td>
            </tr>
            <tr>
              <td>2</td>
              <td>d6</td>
              <td>-</td>
            </tr>
            <tr>
              <td>3</td>
              <td>d8</td>
              <td>-</td>
            </tr>
            <tr>
              <td>4</td>
              <td>d10</td>
              <td>-</td>
            </tr>
            <tr>
              <td>5</td>
              <td>d12</td>
              <td>-</td>
            </tr>
            <tr>
              <td>6</td>
              <td>d12</td>
              <td>+1</td>
            </tr>
            <tr>
              <td>7</td>
              <td>d12</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>8</td>
              <td>d12</td>
              <td>+3</td>
            </tr>
            <tr>
              <td>9</td>
              <td>d12</td>
              <td>+4</td>
            </tr>
            <tr>
              <td>10</td>
              <td>d12</td>
              <td>+5</td>
            </tr>
          </tbody>
        </table>
        <p>
          If you have any bonuses (or penalties), add (or subtract) them from
          your roll. If you don’t have a level for the required skill, then you
          take 1 as the result.
        </p>
        <p>
          The GM chooses difficulty rating for the task that feels reasonable.
          Each rating has a target value that needs to be met in order to
          successfully complete the task:
        </p>
        <table className="ml-8 mt-0 w-auto text-center border-collapse">
          <thead>
            <tr>
              <th>Difficulty</th>
              <th>Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Easy</td>
              <td>2+</td>
            </tr>
            <tr>
              <td>Moderate</td>
              <td>4+</td>
            </tr>
            <tr>
              <td>Hard</td>
              <td>6+</td>
            </tr>
            <tr>
              <td>Extreme</td>
              <td>10+</td>
            </tr>
            <tr>
              <td>Deadly</td>
              <td>16+</td>
            </tr>
          </tbody>
        </table>
        <p>
          If your roll is equal to or greater than the target number, you
          succeed. If not, well, the GM decides what happens next. Failure
          doesn’t always mean instant disaster—but it does mean things don’t go
          to plan. Instead of breaking down the door, maybe you hurt your
          shoulder. Instead of sneaking past the guards, maybe you step on a
          creaky floorboard. This is where the GM gets to have some fun.
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
        <div className="md:w-[35%] md:float-right px-6 bg-card">
          <img
            src={dropbearImage}
            alt={"dropbear fighter"}
            className="object-contain rounded-lg mt-0"
          />
        </div>
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
            <table className="md:mx-4">
              <thead>
                <tr>
                  <th>Area Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Single target</b>
                  </td>
                  <td>Affects one creature or object.</td>
                </tr>
                <tr>
                  <td>
                    <b>Multiple targets</b>
                  </td>
                  <td>
                    Affects as many creatures or objects in range, as chosen by
                    the caster.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Cone</b>
                  </td>
                  <td>
                    Extends in a direction from its target point. Length and
                    width up to 5m.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Sphere</b>
                  </td>
                  <td>Extends from the target point, radius up to 3m.</td>
                </tr>
                <tr>
                  <td>
                    <b>Arena</b>
                  </td>
                  <td>Affects all locations in the combat arena.</td>
                </tr>
              </tbody>
            </table>
            <p>
              Each action also has a range, which determines how far the target
              point can be located:
            </p>
            <table className="md:mx-4">
              <thead>
                <tr>
                  <th>Range</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Self</b>
                  </td>
                  <td>The caster is the target point.</td>
                </tr>
                <tr>
                  <td>
                    <b>Adjacent</b>
                  </td>
                  <td>
                    The caster or a square adjacent to the spell caster is the
                    target point.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Nearby</b>
                  </td>
                  <td>Anywhere within 10m and the perception of the caster.</td>
                </tr>
                <tr>
                  <td>
                    <b>Distant</b>
                  </td>
                  <td>Anywhere within the perception of the caster.</td>
                </tr>
              </tbody>
            </table>
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
            <table className="md:mx-4 mb-8">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Stunned</b>
                  </td>
                  <td>
                    Loses an evasion until next turn. If no evasions, loses an
                    action. Can be stacked.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Empowered</b>
                  </td>
                  <td>Gains an evasion until next turn. Can be stacked.</td>
                </tr>
                <tr>
                  <td>
                    <b>Protected</b>
                  </td>
                  <td>
                    Armour increases by specified amount/type until next turn.
                    Can be stacked.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Restrained</b>
                  </td>
                  <td>Cannot dodge attacks or move until end of next turn.</td>
                </tr>
                <tr>
                  <td>
                    <b>Burning</b>
                  </td>
                  <td>
                    Takes 1d8 fire damage at start of turn. Can use action to
                    douse flame.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Invisible</b>
                  </td>
                  <td>
                    Cannot be detected through sight or infrared sight until
                    next turn.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Silent</b>
                  </td>
                  <td>
                    Cannot be detected through hearing or tremor hearing until
                    next turn.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Odourless</b>
                  </td>
                  <td>Cannot be detected through smell until next turn.</td>
                </tr>
                <tr>
                  <td>
                    <b>Composed</b>
                  </td>
                  <td>
                    Cannot be detected by psychic sense until end of next turn.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Blinded</b>
                  </td>
                  <td>
                    Cannot see visible or infrared light until end of next turn.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Deafened</b>
                  </td>
                  <td>
                    Cannot hear sounds in air or tremors until end of next turn.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Anosmic</b>
                  </td>
                  <td>Cannot smell until end of next turn.</td>
                </tr>
                <tr>
                  <td>
                    <b>Blocked</b>
                  </td>
                  <td>Cannot psychic sense until end of next turn.</td>
                </tr>
                <tr>
                  <td>
                    <b>Disoriented</b>
                  </td>
                  <td>Blind, deaf, anosmic and blocked.</td>
                </tr>
                <tr>
                  <td>
                    <b>Deluded</b>
                  </td>
                  <td>
                    Caster controls perception to alter reality for target.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Hypnotised</b>
                  </td>
                  <td>
                    Target cannot harm caster, must obey commands. Removed if
                    attacked by opposing side.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Frightened</b>
                  </td>
                  <td>Immobilised with fear, turn is skipped.</td>
                </tr>
                <tr>
                  <td>
                    <b>Madness</b>
                  </td>
                  <td>Can only attack the closest creature.</td>
                </tr>
                <tr>
                  <td>
                    <b>Provoked</b>
                  </td>
                  <td>
                    Must use at least one action to attempt to harm the caster.
                  </td>
                </tr>
              </tbody>
            </table>
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
      <Page
        title="Handbook"
        summary={summary}
        tableOfContents={false}
        sections={sections}
      />
    </motion.div>
  );
}
