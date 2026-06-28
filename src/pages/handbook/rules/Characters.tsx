import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/ui/collapsible";
import { ProgressionItems } from "../../../components/ProgressionItems";
import { cn } from "../../../utils/cn";
import { WikiContent } from "../../../models/wikiContent";
import { Callout, WikiPage } from "../../../components/WikiPage";
import summonerImage from "../../../images/handbook/summoner.png";
import {
  getHandbookPageRoute,
  getHandbookSubsectionPageRoute,
} from "../../../routes";
import { AllSkillProgressions } from "../../../data/skillProgressions";
import KinArticles from "./kin";
import { AllBackgrounds } from "../../../data/backgrounds";
import { Background } from "../../../models/backgrounds";
import { BackgroundIcon } from "../../../components/icons/BackgroundIcon";
import { SkillIcon } from "../../../components/icons/SkillIcon";
import { SkillType } from "../../../enums/SkillType";
import {
  Biotic,
  Electric,
  Kinetic,
  Psychic,
  Pyro,
  Radiant,
  Skill,
  Sonic,
  Spirit,
} from "../../../models/skills";

const magicSkills: Skill[] = [
  Biotic,
  Electric,
  Kinetic,
  Psychic,
  Pyro,
  Radiant,
  Sonic,
  Spirit,
];

function MagicSkillCards({ skills }: { skills: Skill[] }) {
  const [selected, setSelected] = useState<Skill | null>(null);

  return (
    <>
      <div className="space-y-2 not-prose">
        {skills.map((skill) => {
          const isOpen = selected?.type === skill.type;
          const progression = AllSkillProgressions[skill.type];
          return (
            <Collapsible
              key={skill.type}
              open={isOpen}
              onOpenChange={(open) => setSelected(open ? skill : null)}
            >
              <div
                className={cn(
                  "border-2 rounded-lg overflow-hidden transition-colors duration-200",
                  isOpen
                    ? "border-primary/50"
                    : "border-muted hover:border-primary/30",
                )}
              >
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between gap-4 text-left cursor-pointer">
                  <div className="flex items-center gap-3">
                    <SkillIcon
                      type={skill.type}
                      className="h-5 w-5 flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-base">{skill.type}</p>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-4 pb-2 divide-y divide-muted border-t border-muted">
                    {progression.unlockables
                      .filter(
                        ({ actions, traits }) =>
                          actions.length > 0 || traits.length > 0,
                      )
                      .map(({ level, actions, traits }) => (
                        <ProgressionItems
                          key={level}
                          level={level}
                          actions={actions}
                          traits={traits}
                        />
                      ))}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          );
        })}
      </div>
    </>
  );
}

