import { motion } from "framer-motion";
import { Body, H2, H3, TornPaper, WikiPage } from "../components/WikiPage";
import { ArmourIcon } from "../components/icons/ArmourIcon";
import { SkillIcon } from "../components/icons/SkillIcon";
import { SpeedIcon } from "../components/icons/SpeedIcon";
import { DamageType } from "../enums/DamageType";
import { SkillType } from "../enums/SkillType";
import { Locomotion } from "../enums/Locomotion";
import { SightIcon } from "../components/icons/SenseIcon";
import { HearingIcon } from "../components/icons/SenseIcon";
import { SmellIcon } from "../components/icons/SenseIcon";
import { PsychicSenseIcon } from "../components/icons/SenseIcon";
import summonerImage from "../images/handbook/summoner.png";
import bunyipImage from "../images/handbook/bunyip.png";
import dropbearImage from "../images/handbook/dropbear.png";
import apothecaryImage from "../images/handbook/apothecary.png";
import sleepingWombatInnImage from "../images/handbook/sleeping wombat inn.png";

const summary = (
  <>
    <p>
      G’day, adventurer! Welcome to Bunyips and Bandits, a tabletop role-playing
      game set in a fictional world inspired by the landscapes, creatures, and
      legends of Australia. Whether you’re trekking through the Outback,
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
    <TornPaper>
      <p>
        Bunyips and Bandits draws inspiration from real Australian history,
        culture and landscape, but it is not a fair depiction of Australia, past
        or present. Australia is a place with a long, deep, and ongoing history,
        that for many thousands of years has been inhabited by Aboriginal and
        Torres Strait Islander peoples. Their cultures are not singular, but
        instead a network of over two hundred nations, each with their own
        language, laws, and stories. Their land was wrongfully seized by
        European invaders, and with it, lives, culture and language have been
        lost—tragedies whose impacts are still felt today.
      </p>
    </TornPaper>
  </>
);

