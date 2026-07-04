import { useAtomValue } from "jotai";
import { DamageType } from "../enums/DamageType";
import { armourAtom } from "../state/character";
import { ArmourIcon } from "./icons/ArmourIcon";

export const ArmourStats = () => {
  const armour = useAtomValue(armourAtom);

  return (
    <div>
      <div className="p-6">
        <h3 className="text-xl font-semibold leading-none tracking-tight">
          Armour
        </h3>
      </div>
      <div className="p-6 pt-0">
        {/* <div className="grid grid-cols-2 gap-3"> */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {Object.entries(armour).map(([type, value]) => (
            <div
              key={type}
              className="flex items-center gap-1 text-muted-foreground text-sm"
            >
              <ArmourIcon type={type as DamageType} size={20} />
              <span className={value < 0 ? "text-destructive" : ""}>
                {type} {value === 0 ? "-" : value > 0 ? `+${value}` : value}
              </span>
            </div>
          ))}
          {Object.keys(armour).length === 0 ? (
            <span className="text-muted-foreground text-sm">None</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