function BackgroundCards({ backgrounds }: { backgrounds: Background[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
      {backgrounds.map((bg) => (
        <Card key={bg.name} className="p-4 space-y-4 border-2 border-muted">
          <div className="flex items-center gap-2">
            <BackgroundIcon name={bg.name} className="h-5 w-5" />
            <p className="font-semibold text-lg">{bg.name}</p>
          </div>
          <p className="text-sm text-muted-foreground">{bg.description}</p>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Expertise
            </p>
            <div className="flex flex-wrap gap-3">
              {bg.expertiseSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-1.5">
                  <SkillIcon type={skill as SkillType} className="h-4 w-4" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Trait
            </p>
            {bg.traits.map((trait) => (
              <p key={trait.name} className="text-sm">
                {trait.description}
              </p>
            ))}
          </div>
          {bg.startingItems && (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Starting Items
              </p>
              <div className="space-y-1.5">
                {bg.startingItems.map((group) => (
                  <div
                    key={group.name}
                    className="text-sm text-muted-foreground"
                  >
                    <span className="font-medium text-foreground">
                      {group.name}:
                    </span>{" "}
                    {group.items.map((item) => item.name).join(", ")}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}

function KinCards({ kin }: { kin: WikiContent[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
      {kin.map((item) => (
        <Link
          key={item.id}
          to={getHandbookSubsectionPageRoute("rules", "kin", item.id)}
          className="block"
        >
          <Card className="transition-all duration-200 border-2 border-muted hover:border-primary/50 hover:shadow-lg cursor-pointer ">
            <CardContent className="p-0">
              {item.infoBox?.imageSrc && (
                <img
                  src={item.infoBox.imageSrc}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-md"
                />
              )}
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              {(() => {
                const species = item.infoBox?.traits.find(
                  (t) => t.key === "Species",
                )?.value;
                const ancestry = item.infoBox?.traits.find(
                  (t) => t.key === "Ancestry",
                )?.value;
                return species || ancestry ? (
                  <p className="text-sm text-muted-foreground">
                    {[species, ancestry].filter(Boolean).join(" · ")}
                  </p>
                ) : null;
              })()}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}

const main = (
  <>
    <p>
      At the heart of Bunyips and Bandits are the characters you create and
      play. While the GM plays the role of everyone and everything else, you are
      in control of one character each. You make their choices, speak in their
      voice, and decide how they handle the dangers and opportunities that come
      their way.
    </p>
    <p>
      You begin the game with creating your character. This involves a few
      simple steps:
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
        <b>Choose a kin</b>: You can play as one of many different creatures,
        each with their own strengths, weaknesses, and unique traits. Your kin
        determines your base stats.
      </li>
      <li>
        <b>Choose your background</b>: Your background represents your
        character's past profession and upbringing. It grants expertise in
        specific skills and special traits related to your profession.
      </li>
      <li>
        <b>Choose a magic skill</b>: Select one magic skill you have been
        trained in. As you progress, you'll unlock more powerful traits and
        actions.
      </li>
      <li>
        <b>Describe your character</b>: Think about who they are beyond the
        numbers on the sheet. What's their name? What do they look like? What's
        their personality? The GM will work with you to weave your character
        into the world, ensuring they fit into the setting.
      </li>
    </ol>
    <h2>Kin</h2>
    <p>
      Kin defines your herritage and physical characteristics. You choose both a
      species and an ancestry to define your kin.
    </p>
    <p>
      <b>Species</b> refers to your prehistoric bloodline. People of the same
      species share biological characteristics despite potentially looking very
      different across different parts of the world. Species determines your
      base movement, senses, size, skill modifiers and natural traits.
    </p>
    <ul>
      <li>
        <b>Avian</b>: Descended from bird-like ancestors. Defined by feathered
        bodies, beaked faces, and sharp eyesight.
      </li>
      <li>
        <b>Delver</b>: Folk who have adapted over countless millennia to
        subterranean life. Typically small in stature with heightened senses for
        navigating dark and confined spaces.
      </li>
      <li>
        <b>Giant</b>: Enormous humanoids that once roamed wide open territories.
        They stand two to four metres tall, with considerable strength and
        physical endurance.
      </li>
      <li>
        <b>Goblin</b>: Small, adaptable folk built for survival in harsh
        environments. Compact in build with swift reflexes and a natural
        aptitude for climbing and tight spaces.
      </li>
      <li>
        <b>Human</b>: The most common of all peoples. They are social and
        versatile.
      </li>
      <li>
        <b>Reptilian</b>: Ancient lizard-like ancestors. Characterised by scaled
        skin, infrared vision, and a heightened capacity for patience and
        perception.
      </li>
    </ul>
    <p>
      <b>Ancestry</b> is where your more recent ancestors are from. It usually
      includes the culture you were raised in, the language you grew up
      speaking, and the traditions that shaped you.
    </p>
    <ul>
      <li>
        <b>Dharrigal</b>: The peoples of Downunda. An island of desert plains,
        dense eucalypt forest and tropical rainforests. Their traditions span
        tens of thousands of years, grounded in a close relationship with their
        country, oral history, and the land's creatures.
      </li>
      <li>
        <b>Englorian</b>: The peoples of Engloria. A temperate continent of
        rolling hills, dense forests, and walled settlements. Their culture has
        been shaped by centuries of trade, maritime expansion, and the steady
        rise of kingdoms and institutions.
      </li>
    </ul>
    <KinCards kin={KinArticles} />

    <h2>Backgrounds</h2>
    <p>
      Your background represents your character's past profession and upbringing
      before becoming an adventurer. Backgrounds grant expertise in specific
      skills, starting them at level five instead of the initial level one. Each
      background also provides special traits that give you advantages in
      situations related to your past profession.
    </p>
    <BackgroundCards backgrounds={Object.values(AllBackgrounds)} />

    <h2>Magic Skills</h2>
    <p>
      You can begin with training in one magic skill. This skill starts at level
      one and can be improved over time. As you level up your magic skill,
      you'll unlock new actions and traits. Each school of magic has a distinct
      flavour. See{" "}
      <Link to={getHandbookPageRoute("setting", "magic")}>Magic</Link> for more
      details.
    </p>
    <MagicSkillCards skills={magicSkills} />

    <h2>Describing Your Character</h2>
    <p>Describe your character beyond the archetypes to give more flavour.</p>
    <p>
      Start off with the basics. What is their name, age and gender. Then start
      to understand their personality. Any distinguishing features, the way they
      carry themselves, a scar they won't explain. Are they loud and easy to
      read, or guarded and hard to get a word out of? Identify a virtue that
      makes them worth following, and a flaw gives them room to develop.
      Finally, consider what motivates your character to explain why they're out
      on an adventure in the first place.
    </p>
    <p>
      Next, write about their past. Where did they come from? What shaped them?
      A few lines gives the GM hooks to weave your character into the world. If
      you've got a grudge against a merchant guild, expect it to come up. If you
      had a traumatic experience with spiders, prepare to face them. The GM may
      also award your character custom traits or items to begin with. You may
      have a family heirloom with magical properties. Perhaps you learnt to
      communicate with wildlife from a rural upbringing.
    </p>
    <Callout variant="tip">
      Jackie is quiet and deliberate, green-scaled, with a thin scar across her
      left eye that she won't explain. She served six years in a border garrison
      before a bad order got her unit killed. She's on the road north to find
      the officer who gave that command. Her virtue is steadiness under
      pressure. Her flaw is that she defers to authority even when she
      shouldn't.
    </Callout>
    <p>
      You don't need every answer before the first session. A lot of the best
      character moments come from figuring things out at the table. Focus on
      hitting the key elements so the GM has something to work with.
    </p>
  </>
);

export function Characters() {
  return <WikiPage title="Characters" main={main} />;
}