const content = (
  <>
    <H2>How the Game Works</H2>
    <Body>
      <p>
        Bunyips and Bandits is all about collaborative storytelling. Before you
        dive into adventure, you’ll create your own character with a unique
        background, skills, and motivations. They might be a cunning trickster,
        a brawny bushranger, or a clumsy sorcerer—the choice is yours.
      </p>
      <p>
        The GM is the one pulling the strings—setting up the world, playing
        non-player characters (NPCs), and ensuring the game flows smoothly. The
        GM also acts as the ultimate referee, deciding how events play out based
        on a combination of logic, game rules, and a little bit of storytelling
        flair. The core of the game boils down to this:
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
        something ridiculous, the GM won’t stop you (although the outcome might
        not be favourable).
      </p>
      <p>
        This handbook should be viewed as framework to align everyone, rather
        than a rigid rule system. If anything is unclear, discuss it with your
        party and agree on a ruling. If something doesn’t quite fit your
        playstyle, discuss that too and potentially tweak it. The game is meant
        to be adaptable. The only rule is that everyone at the table has fun.
      </p>
    </Body>
    <H2>What You’ll Need</H2>
    <Body>
      <p>
        Your game setup depends on your style. This website has been created to
        enhance and streamline the playing experience, but it's not required. If
        you prefer a more tactile experience, you can play with paper, pens and
        dice. The game uses polyhedral dice sets, including d4, d6, d8, d12, and
        d20. The GM may also want a board to track character positions in
        combat, but if you’re a fan of Theatre of the Mind, let your imagination
        do the work. At the end of the day, all you really need is a good group
        of friends and a sense of adventure.
      </p>
    </Body>
    <H2>Characters</H2>
    <Body>
      <p>
        At the heart of Bunyips and Bandits are the characters you create and
        play. While the GM plays the role of everyone and everything else,
        players will be in control of one character—making their choices,
        speaking in their voice, and deciding how they handle the dangers and
        opportunities that come their way.
      </p>
    </Body>
    <H3>Creating Your First Character</H3>
    <Body>
      <p>
        Before setting off on your first adventure, you’ll need to create a
        character. This involves a few simple steps:
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
          <b>Describe your character</b>: Think about who they are beyond the
          numbers on the sheet. What's their name? What do they look like? Where
          do they come from? Why have they taken to the adventuring life instead
          of settling down somewhere safe? The GM will work with you to weave
          your character into the world, ensuring they have a reason to be
          involved in the story.
        </li>
        <li>
          <b>Choose your paths</b>: Paths define a unique set of traits and
          actions that your character has acquired and mastered. At level 1, you
          can choose one path to start with. You'll be able to progress this
          path or unlock new ones to develop your character's abilities as you
          level up.
        </li>
        <li>
          <b>Upgrade your skills</b>: Every character has a set of skills that
          define their physical and mental abilities. At the start, you'll have
          some default skills from your species, plus two skill upgrades to
          improve any abilities you like. After each level, you can upgrade one
          additional skill.
        </li>
        <li>
          <b>Create a unique trait</b>: Every adventurer has something special
          about them—something that sets them apart. A performer may be better
          at winning the crowd. An assassin may be skilled at blending into the
          shadows. A hunter may be better at tracking animals. This is where you
          and the GM get creative. Your unique trait is linked to your backstory
          and gives your character an advantage in certain situations.
        </li>
      </ol>
    </Body>
    <H3>Species</H3>
    <Body>
      <p>
        Your species affects your character’s base stats and natural abilities.
        Some species are tougher, others are faster, and some have heightened
        senses. What you choose will influence how you experience the world,
        both in terms of game mechanics and role-playing opportunities.
      </p>
    </Body>
    <H3>Levelling</H3>
    <Body>
      <p>
        As you adventure, your character gains experience and improves over
        time. Levels indicate a character's skill and capability, unlocking
        stronger abilities, improved stats, and new paths to explore. Characters
        start at level 1 and can work their way up to level 10 by completing
        missions and overcoming difficult encounters. The GM decides when
        levelling up happens—usually after completing a major milestone. Each
        time you level up, you may choose to progress one path and upgrade one
        skill, allowing you to tailor your character's growth to your playstyle
        and strategy.
      </p>
    </Body>
    <H3>Skills</H3>
    <Body>
      <p>
        Skills determine how well your character performs various actions. Each
        skill is categorized as either physical or mental, which affects how
        your character’s health impacts their performance.
      </p>
      <p>
        Skills range from level 1 to level 10, with higher levels granting
        better rolls and stronger effects. At level 1, you start with two skill
        upgrades, and each time you level up thereafter, you can upgrade another
        skill.
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
              Physical manoeuvres requiring strength, such as breaking down a
              door, carrying a heavy load, or escaping a grapple.
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
              Balance and quick reflexes, such as dodging an attack, running
              through a busy street, or recovering from a fall.
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
              pocketing, playing an instrument or throwing a knife.
            </td>
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
              Avoiding detection, such as surprise ambushing or sneaking past
              another creature.
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
            <td>Light sorcery, such as camouflaging into your surroundings.</td>
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
              Sound sorcery, such as mimicking the voice of another creature.
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
              Mental acuity, such as investigating a scene, researching in a
              library, or recalling historical events.
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
              Wilderness and animal-related tasks, such as taming an animal,
              tracking, or navigating a forest.
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
              Mental fortitude, such as resisting psychic attacks or countering
              attempts of intimidation.
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
              Assessing the behaviours and mannerisms of others to determine
              their true thoughts and emotions.
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
              Visual perception tasks, such as spotting hidden objects or seeing
              in the dark.
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
              Olfactory perception tasks, such as detecting and tracking scents.
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
    </Body>
    <H3>Paths</H3>
    <Body>
      <p>
        Paths define a set of learnings in a field of sorcery, morphing,
        psionics, evocation or martial arts. Consider them as specialisations
        that define what your character excels at. Each path unlocks new skills,
        actions, and passive traits that can give you the edge in combat or
        social encounters. You start with one path at level 1. After each level
        up, you can progress an existing, trained path or choose to learn a new
        one.
      </p>
    </Body>
    <H3>Health</H3>
    <Body>
      <p>
        Your character isn’t invincible—adventuring comes with its fair share of
        scrapes, bruises, and mind-melting horrors. The game tracks three
        aspects of your character’s health - body, mind and stamina.
      </p>
      <p>
        One way to recover health is through resting. To rest, you need to spend
        several hours of inactivity at a settlement with beds and food, such as
        a campground, inn or hospital. Resting restores all your stamina. If you
        have at least half your maximum stamina before resting, then your body
        and mind also recover 2 health after the rest. If you have less than
        half your maximum stamina, they only recover 1 health per rest. If you
        have no stamina left, you can’t recover any health.
      </p>
      <h4>Body</h4>
      <p>
        Body tracks how much physical damage you can endure before collapsing.
      </p>
      <p>
        If your body drops below half, your movement speed is halved and you
        have disadvantage on all physical skill checks. At only 1 health, you
        automatically fail any physical skill check.
      </p>
      <p>
        If your body hits zero, you’re knocked unconscious and potentially dead.
        Another player must check your vital signs to determine your fate. When
        they do, roll any die—if the result is even, you’re alive and regain
        conscious; if odd, you’re dead. Each time you take damage whilst on zero
        health, you must roll a die to determine whether you die.
      </p>
      <h4>Mind</h4>
      <p>
        Mind refers to your mental resilience, tested by terrifying encounters
        and psychic manipulation. Certain experiences—like witnessing the death
        of an ally—can drain your mind.
      </p>
      <p>
        As your mind depletes, your mental state starts to deteriorate. At less
        than half health, you have disadvantage on all mental skill checks. At 1
        health, you automatically fail all mental skill checks.
      </p>
      <div className="md:w-[35%] md:float-left px-6 mr-10">
        <img
          src={bunyipImage}
          alt={"character artwork"}
          className="object-contain rounded-lg mt-0"
        />
      </div>
      <p>
        Upon your mind dropping to zero health, you lose control. Roll a d4 and
        then take the matching condition from the list below. The condition
        lasts until your mind recovers at least 1 health.
      </p>

      <ol className="list-decimal ml-4">
        <li>
          <b>Delusions</b>: You experience constant hallucinations. You may
          mistake people for monsters, monsters for people or have flashbacks of
          past experiences.
        </li>
        <li>
          <b>Hysteria</b>: You have frequent, uncontrollable emotional
          outbursts, including laughter, crying and screaming.
        </li>
        <li>
          <b>Amnesia</b>: You forget who you are and why you’re here.
        </li>
        <li>
          <b>Paranoia</b>: You’re overwhelmed with fear, easy to startle and
          flee from all danger. You even have trouble trusting your friends.
        </li>
      </ol>
      <h4>Stamina</h4>
      <p>
        Your stamina is how much energy you have before exhaustion sets in.
        Stamina depletes as you perform actions with a stamina cost. If an
        action has a stamina cost, you need to have at least that much left in
        your stamina pool to perform it.
      </p>
    </Body>
    <H3>Armour</H3>
    <Body>
      <p>
        Not all damage is equal—some creatures are resistant to certain types
        and vulnerable to others. There are five types of physical damage, and
        each creature has armour score for each:
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
        If you have a positive amour score, you reduce incoming damage of that
        type by your armour score. If your armour score is negative, you take
        extra damage equal to the value instead.
      </p>
    </Body>
    <H3>Size</H3>
    <Body>
      <p>
        Not all creatures are built the same. Every character is assigned a size
        dependent on the species you chose. Certain actions, spells, or
        environmental hazards may affect characters differently based on their
        size. Sizes are categorised based on their approximate dimensions:
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
    </Body>
    <H3>Speed</H3>
    <Body>
      <p>
        Different species have different forms of locomotion, each each at their
        own speed. There are four types of locomotion:
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
              <SpeedIcon type={Locomotion.Walk} className="inline-block mr-1" />
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
              <SpeedIcon type={Locomotion.Swim} className="inline-block mr-1" />
            </td>
            <td>
              <b>Swim</b>
            </td>
            <td>Moving through water or other liquids.</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SpeedIcon type={Locomotion.Fly} className="inline-block mr-1" />
            </td>
            <td>
              <b>Fly</b>
            </td>
            <td>Moving through the air using wings or similar means.</td>
          </tr>
        </tbody>
      </table>
      <p>
        For each type of locomotion, you can have a speed of slow, moderate,
        fast, or extreme. This speed determines the distance that can be
        tranversed in a single action in combat:
      </p>
      <table className="md:mx-4 mb-8">
        <thead>
          <tr>
            <th>Speed</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Slow</b>
            </td>
            <td>None</td>
          </tr>
          <tr>
            <td>
              <b>Moderate</b>
            </td>
            <td>Close</td>
          </tr>
          <tr>
            <td>
              <b>Fast</b>
            </td>
            <td>Near</td>
          </tr>
          <tr>
            <td>
              <b>Extreme</b>
            </td>
            <td>Far</td>
          </tr>
        </tbody>
      </table>
      <p>
        A standard move action doesn't use stamina. You can choose to spend 1
        stamina to use a dash action, which allows you to move at the next speed
        tier. For example, if your speed is moderate, you can dash to move to a
        near distance.
      </p>
      <p>
        If your body drops below half health, your speed decreases by one
        rating. For example, if your walking speed is moderate, upon your body
        dropping below half health, your walking speed drops to slow. At zero
        health, you are unable to move unassisted.
      </p>
    </Body>
    <H3>Senses</H3>
    <Body>
      <p>
        You can’t interact with what you can’t detect—your senses determine how
        well you perceive the world around you. There are eight primary senses:
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
        Different creatures are capable of different senses, and their level in
        the corresponding skill determines their adeptness in that sense. The
        environment also plays a role in determining how well the creature can
        perceive their surroundings. A dark cave makes things hard to see. A
        windy night messes with your ability to track scents. The GM decides how
        effective each sense is depending on the situation and the result of
        your skill check for that sense.
      </p>
    </Body>
    <H3>Language</H3>
    <Body>
      <p>
        There are many different languages of the world. If two creatures share
        a language, they can communicate normally. If they don’t, well… good
        luck. You might be relying on gestures, drawings, or elaborate games of
        charades. Some psychic abilities allow characters to understand and
        communicate regardless of language barriers. Otherwise, you might just
        have to make do with pointing and hoping for the best.
      </p>
    </Body>
    <H2>Skill Checks</H2>
    <Body>
      <p>
        As you step into the game, the GM will present various scenarios and
        challenges along the way. Depending on your decisions and what the GM
        throws at you, you may need to make skill checks. Whether you’re trying
        to charm a merchant, track a beast, or break down a locked door, your
        character’s skill check determines how well they perform certain tasks.
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
        challenging, risky, or uncertain, you’ll likely need to roll for it. For
        example, if you say:
      </p>
      <ul className="list-disc ml-4">
        <li>
          <i>“I walk across the room.”</i> → No roll needed.
        </li>
        <li>
          <i>“I sprint across a crumbling rope bridge while dodging arrows.”</i>{" "}
          → Definitely a roll.
        </li>
      </ul>
      <p>
        The skill you roll depends on how you approach the problem. For example:
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
        If you have any bonuses (or penalties), add (or subtract) them from your
        roll. If you don’t have a level for the required skill, then you take 1
        as the result.
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
        If your roll is equal to or greater than the target number, you succeed.
        If not, well, the GM decides what happens next. Failure doesn’t always
        mean instant disaster—but it does mean things don’t go to plan. Instead
        of breaking down the door, maybe you hurt your shoulder. Instead of
        sneaking past the guards, maybe you step on a creaky floorboard. This is
        where the GM gets to have some fun.
      </p>
    </Body>
    <H2>Luck</H2>
    <Body>
      <p>
        Sometimes, life doesn’t come down to skill—it comes down to sheer dumb
        luck. Luck checks are used when an outcome is completely random with no
        skill involved. Does the abandoned shack have treasure or spiders?
        You’re running from an enemy and leap off a cliff—does a conveniently
        placed tree branch break your fall?
      </p>
      <p>
        A luck check is a simple d20 roll. Higher rolls mean better outcomes,
        and lower rolls mean things go pear-shaped.
      </p>
    </Body>
    <H2>Combat</H2>
    <Body>
      <p>
        Sometimes, words fail. And when they do, there’s always combat. Combat
        can be initiated by anyone, including the GM. When a battle takes place,
        combat rules are applied.
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
        quick and flexible, encouraging creativity. The party that initiated the
        combat acts first, and then the opposing party goes next. Player turns
        go clockwise around the table, while the GM controls enemies on their
        turn. Each round represents about 5 seconds in the game world.
      </p>
    </Body>
    <H3>Actions</H3>
    <Body>
      <p>
        On their turn, each character may perform as many actions as specified
        by the action count on their character sheet. Actions may incur damage,
        inflict statuses, or provide buffs.
      </p>
      <p>
        Every character has a list of actions that they have mastered, and can
        unlock more as they progress their paths. You can perform the actions
        you’ve learnt on your turn, or you can get creative and try something
        different. For example, you could try burning a bridge before your
        opponent crosses, or lasso a charging creature with your rope. In that
        case, describe your action to the GM and make a skill check to see if
        you succeed on it. GM will decide the outcome of your action based on
        your description and skill check result.
      </p>
      <p>
        Some actions cost stamina, while others don't. Be mindful—if you burn
        through all your stamina, you might find yourself too exhausted to fight
        when it really matters.
      </p>
    </Body>
    <H3>Movement</H3>
    <Body>
      <p>
        Moving is an action available to all characters. The distance you can
        reach in one turn is determined by your speed rating for the locomotion
        type you're using (walk, swim, climb, or fly). Your speed rating
        determines how much stamina it costs to reach different distances—refer
        to the stamina cost table in the Speed section above.
      </p>
      <p>
        Some terrain slows movement (mud, dense bush), while others make it
        risky (unstable bridges, slippery surfaces). The GM will let you know if
        the ground under your feet is about to betray you.
      </p>
    </Body>
    <H3>Range and area of effect</H3>
    <Body>
      <p>
        Each action has a range, which determines how far the target point can
        be located. To target a location or creature, it must be within your
        perception:
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
            <td>You are the target</td>
          </tr>
          <tr>
            <td>
              <b>Close</b>
            </td>
            <td>Within 2m</td>
          </tr>
          <tr>
            <td>
              <b>Near</b>
            </td>
            <td>Within 10m</td>
          </tr>
          <tr>
            <td>
              <b>Far</b>
            </td>
            <td>Within 50m</td>
          </tr>
        </tbody>
      </table>
      <p>
        Some actions cover an area that can hit multiple targets. The area of
        effect determines the maximum size of the area affected by the action:
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
            <td>Affects one creature or object</td>
          </tr>
          <tr>
            <td>
              <b>Close area</b>
            </td>
            <td>Affects a close-sized area from the target point</td>
          </tr>
          <tr>
            <td>
              <b>Near area</b>
            </td>
            <td>Affects a near-sized area from the target point</td>
          </tr>
          <tr>
            <td>
              <b>Far area</b>
            </td>
            <td>Affects a far-sized area from the target point</td>
          </tr>
        </tbody>
      </table>
      <p>
        When using an action with an area of effect, the caster chooses the
        shape of the affected area (such as a circle, cone, line, or square).
        The shape must be regular and enclosed. All creatures within that area
        are affected, including both allies and foes. The size of the shaped
        area cannot exceed the maximum size specified by the action's area of
        effect.
      </p>
      <p>
        Obstructions can block attacks—if a wall, tree, or sturdy shield is in
        the way, the GM may rule that your action doesn't hit as expected.
      </p>
      <p>
        Hidden enemies can't be directly targeted, but they can be hit by area
        of effects if you're lucky enough to guess their location.
      </p>
    </Body>
    <H3>Hitting a target</H3>
    <Body>
      <p>
        Landing an attack isn’t always guaranteed—opponents can counter, dodge
        or resist attacks:
      </p>
      <ul className="list-disc ml-4">
        <li>
          <b>Counter</b>: The defender rolls the same skill check as the
          attacker to counter the attack.
        </li>
        <li>
          <b>Dodge</b>: If the attack is physical and doesn’t cover a large
          area, the defender can roll an agility check to dodge it.
        </li>
        <li>
          <b>Resist</b>: If it is a psychic attack, the defender can roll a
          willpower check to resist the effect.
        </li>
      </ul>
      <p>
        If the attacker rolls higher than the defender, the attack hits and the
        defender takes the effect of the action. If the defender rolls equal to
        or higher, they avoid the attack.
      </p>
      <p>
        Every character has an evasions count on their character sheet. The
        evasions count determines the number of attacks they can attempt to
        evade in one round of combat.
      </p>
    </Body>
    <H3>Statuses</H3>
    <Body>
      <p>
        Some actions inflict statuses upon their foes. All statuses, except for
        burning, last only one round.
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
              Loses an evasion until next turn. If no evasions, loses an action.
              Can be stacked.
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
              Armour increases by specified amount/type until next turn. Can be
              stacked.
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
              Takes 1d8 fire damage at start of turn. Can use action to douse
              flame.
            </td>
          </tr>
          <tr>
            <td>
              <b>Invisible</b>
            </td>
            <td>
              Cannot be detected through sight or infrared sight until next
              turn.
            </td>
          </tr>
          <tr>
            <td>
              <b>Silent</b>
            </td>
            <td>
              Cannot be detected through hearing or tremor hearing until next
              turn.
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
            <td>Cannot be detected by psychic sense until end of next turn.</td>
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
            <td>Caster controls perception to alter reality for target.</td>
          </tr>
          <tr>
            <td>
              <b>Hypnotised</b>
            </td>
            <td>
              Target cannot harm caster, must obey commands. Removed if attacked
              by opposing side.
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
            <td>Must use at least one action to attempt to harm the caster.</td>
          </tr>
        </tbody>
      </table>
    </Body>
    <H3>Resolving Combat</H3>
    <Body>
      <p>
        When a character loses all of their physical or mental health, they are
        out of the combat. Once all characters in the same party have been
        defeated or surrender, they lose the combat. The victorious party
        chooses whether to kill, capture or leave the losers in their place. If
        the players lose the combat, it’s up to the GM to decide their fate.
      </p>
      <p>
        At any point during their turn, a character can attempt to flee. It is
        up to the GM discretion to determine whether a character has
        successfully fled the combat. If successful, then the character is out
        of the combat and their fate isn't determined by their opponents.
      </p>
    </Body>
    <H2>The World</H2>
    <Body>
      <p>
        Beyond the game mechanics lies a rich world shaped by ancient beings,
        diverse cultures, and powerful magic. Understanding the basics of this
        setting will help you create characters that feel at home in the world
        and give you context for the adventures you'll face.
      </p>
    </Body>
    <H3>Deities and Religion</H3>
    <Body>
      <p>
        Many cultures across the world believe in one or more omnipotent gods
        who created the world and reside in the heavens. These deities are often
        credited with shaping the land, guiding mortal destiny, and maintaining
        cosmic balance. Despite the widespread nature of these beliefs, there is
        no definitive evidence that such gods exist. The true origin of the
        world remains unknown, and its creation is left open to interpretation.
      </p>
      <p>
        However, there are some primordial beings, or simply primordials, that
        have existed since the earliest ages of the world and are believed to
        predate all known civilizations. Each primordial is tied to a specific
        region or natural domain, such as the Rainbow Serpent of Downunda. They
        exhibit powers and abilities far beyond mortal understanding, performing
        acts of magic that appear to defy known principles.
      </p>
      <p>
        The primordials are often revered as deities by the local cultures that
        inhabit their regions. However, their nature and motives differ
        significantly from those of the supposed heavenly gods. They do not
        demand worship, issue commandments, or intervene in mortal affairs for
        moral reasons. Instead, they are generally neutral forces concerned with
        maintaining balance within their respective domains. Their actions are
        not guided by concepts of good or evil, but by the preservation of
        natural order.
      </p>
      <p>
        Direct encounters with primordials are rare. Most remain hidden or
        dormant for long periods, emerging only during major world-changing
        events or calamities. When they do act, their influence can alter
        landscapes, shift climates, or disrupt civilizations. While they possess
        great power, they are not omniscient or omnipresent. Their understanding
        of the world is vast but limited to their own domains and purposes.
      </p>
      <p>
        In the present age, the majority of people view both the heavenly gods
        and primordials equally as divine beings through the lens of faith. For
        the Game Master, the existence and origins of both the gods and the
        primordials are intentionally ambiguous. Each campaign may choose to
        treat them as literal deities, ancient beings, or forces of nature given
        form, depending on the themes the GM wishes to explore.
      </p>
    </Body>
    <H3>Magic</H3>
    <Body>
      <p>
        Magic refers to the powers and phenomena that exist beyond the natural
        laws of the real world. To the beings that inhabit this fantasy world,
        the laws of magic are fairly understood and part of their scientific
        understanding of their world. All creatures can learn and harness the
        powers of magic, but just like many other skills, doing so requires
        significant effort and practice. Some creatures may also be naturally
        better at performing some forms of magic than others.
      </p>
      <h4>Spirits</h4>
      <p>
        Every living creature has a spirit residing within them. A creature's
        body is a vessel for the spirit that allows the spirit to tangibly
        interact with the world. When a creature dies, their body decays but
        their spirit ventures to an afterlife where they'll exist for the rest
        of eternity. These spirits maintain the individual identity, behaviours
        and memories of their deceased former self.
      </p>
      <p>
        A creature's actions during their life has no bearing on their spirit's
        wellbeing in the afterlife. There is no heaven or hell, instead there is
        the Spirit Realm where all spirits reside. Spirits in this realm can
        observe events in the physical world and interact with living creatures
        by influencing their dreams and instincts.
      </p>
      <h4>Mana</h4>
      <p>
        Living spirits possess a life force called mana. This force enables
        creatures to create and control the flow of energy outside of the
        traditional laws of nature. Doing so however consumes mana, so the
        amount of energy that a creature can cast is limited by the amount of
        mana they possess. Mana is regenerated overtime through rest and food.
        Creatures can also transfer their mana from one to another, either
        willingly to help an ally or maliciously to weaken their foe and
        strengthen themself. If a creature loses all their mana, then they'll
        pass out. When a creature's body dies, all mana is lost and cannot be
        regained.
      </p>
      <h4>Psychic Waves</h4>
      <p>
        Cognitive thought produces a phenomenon called psychic waves. These
        waves permeate through space without a medium and are unimpeded by
        matter or other forms of energy. Other spirits can detect psychic waves
        and use them to read the minds of others. They can also emit psychic
        waves that interfere with other minds, influencing their thoughts,
        perceptions and feelings.
      </p>
      <h4>Portal Stones</h4>
      <p>
        Although no creatures possess the power to teleport, there exists some
        rare minerals called portal stones that contain this ability. When a
        portal stone fractures, it instantly teleports everything within a
        sphere to a new location. The area of effect is centred on the stone and
        the radius is dependent on the size of the stone, with larger stones
        having a larger radius. The distance travelled is proportional to the
        size of the crack. A small crack will only teleport the creatures tens
        of metres, whilst shattering the stone can teleport them several
        kilometres. The nautical direction which they teleport to depends on the
        type of mineral. Some minerals only teleport north, others east, and so
        on, whilst others teleport in a random direction. Stones will never
        teleport below ground.
      </p>
      <h4>Branches of Magic</h4>
      <p>
        The study and training in magical arts is broken into four main branches
        of teaching:
      </p>
      <ul className="list-disc ml-4">
        <li>Sorcery: Creating and bending energy</li>
        <li>Morphing: Shapeshifting and healing</li>
        <li>Psionics: Telepathy and hypnosis</li>
        <li>Evocation: Communing with and summoning the dead</li>
      </ul>
      <p>
        <b>Sorcery</b>: Sorcerers use their mana to manifest and manipulate
        energy inside and around their body. The forms of energy that one can
        control include light, sound, heat, electric and kinetic. Novice
        sorcerers are more likely to be limited to producing small lights, light
        gusts of winds and minor electric shocks, whilst experienced casters can
        perform more complex and intense actions such as apparitions, explosions
        and lightning.
      </p>
      <p>
        Sorcery requires refined motion of the hands and feet to control the
        flow of energy outside the body. Controlling energy within the body
        however doesn't require any movement. Both acts of magic however require
        a significant amount of concentration from the caster.
      </p>
      <p>
        <b>Morphing</b>: Morphing is the branch of magic that focuses on
        maximising the physical potential of a creatures body through complete
        control of their internal structure and body chemistry. An experienced
        morpher can rearrange cells to grow new limbs and organs, heighten their
        senses and radically recover from wounds, infections and poisons.
      </p>
      <p>
        Morphing is a gradual process. Simple biological changes, such as
        sealing a small wound, should only take a few seconds to complete, but
        more complex actions such as growing a new limb can take minutes to
        hours depending on the skill of their caster. During this time, the
        caster needs to mentally focus on the transition.
      </p>
      <p>
        Matter cannot be created out of thin air, so if a morpher wants to
        increase their size, they need to consume large amounts of foods to gain
        the mass required to build new cells. Similarly, matter cannot be
        destroyed, so to decrease their size, a creature will shed parts of
        their body, whether it be skin, hair, limbs or blood, to lose the
        necessary amount of mass. To speed up the metamorphosis process, a
        creature could attach body parts of another creature to their body
        instead of growing it themself. For example, instead of spending hours
        of time and food growing a monkey tail, the morpher could attach a tail
        from a dead monkey to their body in a few minutes. The likelihood of
        success of this approach depends on the condition of the dead creature
        and skill of the morpher.
      </p>
      <p>
        Although morphing on adults is generally a common and safe practice,
        morphing children comes with more risk. The younger the subject, the
        higher chance of problems occurring. Morphing an unborn children has the
        highest likelihood of error and the highest ramifications, hence it is
        condemned by most societies.
      </p>
      <p>
        <b>Psionics</b>: The art of reading and influencing the mind through
        psychic waves falls under the branch of psionics. Novice practitioners
        may sense the feelings of creatures nearby and create minor illusions,
        whilst a skilled psychic may be capable of detecting the thoughts of a
        creature miles away. The most advanced psychics can control their minds
        of their subjects. However, mind control is outlawed by most societies.
      </p>
      <p>
        Similar to the other branches, a caster needs to concentrate to perform
        their psychic feats. Their ability may also be affected by how many
        creatures are nearby. The more nearby creatures, the more psychic noise
        and the harder it is to focus on a single creature.
      </p>
      <p>
        <b>Evocation</b>: Although difficult, living creatures can commune with
        spirits in the afterlife. To do so requires training and practice in the
        evocation branch of magic. This branch typically requires the performer
        to have a clear, focused mind. Touching fragments of their deceased body
        or items they once possessed, as well as standing at a location where
        they often resided in, can increase the likelihood of communing with the
        spirit of interest. However, the longer that the creature has been dead,
        the harder it is commune with their spirit.
      </p>
      <p>
        An experienced evoker can open a gateway to the Spirit Realm to summon a
        spirit into the material plane. The spirit appears as an incorporeal,
        radiant creature formed of primal energy. Despite being metaphysical,
        summoned spirits can manipulate the flow of energy around them to exert
        forces, allowing them to interact with the physical world. The spirit
        exists for as long as the evoker concentrates on the summoning.
      </p>
      <p>
        The most skilled and sinister evokers seek to defy death by learning the
        forbidden art of resurrection. There are two forms of resurrection; true
        and false resurrection. True resurrection involves summoning a dead
        spirit into a living body, and in the process, banishing the living
        creature's spirit to the afterlife. The resurrected spirit maintains
        their identity, behaviours and memories of their past life despite
        having a different physical body. False resurrection involves bounding a
        dead spirit to a non-living object. Without a real living body, these
        spirits struggle to exist in a harmonious state. In most cases they
        quickly deteriorate from their original self to become a savage and
        grotesque monstrosity called a wight, losing their own memories and
        identity. In this form they appear as an incorporeal phantom attached to
        the object they are bound to. The only way to defeat a wight and free
        the spirit from their suffering is to destroy the object that the spirit
        is bound to. Once freed, the spirit can return to the afterlife as their
        original self. Both forms of resurrection are considered evil and
        therefore forbidden from practice by many cultures. These forms of magic
        tend to be difficult to cast, and when done wrong, can have dire
        consequences.
      </p>
    </Body>
    <H3>Languages</H3>
    <Body>
      <p>
        People across the world communicate through different languages that
        form part of their cultural identities and traditions. These languages
        are grouped into families to describe the similarity in sound,
        expression and origin.
      </p>
      <table className="md:mx-4">
        <thead>
          <tr>
            <th>Language Family</th>
            <th>Native Speakers</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Chitter</b>
            </td>
            <td>Avian</td>
            <td>
              A quick, rhythmic language of chirps and trills, reliant on
              precise pitch and timing.
            </td>
          </tr>
          <tr>
            <td>
              <b>Common Sign</b>
            </td>
            <td>-</td>
            <td>
              Conventional sign language using deliberate movements, hand
              shapes, and facial expressions that convey meaning without sound.
            </td>
          </tr>
          <tr>
            <td>
              <b>Common Tongue</b>
            </td>
            <td>Human, Goblin and Sprite</td>
            <td>
              Conventional spoken tongues using familiar vocal patterns of tone,
              consonant, and vowel.
            </td>
          </tr>
          <tr>
            <td>
              <b>Grumble</b>
            </td>
            <td>Giant</td>
            <td>
              Deep, resonant vibrations that travel through air and ground
              alike.
            </td>
          </tr>
          <tr>
            <td>
              <b>Hissic</b>
            </td>
            <td>Reptilian</td>
            <td>
              A fluid language of drawn-out hisses, sharp flicks, and rasping
              undertones.
            </td>
          </tr>
          <tr>
            <td>
              <b>Scented</b>
            </td>
            <td>Floret</td>
            <td>
              A complex blend of fragrances and subtle colour shifts forming
              layered, sensory phrases.
            </td>
          </tr>
          <tr>
            <td>
              <b>Squawk</b>
            </td>
            <td>Avian</td>
            <td>
              A loud, erratic speech marked by squawks, mimicry, and rapid tonal
              shifts
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Although languages are categorised into families, it is important to
        note that they do differ significantly across regions. For example, a
        Yowie of Downunda speaking their Grumble language would not understand
        the Grumble language spoken by Trolls of Engloria, and vice versa. Even
        individuals from nearby communities may have trouble communicating due
        to differences in dialects, accents and idioms. Local languages often
        include unique expressions and terminology specific to the local ecology
        and customs.
      </p>
      <p>
        In addition to one's native language, many learn the bridge language of
        their area. Bridge languages serve as the principal medium for trade,
        governance and diplomacy, enabling communication across community
        boundaries. Generally the Common Tongue is used as a verbal bridge
        language, and the Common Sign language for non-verbal communication.
        Bridge languages tend to be named after the area or people who speak
        traditionally it. The main bridge languages spoken in Downunda are
        Dharrigal and Englorian.
      </p>
    </Body>
    <H3>Continents and Cultures</H3>
    <Body>
      <p>
        The world is vast, containing many continents and cultures. Your
        adventures will most likely take place in Downunda, but knowing about
        the wider world helps you understand where different peoples come from
        and how they ended up where they are today.
      </p>
      <h4>Downunda</h4>
      <p>
        Downunda is an expansive island located to the east of the Continent,
        characterised by tropical coasts, arid deserts, and dense interior
        forests. Its geography ranges from red sand plains and rocky gorges in
        the west to lush wetlands and mountain ranges in the east. The region's
        flora and fauna are unique, with many species found nowhere else in the
        world. Downunda was once connected to the Continent by Fireridge land
        bridge until the Great Storm flooded the crossing, transforming it to an
        archipelago.
      </p>
      <p>
        <b>The Dharrigal</b>: The Dharrigal are various indigenous peoples whose
        ancestral lands lie within the region of Downunda. They encompass a
        diverse array of cultures and languages that are united through shared
        history, spiritual beliefs, and customary practices. Dharrigal society
        is made up of several peoples, including humans, birim, karrakans,
        wattalangs and yowies. Though these peoples maintain their own customs
        and dialects, intercommunity bonds are strong, reinforced through shared
        festivals, trade, and spiritual rites. Kinship networks often cross
        species lines, and it is not uncommon to find multi-species mobs living
        cooperatively within a single Country.
      </p>
      <p>
        "Country" refers to the land, seas, and waterways to which Dharrigal
        people are spiritually and culturally connected. The term encompasses a
        complex web of meaning involving law, language, kinship, identity,
        spirituality, and sustenance. Dharrigal belief holds that the spirits of
        their ancestors dwell within the landscape, particularly in trees and
        animals. Elders serve as mediators and arbiters, interpreting the will
        of the spirits to resolve disputes.
      </p>
      <p>
        Central to Dharrigal spirituality is the Rainbow Serpent, referred to by
        different names in different mobs. She is considered the progenitor of
        the Dharrigal and the creator of the land. Both life-giving and
        potentially destructive if angered, she is a central figure in spiritual
        lore. The Dharrigal people also believe that the Rainbow Serpent was the
        cause of the Great Storm that ended the Englorian Invasion—retribution
        for the destruction that the Englorian Empire had caused to the lands,
        waters and peoples.
      </p>
      <p>
        For countless generations, Downunda was divided among numerous small
        nations, each with its own customs, languages, and laws. These nations
        were eventually dismantled following the Englorian Invasion. Tensions
        between the expanding Englorian Empire and the Dharrigal nations arose
        swiftly, escalating into trade sanctions, looting, guerrilla warfare,
        and, in severe cases, the complete genocide of communities. Though
        casualties occurred on both sides, the superior numbers and organisation
        of the Englorian forces led to the widespread subjugation of the
        Dharrigal. Nevertheless, many Dharrigal communities endured—some
        remaining in isolated enclaves, others absorbed into Englorian society
        or displaced to far-off lands.
      </p>
      <p>
        <b>The Englorians</b>: Englorian is a term used to denote people with
        ancestral ties to Engloria. Englorian society in Downunda is a patchwork
        of human, hob, gnome and skerrig settlements. Humans form the majority,
        often holding positions of power in urban centers and agricultural
        regions, while hobs, gnomes, and skerrigs contribute to the economy
        through labor, craftsmanship, and maritime trade.
      </p>
      <p>
        Englorians first arrived in Downunda to establish a new outpost for
        their expanding empire. The first arrivals were mostly convicts who were
        ordered to construct the roads and buildings of the new towns. The
        Englorians soon came into conflict with the Dharrigal people as they
        encroached onto their land. After many years of struggle, the Englorian
        Empire conquered most of Downunda, and declared it as a state of the
        Empire.
      </p>
      <p>
        The Englorian expansion ended with the Great Storm. Many towns and farms
        were flooded, survivors were separated from their families and
        communities, and the government crumbled under the logistical and
        economical nightmares that arose from the event. In the chaos, a coup in
        the capital of Engloria resulted in a change of government, and the
        Downunda colony was ultimately forfeited. Since the Great Storm, the
        Downunda Englorians have been physically and socially distanced from
        mainland Englorians. Some Englorians travelled back to their homeland by
        boat, but many have stayed in Downunda and maintained the towns built
        without jurisdiction of the former empire.
      </p>
      <p>
        Englorians worship the goddess Eva, perceived as a mother figure who
        watches over the world and guides the good and righteous. She is often
        personified as a beacon or guiding light and commonly symbolised as a
        white stag. Every morning Englorians are expected to congregate at a
        church, where sermons pay reverence to the gods and recount the deeds of
        legendary heroes as lessons in courage, fairness, and perseverance.
      </p>
      <h4>Engloria</h4>
      <p>
        Engloria is a temperate region in the east known for its rolling hills,
        misty forests, and fertile river valleys. The landscape is shaped by
        centuries of cultivation, with farmland, stone villages, and fortified
        towns spread across the countryside. The climate is cool and wet,
        supporting oak and birch woodlands as well as expansive meadows.
        Englorian people and culture originated here. At its peak, the state was
        a highly sophisticated empire, with many major cities and countless
        towns.
      </p>
      <h4>Other Lands</h4>
      <p>
        Beyond Downunda and Engloria lie other distant lands, each with their
        own peoples and traditions:
      </p>
      <p>
        <b>Mennan</b>: The Great Sand Desert of Mennan is home to the Mennanese,
        commonly referred to as the Sand Nomads. They have adapted to one of the
        harshest environments on the Continent, developing a culture deeply tied
        to mobility, trade, and survival in arid conditions. The majority of
        Mennanese are falqar, traveling in family bands or small caravans that
        move seasonally between oases and trade hubs. Trunkirds serve as the
        principal beasts of burden and are treated with great respect—it is
        illegal to harm or eat them. The Mennanese worship Aqara, the Avatar of
        the Sky, who takes the form of a giant eagle and is believed to be the
        protector of Mennan.
      </p>
      <p>
        <b>Tolrus</b>: The Tolrusians are the native peoples of the northern
        expanse of Tolrus, a region characterised by its vast tundra, dense
        forests, and harsh winters. Tolrusian culture reflects adaptation to a
        cold and often unforgiving environment, placing emphasis on resilience,
        cooperation, and reverence for nature's power. Tolrusian society is
        predominantly human, with populations concentrated in fortified towns,
        trade outposts, and rural homesteads. Tolrusian spirituality centres on
        animism and reverence for ancestral spirits. Natural forces such as
        wind, frost, and fire are believed to possess consciousness and will.
      </p>
      <p>
        <b>Shan Guo</b>: Shan Guo lies west of the Continent. The land is
        defined by dramatic limestone peaks, river basins, and fertile plains.
        Shan Guo is heavily urbanised, with walled cities and mountain
        monasteries linked by trade routes that follow the great rivers. The
        Longren are known for their scholarly discipline, intricate
        craftsmanship, and strong moral code centred on harmony, order, and
        enlightenment. They worship a pantheon of gods believed to govern the
        natural and spiritual order of the world, with central reverence for
        Xinshi, a divine messenger who mediates between mortals and gods.
      </p>
      <p>
        <b>Rajakha</b>: Rajakha is a tropical peninsula bordered by mountains
        and surrounded by warm seas. Its geography includes dense rainforests,
        fertile plains, and monsoon-fed rivers that sustain abundant
        agriculture. The region's economy is based on rice, fruit, and spice
        cultivation, along with maritime trade that connects it to neighbouring
        lands. Settlements are organised around temple complexes that serve both
        religious and civic functions.
      </p>
    </Body>
  </>
);

export function Handbook() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="sm:max-w-4xl sm:mx-auto h-full">
        <WikiPage
          id="handbook"
          title="Handbook"
          summary={summary}
          main={content}
        />
      </div>
    </motion.div>
  );
}
