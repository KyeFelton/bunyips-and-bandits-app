import { Link, useLocation } from "react-router-dom";
import { Library, ChevronDown } from "lucide-react";
import { WikiCategory } from "../enums/WikiCategory";
import { getWikiCategoryRoute, WikiRoute } from "../routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from "../utils/cn";

export function WikiDropdown() {
  const location = useLocation();
  const categories = Object.values(WikiCategory);
  const isWikiActive = location.pathname.includes(WikiRoute);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "hidden md:inline-flex items-center text-primary-foreground hover:text-accent-medium transition-colors focus:outline-none",
          isWikiActive ? "text-accent-medium" : ""
        )}
      >
        <Library className="h-5 w-5 mr-2" />
        <span className="text-base">Wiki</span>
        <ChevronDown className="h-4 w-4 ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {categories.map((category) => (
          <DropdownMenuItem key={category} asChild>
            <Link
              to={getWikiCategoryRoute(category)}
              className="w-full cursor-pointer"
            >
              {formatCategoryName(category)}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Helper to format category names (e.g., "folk" -> "Folk")
function formatCategoryName(category: string): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}
