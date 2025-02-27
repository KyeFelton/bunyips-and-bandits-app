import { useAtomValue } from 'jotai';
import { pathsAtom, customTraitsAtom } from '../../state/character';

type TraitWithPath = {
  name: string;
  description: string;
  path: string;
  id: string;
};

export const TraitsList = () => {
  const paths = useAtomValue(pathsAtom);
  const customTraits = useAtomValue(customTraitsAtom);

  const traits: TraitWithPath[] = [
    ...paths.flatMap((path) =>
      path.unlockables
        .filter((unlock) => unlock.level <= path.level)
        .flatMap((unlock) =>
          unlock.traits.map((trait) => ({
            name: trait.name,
            description: trait.description,
            path: path.name,
            id: `${path.name}-${trait.name}`,
          }))
        )
    ),
    ...Object.values(customTraits).map((trait) => ({
      name: trait.name,
      description: trait.description,
      path: 'Custom',
      id: `Custom-${trait.name}`,
    })),
  ].sort((a, b) => a.name.localeCompare(b.name));

  if (traits.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-8">
        No traits unlocked. Select a path and increase its level to unlock
        traits, or create custom traits in the character editor.
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {traits.map((trait) => (
        <div key={trait.id} className="p-4">
          <div className="font-semibold">{trait.name}</div>
          <div className="pb-2 text-sm text-muted-foreground">{trait.path}</div>
          <p className="text-sm">{trait.description}</p>
        </div>
      ))}
    </div>
  );
};