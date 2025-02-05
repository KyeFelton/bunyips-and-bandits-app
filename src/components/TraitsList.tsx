import { useAtomValue } from "jotai";
import { pathsAtom } from "../state/primitives";

type TraitWithPath = {
  name: string;
  description: string;
  path: string;
};

export const TraitsList = () => {
  const paths = useAtomValue(pathsAtom);

  const traits: TraitWithPath[] = paths
    .flatMap((path) =>
      path.unlockables
        .filter((unlock) => unlock.level <= path.level)
        .flatMap((unlock) =>
          unlock.traits.map((trait) => ({
            name: trait.name,
            description: trait.description,
            path: path.name,
          }))
        )
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  if (traits.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-8">
        No traits unlocked. Select a path and increase its level to unlock
        traits.
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {traits.map((trait) => (
        <div key={`${trait.path}-${trait.name}`} className="p-4">
          <div className="font-semibold">{trait.name}</div>
          <div className="pb-2 text-sm text-muted-foreground">{trait.path}</div>
          <p className="text-sm">{trait.description}</p>
        </div>
      ))}
    </div>
  );
};
