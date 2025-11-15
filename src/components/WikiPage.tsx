import { PropsWithChildren } from "react";
import { Card } from "./ui/card";
import { WikiContent } from "../models/wikiContent";

type Props = WikiContent;

export function WikiPage({
  title,
  subTitle,
  summary,
  tableOfContents,
  main,
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
        {main}
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

export const Body = ({ children }: PropsWithChildren) => (
  <section className="prose max-w-none mb-8">{children}</section>
);

export function TornPaper({ children }: PropsWithChildren) {
  return (
    <div
      className={`
        relative bg-[#fdf6e3] border-4 border-[#bfa76a] rounded-lg shadow-lg
        px-8 py-6 my-8
        font-serif
        before:absolute before:inset-x-0 before:-top-4 before:h-4
        before:bg-[url('/images/torn-edge-top.png')] before:bg-repeat-x
        after:absolute after:inset-x-0 after:-bottom-4 after:h-4
        after:bg-[url('/images/torn-edge-bottom.png')] after:bg-repeat-x
      `}
      style={{
        // Optional: Add a subtle paper texture if you have one
        backgroundImage: "url('/images/paper-texture.png')",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
