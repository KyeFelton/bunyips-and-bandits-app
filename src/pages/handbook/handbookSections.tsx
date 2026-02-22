import { Characters } from "./rules/Characters";
import { Combat } from "./rules/Combat";
import { CoreRules } from "./rules/CoreRules";
import { Homebrew } from "./rules/Homebrew";
import { Introduction } from "./rules/Introduction";
import { Languages } from "./setting/Languages";
import { Magic } from "./setting/Magic";
import { Religion } from "./setting/Religion";
import { SkillChecks } from "./rules/SkillChecks";
import { WikiContent } from "../../models/wikiContent";
import Continents from "./setting/continents";
import Cultures from "./setting/cultures";
import Fauna from "./setting/fauna";
import Folk from "./setting/folk";

export type HandbookPage = {
  kind: "page";
  id: string;
  label: string;
  component: React.ComponentType;
};

export type HandbookSubsection = {
  kind: "subsection";
  id: string;
  label: string;
  pages: WikiContent[];
};

export type HandbookItem = HandbookPage | HandbookSubsection;

export type HandbookSection = {
  id: string;
  label: string;
  items: HandbookItem[];
};

export const HANDBOOK_SECTIONS: HandbookSection[] = [
  {
    id: "rules",
    label: "Rules",
    items: [
      {
        kind: "page",
        id: "introduction",
        label: "Introduction",
        component: Introduction,
      },
      {
        kind: "page",
        id: "core-rules",
        label: "Core Rules",
        component: CoreRules,
      },
      {
        kind: "page",
        id: "characters",
        label: "Characters",
        component: Characters,
      },
      {
        kind: "page",
        id: "skill-checks",
        label: "Skill Checks",
        component: SkillChecks,
      },
      { kind: "page", id: "combat", label: "Combat", component: Combat },
      { kind: "page", id: "homebrew", label: "Homebrew", component: Homebrew },
    ],
  },
  {
    id: "setting",
    label: "Setting",
    items: [
      {
        kind: "page",
        id: "languages",
        label: "Languages",
        component: Languages,
      },
      { kind: "page", id: "magic", label: "Magic", component: Magic },
      { kind: "page", id: "religion", label: "Religions", component: Religion },
      { kind: "subsection", id: "continents", label: "Continents", pages: Continents },
      { kind: "subsection", id: "cultures", label: "Cultures", pages: Cultures },
      { kind: "subsection", id: "fauna", label: "Fauna", pages: Fauna },
      { kind: "subsection", id: "folk", label: "Folk", pages: Folk },
    ],
  },
];
