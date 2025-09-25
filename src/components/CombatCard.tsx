import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
    <Card>
      <CardHeader>
        <CardTitle>Combat</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};
