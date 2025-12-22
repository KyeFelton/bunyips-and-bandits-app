import { useAtomValue } from "jotai";
import { traitsAtom } from "./../state/character";

export const TraitsList = () => {
  const traits = useAtomValue(traitsAtom);

  if (traits.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-8">
        No traits unlocked. Level up your skills by rolling critical successes,
        or create custom traits in the character editor.
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {traits.map((trait, index) => (
        <div key={`${trait.name}-${index}`} className="p-4">
          <div className="font-semibold">{trait.name}</div>
          <p className="text-sm">{trait.description}</p>
        </div>
      ))}
    </div>
  );
};
