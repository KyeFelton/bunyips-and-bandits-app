import { useAtom, useAtomValue } from "jotai";
import { availablePathPointsAtom, pathsAtom } from "./../state/character";
import { PathProgressionForm } from "./PathProgressionForm";
import { PathProgression } from "./../models/paths";

export const PathsStep = () => {
  const [paths, setPaths] = useAtom(pathsAtom);
  const availablePathPoints = useAtomValue(availablePathPointsAtom);
  const pathProgressions = paths.map((path) => ({ ...path, initialLevel: 0 }));

  const handlePathChange = (path: PathProgression) => {
    setPaths((prev) =>
      prev
        .filter((p) => p.name !== path.name)
        .concat(path.level > 0 ? [path] : [])
        .sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  return (
    <div className="space-y-4">
      <PathProgressionForm
        availablePathPoints={availablePathPoints}
        paths={pathProgressions}
        onPathChange={handlePathChange}
      />
    </div>
  );
};
