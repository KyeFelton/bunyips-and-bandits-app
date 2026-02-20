import { Body, H2, H3, WikiPage } from "../../components/WikiPage";
import { SkillIcon } from "../../components/icons/SkillIcon";
import { ArmourIcon } from "../../components/icons/ArmourIcon";
import { SpeedIcon } from "../../components/icons/SpeedIcon";
import { SenseIcon } from "../../components/icons/SenseIcon";
import { DamageType } from "../../enums/DamageType";
import { SkillType } from "../../enums/SkillType";
import { Locomotion } from "../../enums/Locomotion";
import { SenseType } from "../../enums/SenseType";
import * as Skills from "../../models/skills";
import summonerImage from "../../images/handbook/summoner.png";
import bunyipImage from "../../images/handbook/bunyip.png";

const main = (
  <>
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
        Before setting off on your first adventure, you'll need to create a
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
          movement, senses, size, armour, and skill modifiers.
        </li>
        <li>
          <b>Choose your background</b>: Your background represents your
          character's past profession and upbringing. It grants expertise in
          specific skills, starting them at level 5 instead of the usual level
          1, and provides special traits related to your profession. For
          example, a farmer has expertise in strength and nature and gains
          advantage on animal and plant handling checks, while a medic has
          expertise in intelligence and psychology and can attempt to
          resuscitate the recently dead.
        </li>
        <li>
          <b>Choose a magic skill</b>: Select one magic skill you have been
          trained in. This skill starts at level 1, allowing you to use basic
          abilities. As you progress, you'll unlock more powerful traits and
          actions. Magic skills include pyro, electric, sonic, radiant, kinetic,
          biotic, psychic, and spirit.
        </li>
        <li>
          <b>Describe your character</b>: Think about who they are beyond the
          numbers on the sheet. What's their name? What do they look like?
          What's their biography and personality? Why have they taken to the
          adventuring life instead of settling down somewhere safe? The GM will
          work with you to weave your character into the world, ensuring they
          have a reason to be involved in the story.
        </li>
      </ol>
    </Body>
    <H3>Species</H3>
    <Body>
      <p>
        Your species affects your character's base stats and natural abilities.
        Some species are tougher, others are faster, and some have heightened
        senses. Each species also provides skill modifiers that reflect their
        natural strengths and weaknesses. What you choose will influence how you
        experience the world, both in terms of game mechanics and role-playing
        opportunities.
      </p>
    </Body>
    <H3>Skills</H3>
    <Body>
      <p>
        Skills determine how well your character performs various actions. Each
        skill is categorized as either physical or mental, which affects how
        your character's health impacts their performance.
      </p>
      <p>
        Your skill levels range from 1 to 10. All base skills (like strength,
        agility, intelligence) start at level 1 for all characters. Your
        background grants expertise in specific skills, starting them at level 5
        instead of level 1.
      </p>
      <p>
        Skill modifiers are separate from skill levels. Your species provides
        skill modifiers reflecting natural abilities—for example, giants have +3
        to strength but -2 to agility. Traits and items can also provide skill
        modifiers. These modifiers are added to your roll but do not affect your
        skill level.
      </p>
      <p>
        Magic skills are not innate to most species and must be unlocked. To
        unlock one of these skills, you must either choose it as a starting
        skill or seek out training in the world. Training requires spending one
        month of in-game time with a mentor or at an institution such as a magic
        school, guild, or dojo. The GM will determine what training
        opportunities exist in the setting. You can only train one magic skill
        at a time, and successfully completing the training unlocks that skill
        at level 1.
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
              <b>{SkillType.Strength}</b>
            </td>
            <td>{Skills.Strength.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Agility}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Agility}</b>
            </td>
            <td>{Skills.Agility.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Dexterity}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Dexterity}</b>
            </td>
            <td>{Skills.Dexterity.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Stealth}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Stealth}</b>
            </td>
            <td>{Skills.Stealth.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Pyro}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Pyro}</b>
            </td>
            <td>{Skills.Pyro.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Electric}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Electric}</b>
            </td>
            <td>{Skills.Electric.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Kinetic}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Kinetic}</b>
            </td>
            <td>{Skills.Kinetic.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Radiant}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Radiant}</b>
            </td>
            <td>{Skills.Radiant.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Sonic}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Sonic}</b>
            </td>
            <td>{Skills.Sonic.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Biotic}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Biotic}</b>
            </td>
            <td>{Skills.Biotic.description}</td>
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
              <b>{SkillType.Intelligence}</b>
            </td>
            <td>{Skills.Intelligence.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Nature}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Nature}</b>
            </td>
            <td>{Skills.Nature.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Willpower}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Willpower}</b>
            </td>
            <td>{Skills.Willpower.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Charisma}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Charisma}</b>
            </td>
            <td>{Skills.Charisma.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Psychology}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Psychology}</b>
            </td>
            <td>{Skills.Psychology.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Perception}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Perception}</b>
            </td>
            <td>{Skills.Perception.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Psychic}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Psychic}</b>
            </td>
            <td>{Skills.Psychic.description}</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SkillIcon
                type={SkillType.Spirit}
                className="inline-block mr-1 pb-1"
              />
            </td>
            <td>
              <b>{SkillType.Spirit}</b>
            </td>
            <td>{Skills.Spirit.description}</td>
          </tr>
        </tbody>
      </table>
    </Body>
    <H3>Backgrounds</H3>
    <Body>
      <p>
        Your background represents your character's past profession and
        upbringing before becoming an adventurer. Backgrounds grant expertise in
        specific skills, starting them at level 5 instead of the usual level 1.
        Each background also provides special traits that give you advantages in
        situations related to your past profession.
      </p>
      <p>
        For example, the farmer background grants expertise in strength and
        nature, reflecting years of physical labor and working with animals and
        crops. Farmers also have advantage on checks involving animal and plant
        handling. The medic background grants expertise in intelligence and
        psychology, along with advantage on medical checks and the ability to
        resuscitate creatures who have recently died.
      </p>
    </Body>
    <H3>Progression</H3>
    <Body>
      <p>
        As you adventure, your character improves through practice and
        experience. Unlike traditional levelling systems, your character grows
        by actively using their skills in challenging situations. When you push
        your abilities to their limits and achieve exceptional results, you
        become better at that skill.
      </p>
      <p>
        Each time you perform a skill check and roll the maximum value on your
        die (a critical success, abbreviated as crit), mark it down on your
        character sheet. Once you achieve two critical successes with the same
        skill, you can upgrade that skill by one level.
      </p>
      <p>
        To prevent rapid skill progression through repeated use, each skill can
        only progress once between rests. If you roll a second critical success
        on a skill that has already had a critical success since your last rest,
        it still counts as a critical success for the purposes of that action,
        but it won't contribute toward leveling up that skill.
      </p>
      <p>
        All skills have a maximum level of 10. Once you reach level 10 in a
        skill, further critical successes with that skill won't increase it
        further, though they still count as critical successes for the purposes
        of that action.
      </p>
      <p>
        As your skills improve, you may unlock new abilities. For instance,
        advancing your pyro skill can unlock the infrared sight trait or the
        flamethrower action.
      </p>
    </Body>
    <H3>Health</H3>
    <Body>
      <p>
        Your character isn't invincible—adventuring comes with its fair share of
        scrapes, bruises, and mind-melting horrors. The game tracks three
        aspects of your character's health - body, mind and stamina.
      </p>
      <p>
        One way to recover health is through resting. To rest, you need to spend
        several hours of inactivity at a settlement with beds and food, such as
        a campground, inn or hospital. Resting restores all your stamina. If you
        have at least half your maximum stamina before resting, then you recover
        2 physical and mental health after the rest. If you have less than half
        your maximum stamina, tnen you only recover 1 health per rest. If you
        have no stamina left, you can't recover any health.
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
        If your body hits zero, you're knocked unconscious and potentially dead.
        Another player must check your vital signs to determine your fate. When
        they do, roll any die—if the result is even, you're alive and regain
        conscious; if odd, you're dead. Each time you take damage whilst on zero
        health, you must roll a die to determine whether you die.
      </p>
      <h4>Mind</h4>
      <p>
        Mind refers to your mental health, tested by terrifying encounters and
        psychic manipulation. Certain experiences—like witnessing the death of
        an ally—can drain your mind.
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
        Upon your mental health dropping to zero health, you lose control. Roll
        a d4 and then take the matching condition from the list below. The
        condition lasts until your mind recovers at least 1 health.
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
          <b>Amnesia</b>: You forget who you are and why you're here.
        </li>
        <li>
          <b>Paranoia</b>: You're overwhelmed with fear, easy to startle and
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
        You can't interact with what you can't detect—your senses determine how
        well you perceive the world around you. There are six primary sense
        types:
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
              <SenseIcon type={SenseType.Sight} className="inline-block mt-1" />
            </td>
            <td>
              <b>Standard sight</b>
            </td>

            <td>Ability to see the visible light spectrum.</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SenseIcon
                type={SenseType.InfraredSight}
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
              <SenseIcon
                type={SenseType.Hearing}
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
              <SenseIcon
                type={SenseType.TremorHearing}
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
              <SenseIcon
                type={SenseType.Smell}
                className="inline-block mr-1 pb-1 h-5"
              />
            </td>
            <td>
              <b>Smell</b>
            </td>

            <td>Detection of airborne odours.</td>
          </tr>
          <tr>
            <td className="pr-0">
              <SenseIcon
                type={SenseType.Psychic}
                className="inline-block mr-1 pb-1 h-5"
              />
            </td>
            <td>
              <b>Psychic sense</b>
            </td>

            <td>Sensing the presence of cognitive thinking.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Different creatures have different sensory strengths. Each species has
        primary and secondary senses. If you're using a primary sense, you roll
        your Perception check normally. If you're using a secondary sense, you
        roll at disadvantage. If you lack a sense entirely, you cannot make the
        check at all.
      </p>
      <p>
        When the GM calls for a Perception check, they specify which sense is
        being used, such as sight for spotting a hidden creature, hearing for
        detecting faint footsteps, or smell for tracking a scent trail.
      </p>
      <p>
        The environment also affects perception. A dark cave makes sight checks
        harder unless you have infrared vision. A windy night makes smell checks
        nearly impossible. The GM decides how effective each sense is based on
        the situation and your Perception check result.
      </p>
    </Body>
    <H3>Language</H3>
    <Body>
      <p>
        There are many different languages of the world. If two creatures share
        a language, they can communicate normally. If they don't, well… good
        luck. You might be relying on gestures, drawings, or elaborate games of
        charades. Some psychic abilities allow characters to understand and
        communicate regardless of language barriers. Otherwise, you might just
        have to make do with pointing and hoping for the best.
      </p>
    </Body>
  </>
);

export function Characters() {
  return <WikiPage title="Characters" main={main} />;
}
