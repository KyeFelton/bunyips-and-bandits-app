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
  infoBox,
  backTo,
  children,
}: Props) {
  return (
    <div className="py-6 px-4 md:py-8 md:px-12 flex-1 bg-background space-y-4">
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
      <div className="overflow-hidden space-y-6">
        {infoBox && (
          <div className="mb-6 sm:float-right sm:clear-right sm:ml-6 sm:mb-4 w-full sm:w-52 lg:w-72 rounded-lg border border-border overflow-hidden bg-card text-sm">
            {infoBox.imageSrc && (
              <img src={infoBox.imageSrc} alt="" className="w-full" />
            )}
            {infoBox.traits.map((trait, i) => (
              <div key={i} className="flex border-t border-border">
                <div className="w-24 shrink-0 px-3 py-1.5 font-medium text-muted-foreground bg-muted/30">
                  {trait.key}
                </div>
                <div className="flex-1 px-3 py-1.5">{trait.value}</div>
              </div>
            ))}
          </div>
        )}
        {summary && <div className="prose max-w-none">{summary}</div>}
        {tableOfContents}
        {main && <div className="prose max-w-none">{main}</div>}
        {children}
      </div>
    </div>
  );
}

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
  className?: string;
}>;

export function Callout({
  variant = "tip",
  float,
  className,
  children,
}: CalloutProps) {
  return (
    <div
      className={cn(
        "border-l-4 rounded-r-lg px-4 py-3 my-4",
        calloutVariantClasses[variant],
        float && calloutFloatClasses[float],
        className,
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
