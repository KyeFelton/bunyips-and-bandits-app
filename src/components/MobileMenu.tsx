import { Link, useLocation } from "react-router-dom";
import { Menu, User, Book, Library, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  CharacterListRoute,
  HandbookRoute,
  WikiRoute,
  getWikiCategoryRoute,
} from "../routes";
import { WikiCategory } from "../enums/WikiCategory";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { cn } from "../utils/cn";
import { Logo } from "./Logo";

export function MobileMenu() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [wikiOpen, setWikiOpen] = useState(false);
  const categories = Object.values(WikiCategory);

  const isCharacterActive =
    location.pathname === CharacterListRoute ||
    location.pathname.includes("/character/") ||
    location.pathname.includes("/character?");
  const isHandbookActive = location.pathname.includes(HandbookRoute);
  const isWikiActive = location.pathname.includes(WikiRoute);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden p-2 text-primary-foreground hover:text-accent-medium transition-colors">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="left" className="bg-black text-primary-foreground border-accent/20">
        <SheetHeader>
          <Logo className="h-10" />
        </SheetHeader>
        <nav className="flex flex-col gap-2 mt-6">
          <Link
            to={CharacterListRoute}
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-md hover:bg-accent/20 transition-colors",
              isCharacterActive ? "bg-accent-medium/20 text-accent-medium" : ""
            )}
          >
            <User className="h-5 w-5" />
            <span className="text-base">Character</span>
          </Link>

          <Link
            to={HandbookRoute}
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-md hover:bg-accent/20 transition-colors",
              isHandbookActive ? "bg-accent-medium/20 text-accent-medium" : ""
            )}
          >
            <Book className="h-5 w-5" />
            <span className="text-base">Handbook</span>
          </Link>

          <Collapsible open={wikiOpen} onOpenChange={setWikiOpen}>
            <CollapsibleTrigger
              className={cn(
                "flex items-center justify-between w-full gap-3 px-4 py-3 rounded-md hover:bg-accent/20 transition-colors",
                isWikiActive ? "bg-accent-medium/20 text-accent-medium" : ""
              )}
            >
              <div className="flex items-center gap-3">
                <Library className="h-5 w-5" />
                <span className="text-base">Wiki</span>
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  wikiOpen ? "rotate-180" : ""
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 ml-4 flex flex-col gap-1">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={getWikiCategoryRoute(category)}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-md hover:bg-accent/20 transition-colors text-sm"
                >
                  {formatCategoryName(category)}
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

// Helper to format category names (e.g., "folk" -> "Folk")
function formatCategoryName(category: string): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}
