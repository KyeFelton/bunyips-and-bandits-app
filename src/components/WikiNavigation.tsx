import { Link, useParams } from "react-router-dom";
import { WikiCategory } from "../enums/WikiCategory";
import { getWikiCategoryRoute } from "../routes";

export function WikiNavigation() {
  const { category } = useParams();

  // Get all categories from enum
  const categories = Object.values(WikiCategory);

  return (
    <>
      <aside className="hidden md:block px-4 pr-12 py-8 min-h-full bg-foreground text-background">
        <h2 className="text-xl font-bold mb-4 pl-3 pb-3">Wiki</h2>
        <nav className="flex flex-col gap-1">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={getWikiCategoryRoute(cat)}
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                category === cat
                  ? "bg-background text-foreground font-medium"
                  : "hover:bg-accent/50"
              }`}
            >
              {formatCategoryName(cat)}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

// Helper to format category names (e.g., "folk" -> "Folk")
function formatCategoryName(category: string): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}
