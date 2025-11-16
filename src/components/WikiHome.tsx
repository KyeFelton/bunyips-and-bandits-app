import { Link } from "react-router-dom";
import { WikiCategory } from "../enums/WikiCategory";
import { getWikiCategoryRoute } from "../routes";
import { WikiPage } from "./WikiPage";

export function WikiHome() {
  const categories = Object.values(WikiCategory);

  return (
    <WikiPage title="The World of Bunyips and Bandits">
      {/* Welcome section */}
      <div className="prose max-w-none text-sm md:text-base">
        <p>
          Welcome to the wiki for Bunyips and Bandits, a tabletop role-playing
          game set in a fictional world inspired by Australian and British folklore.
          Explore the rich lore, cultures, and creatures that inhabit this unique
          fantasy setting.
        </p>
        <p>
          This wiki is your guide to the people, places, and mysteries of the world.
          Browse by category below to discover more about the setting.
        </p>
      </div>

      {/* Category grid */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Explore the Wiki</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat} to={getWikiCategoryRoute(cat)}>
              <div className="p-4 md:p-6 border rounded-lg hover:bg-accent transition-colors h-full">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {formatCategoryName(cat)}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {getCategoryDescription(cat)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WikiPage>
  );
}

// Helper to format category names (e.g., "folk" -> "Folk")
function formatCategoryName(category: string): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

// Helper to get category descriptions
function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    [WikiCategory.Characters]: "Notable individuals and key figures in the world",
    [WikiCategory.Continents]: "The major landmasses and their geography",
    [WikiCategory.Cultures]: "Societies, traditions, and ways of life",
    [WikiCategory.Factions]: "Organizations, groups, and political powers",
    [WikiCategory.Fauna]: "Creatures and animals of the world",
    [WikiCategory.Flora]: "Plants, trees, and vegetation",
    [WikiCategory.Folk]: "The various peoples and species that inhabit the world",
    [WikiCategory.Items]: "Artifacts, equipment, and notable objects",
    [WikiCategory.Regions]: "Geographic areas and territories",
    [WikiCategory.Sites]: "Landmarks, ruins, and points of interest",
    [WikiCategory.Towns]: "Settlements, cities, and communities",
  };

  return descriptions[category] || "Explore this category";
}
