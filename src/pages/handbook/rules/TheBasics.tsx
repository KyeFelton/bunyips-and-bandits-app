import { Badge } from "../../../components/ui/badge";
import { SkillIcon } from "../../../components/icons/SkillIcon";
import { Callout, WikiPage } from "../../../components/WikiPage";
import { SkillType } from "../../../enums/SkillType";
import * as Skills from "../../../models/skills";
import bunyipImage from "../../../images/handbook/bunyip.png";
import { SpeedIcon } from "../../../components/icons/SpeedIcon";
import { Locomotion } from "../../../enums/Locomotion";
import { ArmourIcon } from "../../../components/icons/ArmourIcon";
import { SenseIcon } from "../../../components/icons/SenseIcon";
import { DamageType } from "../../../enums/DamageType";
import { SenseType } from "../../../enums/SenseType";

const main = (
  <>
    <p>
      Bunyips and Bandits is all about collaborative storytelling. Before you
      dive into adventure, you'll create your own character with a unique
      background, skills, and motivations. They might be a cunning trickster, a
      brawny bushranger, or a clumsy sorcerer. The choice is yours.
    </p>
    <p>
      The GM is the one pulling the strings. They set up the world, play
      non-player characters (NPCs), and ensure the game flows smoothly. The GM
      also acts as the ultimate referee, deciding how events play out based on a
      combination of logic, game rules, and a little bit of storytelling flair.
    </p>
    <p>The core of the game boils down to this:</p>
    <ol className="list-decimal ml-4">
      <li>The GM describes a scene.</li>
      <li>You decide what your character does.</li>
      <li>
        Depending on your action, the GM may ask you to make a check to see if
        you complete it successfully.
      </li>
      <li>The GM describes the result.</li>
    </ol>
    <p>
      Play moves in turns. During tense moments like combat or a chase, follow
      strict rounds where everyone acts in order. In less time-sensitive scenes,
      let conversations and exploration flow naturally without forcing a formal
      structure on them.
    </p>
    <p>
      As a player, you can attempt anything you reckon your character would try.
      Nothing is off the table. It's up to the GM to decide the outcomes and
      consequences. As a rule of thumb, creativity is always favoured.
    </p>
    <p>
      This rules should be viewed as a framework to align everyone, rather than
      a rigid system. If anything is unclear, discuss it with your party and
      agree on a ruling. If something doesn't quite fit your playstyle, discuss
      that too and potentially tweak it. The game is meant to be adaptable and
      fun.
    </p>

    <h2>Skills</h2>
    <p>
      Skills determine how well your character performs various actions. Every
      character has a list of skills ranging in levels from one to ten.
    </p>
    <p>
      Most skills are inherent. Magic skills need to be trained to acquire them.
      You have the option to choose one trained magic skill when creating your
      character, otherwise, you must seek out training to acquire them. Training
      requires spending one month of in-game time with a mentor or at an
      institution such as a magic school, guild, or dojo. The GM will determine
      what training opportunities exist in the setting. You can only train one
      magic skill at a time, and successfully completing the training unlocks
      that skill at level one.
    </p>

    <h3>Physical Skills</h3>
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
            <div className="flex items-center gap-2">
              <b>{SkillType.Pyro}</b>
              <Badge variant="outline">Magic</Badge>
            </div>
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
            <div className="flex items-center gap-2">
              <b>{SkillType.Electric}</b>
              <Badge variant="outline">Magic</Badge>
            </div>
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
            <div className="flex items-center gap-2">
              <b>{SkillType.Kinetic}</b>
              <Badge variant="outline">Magic</Badge>
            </div>
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
            <div className="flex items-center gap-2">
              <b>{SkillType.Radiant}</b>
              <Badge variant="outline">Magic</Badge>
            </div>
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
            <div className="flex items-center gap-2">
              <b>{SkillType.Sonic}</b>
              <Badge variant="outline">Magic</Badge>
            </div>
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
            <div className="flex items-center gap-2">
              <b>{SkillType.Biotic}</b>
              <Badge variant="outline">Magic</Badge>
            </div>
          </td>
          <td>{Skills.Biotic.description}</td>
        </tr>
      </tbody>
    </table>

    <h3>Mental Skills</h3>
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
              type={SkillType.Lore}
              className="inline-block mr-1 pb-1"
            />
          </td>
          <td>
            <b>{SkillType.Lore}</b>
          </td>
          <td>{Skills.Lore.description}</td>
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
            <div className="flex items-center gap-2">
              <b>{SkillType.Psychic}</b>
              <Badge variant="outline">Magic</Badge>
            </div>
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
            <div className="flex items-center gap-2">
              <b>{SkillType.Spirit}</b>
              <Badge variant="outline">Magic</Badge>
            </div>
          </td>
          <td>{Skills.Spirit.description}</td>
        </tr>
      </tbody>
    </table>

    <h3>Skill Levels</h3>
    <p>
      Your skill level reflects how well your character is trained in that
      skill. It dictates what die to roll when performing a check for that
      skill. The higher the roll value, the more favourable the outcome.
    </p>
    <table className="ml-8 mt-0 w-auto text-center border-collapse">
      <thead>
        <tr>
          <th>Level</th>
          <th>Die</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1-2</td>
          <td>d4</td>
        </tr>
        <tr>
          <td>3-4</td>
          <td>d6</td>
        </tr>
        <tr>
          <td>5-6</td>
          <td>d8</td>
        </tr>
        <tr>
          <td>7-8</td>
          <td>d10</td>
        </tr>
        <tr>
          <td>9-10</td>
          <td>d12</td>
        </tr>
      </tbody>
    </table>

    <h3>Skill Modifiers</h3>
    <p>
      Skill modifiers are separate from skill levels. Skill modifiers come from
      natural abilities or items in your possession that make you better adapted
      at that skill. These modifiers are added to your roll.
    </p>
    <Callout variant="tip">
      Your Charisma is level 3, so you roll a d6. You also recently took a love
      potion that gives you a +3 Charisma modifier until your next rest. When
      the GM calls for a Charisma check, you roll 1d6 and add 3. A roll of 2 on
      the die becomes a 5 after the modifier.
    </Callout>

    <h2>Movement</h2>
    <p>
      Distance is grouped into bands. Each band is meant to be approximate and
      its up to the GM adjudicate. No one wants miss out on performing a cool
      action if they are just one step short from their enemy.
    </p>
    <table className="md:mx-4 mb-8">
      <thead>
        <tr>
          <th>Class</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>Close</b>
          </td>
          <td>Up to 2m</td>
        </tr>
        <tr>
          <td>
            <b>Near</b>
          </td>
          <td>Up to 10m</td>
        </tr>
        <tr>
          <td>
            <b>Far</b>
          </td>
          <td>Up to 50m</td>
        </tr>
      </tbody>
    </table>
    <p>
      Speed determines the distance that can be tranversed in a single action.
      It is also grouped into bands. A standard move action is slow but doesn't
      use stamina. A dash action consumes one stamina but allows you to traverse
      more distance than a standard move.
    </p>
    <table className="md:mx-4 mb-8">
      <thead>
        <tr>
          <th>Speed</th>
          <th>Move</th>
          <th>Dash</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>Slow</b>
          </td>
          <td>-</td>
          <td>Close</td>
        </tr>
        <tr>
          <td>
            <b>Moderate</b>
          </td>
          <td>Close</td>
          <td>Near</td>
        </tr>
        <tr>
          <td>
            <b>Fast</b>
          </td>
          <td>Near</td>
          <td>Far</td>
        </tr>
      </tbody>
    </table>
    <p>
      Creatures can move through different means. For each movement, creatures
      have a speed rating.
    </p>
    <table className="md:mx-4">
      <thead>
        <tr>
          <th></th>
          <th>Movement</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="pr-0">
            <SpeedIcon type={Locomotion.Run} className="inline-block mr-1" />
          </td>
          <td>
            <b>Run</b>
          </td>
          <td>Moving across land.</td>
        </tr>
        <tr>
          <td className="pr-0">
            <SpeedIcon type={Locomotion.Climb} className="inline-block mr-1" />
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
      When competing creatures have the same speed, the one with the highest
      agility is faster.
    </p>

    <h2>Health</h2>
    <p>
      Adventuring comes with its fair share of scrapes, bruises, and traumas.
      The game tracks the physical (body), mental (mind) and exhaustion
      (stamina) aspects of your character.
    </p>
    <h3>Body</h3>
    <p>
      Body tracks how much physical damage you can endure before collapsing.
      From burns to punches, anything that physically harms you can reduce your
      body.
    </p>
    <p>
      If your physical health drops below half, you have disadvantage on all
      physical skill checks. When at zero health, you're knocked unconscious or
      potentially dead. To determine your state, an ally must check your vital
      signs. When they do, roll any die. If the result is greater than half
      (e.g. 4-6 on a d6), you're alive and regain one health. If lower, you're
      dead.
    </p>
    <h3>Mind</h3>
    <p>
      Mind refers to your mental health, tested by terrifying encounters and
      psychic attacks. Certain experiences, like witnessing the death of an ally
      or being hypnotised by an enemy, can reduce your mental acuity.
    </p>
    <div className="md:w-[30%] md:float-left px-6 mr-10">
      <img
        src={bunyipImage}
        alt={"character artwork"}
        className="object-contain rounded-lg mt-0"
      />
    </div>
    <p>
      When your mental health drops below half, you have disadvantage on all
      mental skill checks. Upon dropping to zero, you lose control. Roll a d4
      and then take the matching condition from the list below. The condition
      lasts until you rest.
    </p>

    <ol className="list-decimal ml-4">
      <li>
        <b>Delusions</b>: You experience constant hallucinations. You may
        mistake people for monsters, monsters for people or have flashbacks of
        past experiences.
      </li>
      <li>
        <b>Hysteria</b>: You have frequent, uncontrollable emotional outbursts
        of laughter, crying or screaming.
      </li>
      <li>
        <b>Amnesia</b>: You forget who you are and why you're here.
      </li>
      <li>
        <b>Paranoia</b>: You're overwhelmed with fear, easy to startle and flee
        from all danger. You even have trouble trusting your friends.
      </li>
    </ol>
    <h3>Stamina</h3>
    <p>
      Your stamina is how much energy you have before exhaustion sets in.
      Stamina depletes as you perform certain actions with a stamina cost. If an
      action has a stamina cost, you need to have at least that much left in
      your stamina pool to perform it.
    </p>
    <h3>Resting</h3>
    <p>
      You can recover health by spending several hours of inactivity at a
      settlement with beds and food, such as a campground, inn or hospital.
      Resting restores all your stamina. If your stamina was at half or more
      your maximum before resting, then you recover two physical and mental
      health after the rest. If you have less than half, you only recover one
      health per rest. If none, you don't recover any health.
    </p>

    <h2>Armour</h2>
    <p>
      Armour reduces the amount of physical damage incurred. There are five
      types of physical damage, and you may have an armour score for each
      depending on your traits and items.
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
            <ArmourIcon type={DamageType.Fire} className="inline-block mr-1" />
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
            <ArmourIcon type={DamageType.Toxic} className="inline-block mr-1" />
          </td>
          <td>
            <b>Toxic</b>
          </td>
          <td>Damage from poisons, acids, and venom.</td>
        </tr>
        <tr>
          <td className="pr-0">
            <ArmourIcon type={DamageType.Slash} className="inline-block mr-1" />
          </td>
          <td>
            <b>Slash</b>
          </td>
          <td>Damage from cutting, slashing, or bladed weapons.</td>
        </tr>
        <tr>
          <td className="pr-0">
            <ArmourIcon type={DamageType.Force} className="inline-block mr-1" />
          </td>
          <td>
            <b>Force</b>
          </td>
          <td>Damage from blunt force, impacts, and crushing.</td>
        </tr>
      </tbody>
    </table>
    <p>
      If your armour score is negative, you take extra damage equal to the value
      instead.
    </p>

    <h2>Size</h2>
    <p>
      Every creature has a size. Some actions or environmental hazards may
      affect creatures differently based on their size. Sizes are categorised
      based on their approximate dimensions.
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

    <h2>Senses</h2>
    <p>
      Your senses determine how well you perceive the world around you. You can
      have up to six senses.
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
            <SenseIcon type={SenseType.Hearing} className="inline-block mt-1" />
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

          <td>Sensing thought.</td>
        </tr>
      </tbody>
    </table>
    <p>
      Creatures have different sensory strengths. Each sense may be marked as
      keen or poor to describe the acuteness.
    </p>
  </>
);

export function TheBasics() {
  return <WikiPage title="The Basics" main={main} />;
}
