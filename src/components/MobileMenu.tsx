import { Link, useLocation } from "react-router-dom";
import { Book, ChevronRight, Menu, User } from "lucide-react";
import { useState } from "react";
import {
  CharacterListRoute,
  HandbookRoute,
  getHandbookPageRoute,
  getHandbookSubsectionPageRoute,
} from "../routes";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { cn } from "../utils/cn";
import { Logo } from "./Logo";
import { HANDBOOK_SECTIONS } from "../pages/handbook/handbookSections";

export function MobileMenu() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isCharacterActive =
    location.pathname === CharacterListRoute ||
    location.pathname.includes("/character/") ||
    location.pathname.includes("/character?");
  const isHandbookActive = location.pathname.includes(HandbookRoute);

  const parts = location.pathname.split("/").filter(Boolean);
  const currentSection = isHandbookActive ? parts[1] : undefined;
  const currentSubsection =
    isHandbookActive && parts.length >= 4 ? parts[2] : undefined;
  const currentPage = isHandbookActive
    ? parts.length >= 4
      ? parts[3]
      : parts[2]
    : undefined;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden p-2 text-primary-foreground hover:text-accent transition-colors">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-foreground text-primary-foreground border-accent-subtle/20 overflow-y-auto"
      >
        <SheetHeader>
          <Logo className="h-10" />
        </SheetHeader>
        <nav className="flex flex-col gap-2 mt-6">
          <Link
            to={CharacterListRoute}
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-md hover:bg-accent-subtle/20 transition-colors",
              isCharacterActive ? "bg-accent/20 text-accent" : "",
            )}
          >
            <User className="h-5 w-5" />
            <span className="text-base">Character</span>
          </Link>

          <Collapsible defaultOpen={isHandbookActive}>
            <CollapsibleTrigger
              className={cn(
                "group flex items-center gap-3 px-4 py-3 rounded-md hover:bg-accent-subtle/20 transition-colors text-left w-full",
                isHandbookActive ? "bg-accent/20 text-accent" : "",
              )}
            >
              <Book className="h-5 w-5 shrink-0" />
              <span className="text-base flex-1">Handbook</span>
              <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-data-[state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-4 flex flex-col gap-0.5 pl-3 mt-1">
              {HANDBOOK_SECTIONS.map((sec, i) => (
                <div key={sec.id} className="flex flex-col gap-0.5">
                  {i > 0 && (
                    <div className="border-t border-primary-foreground/20 mt-2 mb-1" />
                  )}
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-1 px-1">
                    {sec.label}
                  </p>
                  {sec.items.map((item) => {
                    if (item.kind === "subsection") {
                      const isSubsectionActive =
                        currentSection === sec.id &&
                        currentSubsection === item.id;
                      return (
                        <Collapsible
                          key={item.id}
                          defaultOpen={currentSubsection === item.id}
                        >
                          <CollapsibleTrigger
                            className={cn(
                              "group w-full flex items-center justify-between rounded-md px-1 py-1.5 text-sm transition-colors text-left",
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
                              <Link
                                key={subPage.id}
                                to={getHandbookSubsectionPageRoute(
                                  sec.id,
                                  item.id,
                                  subPage.id,
                                )}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "rounded-md px-1 py-1 text-sm transition-colors",
                                  currentSubsection === item.id &&
                                    currentPage === subPage.id
                                    ? "text-accent font-medium"
                                    : "text-primary-foreground/80",
                                )}
                              >
                                {subPage.title}
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    }

                    const isActive =
                      currentSection === sec.id &&
                      currentPage === item.id &&
                      !currentSubsection;
                    return (
                      <Link
                        key={item.id}
                        to={getHandbookPageRoute(sec.id, item.id)}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-md px-1 py-1.5 text-sm transition-colors",
                          isActive
                            ? "text-accent font-medium"
                            : "text-primary-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
