import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import { cn } from "../utils/cn";
import { getHandbookSubsectionPageRoute } from "../routes";
import { WikiPage } from "../components/WikiPage";
import { Introduction } from "./handbook/rules/Introduction";
import {
  HANDBOOK_SECTIONS,
  HandbookSubsection,
} from "./handbook/handbookSections";

function SectionHeader({
  label,
  isFirst,
}: {
  label: string;
  isFirst?: boolean;
}) {
  return (
    <>
      {!isFirst && (
        <div className="border-t border-primary-foreground/20 mt-3 mb-2" />
      )}
      <p className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-2 px-2">
        {label}
      </p>
    </>
  );
}

function SidebarLink({
  to,
  isActive,
  children,
}: {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "rounded-md px-3 py-1.5 text-sm transition-colors",
        isActive ? "text-accent font-medium" : "text-primary-foreground",
      )}
    >
      {children}
    </Link>
  );
}

function SidebarSubpageLink({
  to,
  isActive,
  children,
}: {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "rounded-md px-3 py-1 text-sm transition-colors",
        isActive ? "text-accent font-medium" : "text-primary-foreground/80",
      )}
    >
      {children}
    </Link>
  );
}

function HandbookSidebar({
  section,
  subsection,
  page,
}: {
  section: string | undefined;
  subsection: string | undefined;
  page: string | undefined;
}) {
  return (
    <aside className="hidden md:flex fixed left-0 top-16 h-[calc(100dvh-4rem)] w-48 flex-col py-6 px-3 bg-foreground shadow-sm z-10 overflow-y-auto border-t border-primary-foreground/20">
      <nav className="flex flex-col gap-0.5">
        {HANDBOOK_SECTIONS.map((sec, i) => (
          <div key={sec.id} className="flex flex-col gap-0.5">
            <SectionHeader label={sec.label} isFirst={i === 0} />
            {sec.items.map((item) => {
              if (item.kind === "subsection") {
                const isSubsectionActive =
                  section === sec.id &&
                  (subsection === item.id || (!subsection && page === item.id));
                return (
                  <Collapsible
                    key={item.id}
                    defaultOpen={subsection === item.id}
                  >
                    <CollapsibleTrigger
                      className={cn(
                        "group w-full flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors text-left",
                        isSubsectionActive
                          ? "text-accent font-medium"
                          : "text-primary-foreground",
                      )}
                    >
                      {item.label}
                      <ChevronRight className="h-3 w-3 shrink-0 transition-transform group-data-[state=open]:rotate-90" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="flex flex-col gap-0.5 ml-3 mt-0.5">
                      {item.pages.map((subPage) => (
                        <SidebarSubpageLink
                          key={subPage.id}
                          to={getHandbookSubsectionPageRoute(
                            sec.id,
                            item.id,
                            subPage.id,
                          )}
                          isActive={
                            section === sec.id &&
                            subsection === item.id &&
                            page === subPage.id
                          }
                        >
                          {subPage.title}
                        </SidebarSubpageLink>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                );
              }

              const isActive =
                section === sec.id && page === item.id && !subsection;
              return (
                <SidebarLink
                  key={item.id}
                  to={`/handbook/${sec.id}/${item.id}`}
                  isActive={isActive}
                >
                  {item.label}
                </SidebarLink>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export function Handbook() {
  const { section, subsection, page } = useParams<{
    section?: string;
    subsection?: string;
    page?: string;
  }>();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [section, subsection, page]);

  function renderContent() {
    const sec = section
      ? HANDBOOK_SECTIONS.find((s) => s.id === section)
      : undefined;

    if (sec && subsection && page) {
      const subsec = sec.items.find(
        (i) => i.id === subsection && i.kind === "subsection",
      ) as HandbookSubsection | undefined;
      const subPage = subsec?.pages.find((i) => i.id === page);
      if (subPage) {
        return <WikiPage {...subPage} />;
      }
    }

    if (sec && page) {
      const item = sec.items.find((i) => i.id === page);
      if (item?.kind === "page") {
        const Component = item.component;
        return <Component />;
      }
    }

    return <Introduction />;
  }

  return (
    <div className="flex h-[calc(100dvh-4rem)]">
      <HandbookSidebar section={section} subsection={subsection} page={page} />
      <div
        ref={contentRef}
        className="md:ml-48 flex-1 min-w-0 overflow-auto flex flex-col"
      >
        <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
