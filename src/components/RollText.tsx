import { ArrowDown, ArrowUp } from "lucide-react";

type Props = {
  dice: number;
  hasAdvantage?: boolean;
  hasDisadvantage?: boolean;
  modifier: number;
};

export const RollText = ({
  dice,
  hasAdvantage,
  hasDisadvantage,
  modifier,
}: Props) => {
  return (
    <span className="flex items-center gap-1">
      d{dice}
      {hasAdvantage && !hasDisadvantage && (
        <ArrowUp
          className={`text-muted-foreground h-4 w-4 ${modifier ? "mr-1" : ""}`}
        />
      )}
      {hasDisadvantage && !hasAdvantage && (
        <ArrowDown
          className={`text-muted-foreground h-4 w-4 ${modifier ? "mr-1" : ""}`}
        />
      )}
      {modifier > 0
        ? ` + ${modifier}`
        : modifier < 0
        ? ` - ${modifier * -1}`
        : ""}
    </span>
  );
};
