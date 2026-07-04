import { useAtomValue } from "jotai";
import { Locomotion } from "../enums/Locomotion";
import { SpeedRating } from "../enums/SpeedRating";
import { speedAtom } from "../state/character";
import { SpeedIcon } from "./icons/SpeedIcon";

export const SpeedStats = () => {
  const speed = useAtomValue(speedAtom);

  return (
    <div>
      <div className="p-6">
        <h3 className="text-xl font-semibold leading-none tracking-tight">
          Speed
        </h3>
      </div>
      <div className="p-6 pt-0">
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(speed)
            .filter(([, rating]) => rating !== SpeedRating.None)
            .map(([type, value]) => (
              <div
                key={type}
                className="flex items-center gap-1 text-muted-foreground text-sm"
              >
                <SpeedIcon type={type as Locomotion} />
                <span>{type}:</span>
                <span className="text-foreground">{value}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
