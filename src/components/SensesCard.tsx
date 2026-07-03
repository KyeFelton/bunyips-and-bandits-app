import { useAtomValue } from "jotai";
import { sensesAtom } from "./../state/character";
import { SenseIcon } from "./icons/SenseIcon";

export const SensesCard = () => {
  const senses = useAtomValue(sensesAtom);
  const { keen: keenSenses, poor: poorSenses } = senses;

  return (
    <div>
      <div className="p-6">
        <h3 className="text-xl font-semibold leading-none tracking-tight">
          Senses
        </h3>
      </div>
      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {Object.values(keenSenses).map((sense) => (
            <div
              key={sense}
              className="flex items-center gap-1 text-muted-foreground text-sm"
            >
              <SenseIcon type={sense} />
              <span>{sense}:</span>
              <span className="text-foreground">Keen</span>
            </div>
          ))}
          {Object.values(poorSenses).map((sense) => (
            <div
              key={sense}
              className="flex items-center gap-1 text-muted-foreground text-sm"
            >
              <SenseIcon type={sense} />
              <span>{sense}:</span>
              <span className="text-foreground">Poor</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
