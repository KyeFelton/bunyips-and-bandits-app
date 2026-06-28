import { useAtomValue } from "jotai";
import {
  actionsCountAtom,
  evasionsCountAtom,
  weaponAtom,
} from "./../state/character";
import { ArmourIcon } from "./icons/ArmourIcon";
import { DamageType } from "./../enums/DamageType";

export const CombatCard = () => {
  const actionsCount = useAtomValue(actionsCountAtom);
  const evasionsCount = useAtomValue(evasionsCountAtom);
  const weapon = useAtomValue(weaponAtom);

  return (
    <div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Combat
        </h3>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Actions</span>
            <span>{actionsCount <= 0 ? "-" : actionsCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Evasions</span>
            <span>{evasionsCount <= 0 ? "-" : evasionsCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Weapon Damage</span>
            <span className="flex items-center gap-1">
              <ArmourIcon type={weapon.damageType as DamageType} size={20} />
              {weapon.damage > 0 ? `+${weapon.damage}` : "-"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
