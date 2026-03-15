import { Badge } from "./ui/badge";
import { Action } from "../models/actions";
import { Trait } from "../models/traits";

type Props = {
  level: number;
  actions: Action[];
  traits: Trait[];
};

export function ProgressionItems({ level, actions, traits }: Props) {
  const allItems = [
    ...traits.map((t) => ({ type: "trait" as const, data: t })),
    ...actions.map((a) => ({ type: "action" as const, data: a })),
  ];
  return (
    <div className="py-4 px-2 space-y-4">
      {allItems.map((item, index) => {
        const isFirst = index === 0;
        if (item.type === "trait") {
          return (
            <div key={item.data.name} className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-sm">{item.data.name}</p>
                {isFirst && (
                  <span className="text-sm px-2 py-0.5 rounded bg-primary/20 text-primary flex-shrink-0">
                    Level {level}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {item.data.description}
              </p>
            </div>
          );
        } else {
          const action = item.data;
          return (
            <div key={action.name} className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-sm">{action.name}</p>
                {isFirst && (
                  <span className="text-sm px-2 py-0.5 rounded bg-primary/20 text-primary flex-shrink-0">
                    Level {level}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{action.effect}</p>
              <div className="flex flex-wrap gap-2">
                {action.range !== "Self" && (
                  <Badge variant="outline" className="text-xs">
                    Range: {action.range}
                  </Badge>
                )}
                {action.areaOfEffect !== "Single target" && (
                  <Badge variant="outline" className="text-xs">
                    Area: {action.areaOfEffect}
                  </Badge>
                )}
                {(action.staminaCost === "variable" ||
                  (typeof action.staminaCost === "number" &&
                    action.staminaCost > 0)) && (
                  <Badge variant="outline" className="text-xs">
                    Stamina:{" "}
                    {action.staminaCost === "variable"
                      ? "Variable"
                      : action.staminaCost}
                  </Badge>
                )}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
