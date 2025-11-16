import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { WikiCategory } from "../enums/WikiCategory";
import { getWikiCategoryRoute, getWikiArticleRoute } from "../routes";
import { WikiPage } from "./WikiPage";
import { Input } from "./ui/input";
import Articles from "../wiki";

export function WikiHome() {
  const categories = Object.values(WikiCategory);
  const [search, setSearch] = useState("");

  // Filter articles by search term (trim to handle whitespace)
  const trimmedSearch = search.trim();
  const filteredArticles = trimmedSearch
    ? Articles.filter(
        (article) =>
          article.title.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
          article.subTitle?.toLowerCase().includes(trimmedSearch.toLowerCase())
      )
    : [];

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

        {/* Search bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search all articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {trimmedSearch ? (
          // Search results view
          filteredArticles.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground border rounded-lg">
              <p className="text-base md:text-lg">
                No articles found matching "{trimmedSearch}"
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredArticles.map((article) => (
                <Link
                  key={`${article.category}-${article.id}`}
                  to={getWikiArticleRoute(article.category!, article.id)}
                >
                  <div className="p-4 md:p-6 border rounded-lg hover:bg-accent transition-colors h-full">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">
                      {article.title}
                    </h3>
                    {article.subTitle && (
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        {article.subTitle}
                      </p>
                    )}
                    <span className="text-xs text-muted-foreground bg-accent px-2 py-1 rounded">
                      {formatCategoryName(article.category!)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )
        ) : (
          // Category grid (default view)
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
        )}
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
