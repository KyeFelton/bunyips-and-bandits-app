import { Link, useParams } from "react-router-dom";
import Articles from "../wiki";
import { WikiContent } from "../models/wikiContent";
import { getWikiArticleRoute, WikiRoute } from "../routes";
import { WikiPage } from "./WikiPage";

export function WikiCategoryPage() {
  const { category } = useParams();

  // Filter articles by category
  const categoryArticles = Articles.filter(
    (article) => article.category === category
  );

  return (
    <WikiPage
      title={formatCategoryName(category || "")}
      backTo={{ label: "Back to Wiki", path: WikiRoute }}
    >
      {/* Articles list or empty state */}
      {categoryArticles.length === 0 ? (
        <div className="p-8 text-center text-muted-foreground border rounded-lg">
          <p className="text-base md:text-lg">No content yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categoryArticles.map((article: WikiContent) => (
            <Link
              key={article.id}
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
