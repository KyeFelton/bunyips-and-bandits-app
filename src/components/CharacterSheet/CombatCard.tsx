import { useAtomValue } from 'jotai';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { actionsCountAtom, evasionsCountAtom, weaponDamageAtom } from '../../state/character';

export const CombatCard = () => {
  const actionsCount = useAtomValue(actionsCountAtom);
  const evasionsCount = useAtomValue(evasionsCountAtom);
  const weaponDamage = useAtomValue(weaponDamageAtom);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Combat</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Actions</span>
            <span>{actionsCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Evasions</span>
            <span>{evasionsCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Weapon Damage</span>
            <span>{weaponDamage > 0 ? `+${weaponDamage}` : '-'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};