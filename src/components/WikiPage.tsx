import { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { WikiContent } from "../models/wikiContent";
import { ArrowLeft } from "lucide-react";

type Props = Partial<WikiContent> & {
  backTo?: { label: string; path: string };
  children?: ReactNode;
};

export function WikiPage({
  title,
  subTitle,
  summary,
  tableOfContents,
  main,
  backTo,
  children,
}: Props) {
  return (
    <div className="py-6 px-4 md:py-8 md:px-12 min-h-full space-y-6 md:space-y-8 bg-background">
      {backTo && (
        <Link to={backTo.path} className="inline-block">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backTo.label}
          </Button>
        </Link>
      )}
      {title && <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>}
      {subTitle && <h2 className="text-2xl font-semibold mb-2">{subTitle}</h2>}
      {summary && <div className="prose max-w-none mb-8">{summary}</div>}
      {tableOfContents}
      {main}
      {children}
    </div>
  );
}

export const H2 = ({ children }: PropsWithChildren) => (
  <div>
    <h2 className="text-2xl font-semibold mb-2">{children}</h2>
    <div className="w-full border-b border-gray-300" />
  </div>
);

export const H3 = ({ children }: PropsWithChildren) => (
  <div>
    <h3 className="text-xl font-semibold mb-2">{children}</h3>
    <div className="w-full border-b border-gray-200" />
  </div>
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
