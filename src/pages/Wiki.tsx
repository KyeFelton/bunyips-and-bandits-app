import { useParams } from "react-router-dom";
import Articles from "../wiki";
import { WikiPage } from "../components/WikiPage";
import { WikiNavigation } from "../components/WikiNavigation";
import { WikiHome } from "../components/WikiHome";
import { WikiCategoryPage } from "../components/WikiCategoryPage";
import { getWikiCategoryRoute } from "../routes";

export function Wiki() {
  const { category, id } = useParams();

  // Find article if both category and id are present
  const article =
    category && id
      ? Articles.find((a) => a.category === category && a.id === id)
      : null;

  // Determine what to render
  let content;
  if (article) {
    content = (
      <WikiPage
        {...article}
        backTo={{
          label: `Back to ${formatCategoryName(category!)}`,
          path: getWikiCategoryRoute(category!),
        }}
      />
    );
  } else if (category) {
    content = <WikiCategoryPage />;
  } else {
    content = <WikiHome />;
  }

  return (
    <>
      <div className="flex sm:max-w-5xl sm:mx-auto min-h-full">
        <WikiNavigation />
        <main className="w-full">{content}</main>
      </div>
    </>
  );
}

function formatCategoryName(category: string): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}
