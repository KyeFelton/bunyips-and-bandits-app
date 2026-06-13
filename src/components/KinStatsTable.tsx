import { SenseType } from "../enums/SenseType";
import { SpeedRating } from "../enums/SpeedRating";
import { Kin } from "../models/kin";

type Props = {
  kin: Kin;
};

const ALL_SENSES: { type: SenseType; label: string }[] = [
  { type: SenseType.Sight, label: "Sight" },
  { type: SenseType.InfraredSight, label: "Infrared sight" },
  { type: SenseType.Hearing, label: "Hearing" },
  { type: SenseType.TremorHearing, label: "Tremor hearing" },
  { type: SenseType.Smell, label: "Smell" },
];

const groupCellClass =
  "bg-muted/30 font-semibold px-3 border-r border-border align-middle";
const statCellClass = "px-3 border-r border-border";
const valueCellClass = "px-3";

export function KinStatsTable({ kin }: Props) {
  const speedEntries = Object.entries(kin.species.speed).filter(
    ([, v]) => v !== SpeedRating.None
  );
  const skillEntries = Object.entries(kin.species.skillModifiers);

  return (
    <div className="prose border-t overflow-hidden text-sm">
      <table className="w-full">
        <tbody className="">
          {/* Health */}
          {[
            { label: "Body", value: String(kin.species.body) },
            { label: "Mind", value: String(kin.species.mind) },
            { label: "Stamina", value: String(kin.species.stamina) },
          ].map((row, i) => (
            <tr key={row.label}>
              {i === 0 && (
                <td rowSpan={3} className={groupCellClass}>
                  Health
                </td>
              )}
              <td className={statCellClass}>{row.label}</td>
              <td className={valueCellClass}>{row.value}</td>
            </tr>
          ))}

          {/* Speed */}
          {speedEntries.map(([locomotion, rating], i) => (
            <tr key={locomotion}>
              {i === 0 && (
                <td rowSpan={speedEntries.length} className={groupCellClass}>
                  Speed
                </td>
              )}
              <td className={statCellClass}>{locomotion}</td>
              <td className={valueCellClass}>{rating}</td>
            </tr>
          ))}

          {/* Senses */}
          {ALL_SENSES.map(({ type, label }, i) => {
            const value = kin.species.senses.keen.includes(type)
              ? "Keen"
              : kin.species.senses.poor.includes(type)
              ? "Poor"
              : "—";
            return (
              <tr key={type}>
                {i === 0 && (
                  <td rowSpan={ALL_SENSES.length} className={groupCellClass}>
                    Senses
                  </td>
                )}
                <td className={statCellClass}>{label}</td>
                <td className={valueCellClass}>{value}</td>
              </tr>
            );
          })}

          {/* Skills */}
          {skillEntries.map(([skill, value], i) => (
            <tr key={skill}>
              {i === 0 && (
                <td rowSpan={skillEntries.length} className={groupCellClass}>
                  Skill Bonuses
                </td>
              )}
              <td className={statCellClass}>{skill}</td>
              <td className={valueCellClass}>
                {(value ?? 0) > 0 ? `+${value}` : String(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
