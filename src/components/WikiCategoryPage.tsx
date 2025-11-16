import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search } from "lucide-react";
import Articles from "../wiki";
import { WikiContent } from "../models/wikiContent";
import { getWikiArticleRoute, WikiRoute } from "../routes";
import { WikiPage } from "./WikiPage";
import { Input } from "./ui/input";

export function WikiCategoryPage() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  // Filter articles by category
  const categoryArticles = Articles.filter(
    (article) => article.category === category
  );

  // Apply search filter if search term exists (trim to handle whitespace)
  const trimmedSearch = search.trim();
  const filteredArticles = trimmedSearch
    ? categoryArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
          article.subTitle?.toLowerCase().includes(trimmedSearch.toLowerCase())
      )
    : categoryArticles;

  return (
    <WikiPage
      title={formatCategoryName(category || "")}
      backTo={{ label: "Back to Wiki", path: WikiRoute }}
    >
      {/* Search bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Articles list or empty state */}
      {filteredArticles.length === 0 ? (
        <div className="p-8 text-center text-muted-foreground border rounded-lg">
          <p className="text-base md:text-lg">
            {trimmedSearch
              ? `No articles found matching "${trimmedSearch}"`
              : "No content yet."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredArticles.map((article: WikiContent) => (
            <Link
              key={`${article.category}-${article.id}`}
              to={getWikiArticleRoute(category!, article.id)}
            >
              <div className="p-4 md:p-6 border rounded-lg hover:bg-accent transition-colors h-full">
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {article.title}
                </h3>
                {article.subTitle && (
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {article.subTitle}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </WikiPage>
  );
}

// Helper to format category names (e.g., "folk" -> "Folk")
function formatCategoryName(category: string): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}
