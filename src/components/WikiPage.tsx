import { PropsWithChildren } from "react";
import { Card } from "./ui/card";
import { WikiArticle } from "../models/wikiArticle";

type Props = WikiArticle;

export function WikiPage({
  title,
  subTitle,
  summary,
  tableOfContents,
  content,
}: Props) {
  return (
    <div className={"sm:max-w-4xl sm:mx-auto sm:px-4 sm:py-8"}>
      <Card className="py-8 px-12 rounded-none sm:rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {subTitle && (
          <h2 className="text-2xl font-semibold mb-2">{subTitle}</h2>
        )}
        {summary && <div className="prose max-w-none mb-8">{summary}</div>}
        {tableOfContents}
        {content}
      </Card>
    </div>
  );
}

export const H2 = ({ children }: PropsWithChildren) => (
  <>
    <h2 className="text-2xl font-semibold mb-2">{children}</h2>
    <div className="w-full border-b border-gray-300 mb-4" />
  </>
);

export const H3 = ({ children }: PropsWithChildren) => (
  <>
    <h3 className="text-xl font-semibold mb-2">{children}</h3>
    <div className="w-full border-b border-gray-200 mb-4" />
  </>
);

export const Content = ({ children }: PropsWithChildren) => (
  <section className="prose max-w-none mb-8">{children}</section>
);
