import { ArrowLeft } from "lucide-react";
import { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { WikiContent } from "../models/wikiContent";
import { Button } from "./ui/button";

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
    <div className="py-6 px-4 md:py-8 md:px-12 flex-1 space-y-6 bg-background">
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
    <div className="w-full border-b border-border" />
  </div>
);

export const H3 = ({ children }: PropsWithChildren) => (
  <div>
    <h3 className="text-xl font-semibold mb-2">{children}</h3>
    <div className="w-full border-b border-border" />
  </div>
);

export const Body = ({ children }: PropsWithChildren) => (
  <section className="prose max-w-none mb-8">{children}</section>
);

type CalloutVariant = "tip" | "note" | "warning" | "danger";
type CalloutFloat = "left" | "right";

const calloutVariantClasses: Record<CalloutVariant, string> = {
  tip: "border-accent-foreground bg-accent-subtle text-foreground",
  note: "border-info bg-info/10 text-foreground",
  warning: "border-warning bg-warning/10 text-foreground",
  danger: "border-danger bg-danger/10 text-foreground",
};

const calloutFloatClasses: Record<CalloutFloat, string> = {
  left: "float-left mr-6 mb-2 clear-left",
  right: "float-right ml-6 mb-2 clear-right",
};

type CalloutProps = PropsWithChildren<{
  variant?: CalloutVariant;
  float?: CalloutFloat;
}>;

export function Callout({ variant = "tip", float, children }: CalloutProps) {
  return (
    <div
      className={cn(
        "border-l-4 rounded-r-lg px-4 py-3 my-4",
        calloutVariantClasses[variant],
        float && calloutFloatClasses[float],
      )}
    >
      {children}
    </div>
  );
}

export function Blockquote({ children }: PropsWithChildren) {
  return (
    <blockquote className="border-l-4 border-primary pl-4 py-1 my-4 italic text-muted-foreground">
      {children}
    </blockquote>
  );
}
