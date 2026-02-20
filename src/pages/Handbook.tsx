
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
import { Languages } from "./handbook/Languages";
import { Places } from "./handbook/Places";

const SECTIONS = [
  { id: "introduction", label: "Introduction", route: HandbookRoute },
  { id: "core-rules", label: "Core Rules", route: getHandbookSectionRoute("core-rules") },
  { id: "characters", label: "Characters", route: getHandbookSectionRoute("characters") },
  { id: "skill-checks", label: "Skill Checks", route: getHandbookSectionRoute("skill-checks") },
  { id: "combat", label: "Combat", route: getHandbookSectionRoute("combat") },
  { id: "religion", label: "Religion", route: getHandbookSectionRoute("religion") },
  { id: "magic", label: "Magic", route: getHandbookSectionRoute("magic") },
  { id: "places", label: "Places", route: getHandbookSectionRoute("places") },
  { id: "languages", label: "Languages", route: getHandbookSectionRoute("languages") },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

const SECTION_COMPONENTS: Record<SectionId, React.ComponentType> = {
  "introduction": Introduction,
  "core-rules": CoreRules,
  "characters": Characters,
  "skill-checks": SkillChecks,
  "combat": Combat,
  "religion": Religion,
  "magic": Magic,
  "places": Places,
  "languages": Languages,
};

function HandbookSidebar({ activeId }: { activeId: SectionId }) {
  return (
    <aside className="hidden md:flex fixed left-0 top-16 h-[calc(100dvh-4rem)] w-48 flex-col py-6 px-3 bg-background border-r border-border z-10 overflow-y-auto">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 px-2">
        Contents
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
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
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

  const activeId: SectionId =
    section && section in SECTION_COMPONENTS
      ? (section as SectionId)
      : "introduction";

  const SectionComponent = SECTION_COMPONENTS[activeId];

  return (
    <div className="flex min-h-full">
      <HandbookSidebar activeId={activeId} />
      <div className="md:ml-48 flex-1 min-w-0 flex flex-col">
        <div className="max-w-5xl mx-auto flex-1 flex flex-col">
          <SectionComponent />
        </div>
      </div>
    </div>
  );
}
