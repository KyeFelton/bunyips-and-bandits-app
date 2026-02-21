import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { cn } from "../utils/cn";
import { HandbookRoute, getHandbookSectionRoute } from "../routes";
import { Introduction } from "./handbook/Introduction";
import { CoreRules } from "./handbook/CoreRules";
import { Characters } from "./handbook/Characters";
import { SkillChecks } from "./handbook/SkillChecks";
import { Combat } from "./handbook/Combat";
import { Religion } from "./handbook/Religion";
import { Magic } from "./handbook/Magic";
import { Homebrew } from "./handbook/Homebrew";
import { Languages } from "./handbook/Languages";
import { Places } from "./handbook/Places";

const SECTIONS = [
  { id: "introduction", label: "Introduction", route: HandbookRoute },
  {
    id: "core-rules",
    label: "Core Rules",
    route: getHandbookSectionRoute("core-rules"),
  },
  {
    id: "characters",
    label: "Characters",
    route: getHandbookSectionRoute("characters"),
  },
  {
    id: "skill-checks",
    label: "Skill Checks",
    route: getHandbookSectionRoute("skill-checks"),
  },
  { id: "combat", label: "Combat", route: getHandbookSectionRoute("combat") },
  {
    id: "religion",
    label: "Religion",
    route: getHandbookSectionRoute("religion"),
  },
  { id: "magic", label: "Magic", route: getHandbookSectionRoute("magic") },
  { id: "places", label: "Places", route: getHandbookSectionRoute("places") },
  {
    id: "languages",
    label: "Languages",
    route: getHandbookSectionRoute("languages"),
  },
  {
    id: "homebrew",
    label: "Homebrew",
    route: getHandbookSectionRoute("homebrew"),
  },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

const SECTION_COMPONENTS: Record<SectionId, React.ComponentType> = {
  introduction: Introduction,
  "core-rules": CoreRules,
  characters: Characters,
  "skill-checks": SkillChecks,
  combat: Combat,
  religion: Religion,
  magic: Magic,
  places: Places,
  languages: Languages,
  homebrew: Homebrew,
};

function HandbookSidebar({ activeId }: { activeId: SectionId }) {
  return (
    <aside className="hidden md:flex fixed left-0 top-16 h-[calc(100dvh-4rem)] w-48 flex-col py-6 px-3 bg-surface shadow-sm z-10 overflow-y-auto border-t border-primary-foreground/20">
      <p className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-3 px-2">
        Handbook
      </p>
      <nav className="flex flex-col gap-0.5">
        {SECTIONS.map((section) => {
          const isActive = section.id === activeId;
          return (
            <Link
              key={section.id}
              to={section.route}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                isActive
                  ? "text-accent font-medium"
                  : "text-primary-foreground hover:text-accent",
              )}
            >
              {section.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export function Handbook() {
  const { section } = useParams<{ section?: string }>();
  const contentRef = useRef<HTMLDivElement>(null);

  const activeId: SectionId =
    section && section in SECTION_COMPONENTS
      ? (section as SectionId)
      : "introduction";

  const SectionComponent = SECTION_COMPONENTS[activeId];

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [activeId]);

  return (
    <div className="flex h-[calc(100dvh-4rem)]">
      <HandbookSidebar activeId={activeId} />
      <div
        ref={contentRef}
        className="md:ml-48 flex-1 min-w-0 overflow-auto flex flex-col"
      >
        <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
          <SectionComponent />
        </div>
      </div>
    </div>
  );
}
