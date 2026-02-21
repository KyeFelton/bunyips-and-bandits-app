type Props = {
  value: number;
  maxValue: number;
  color?: "danger" | "good" | "info";
};

export const SpeciesHealthBar = ({
  value,
  maxValue,
  color = "good",
}: Readonly<Props>) => {
  const colorClass = {
    danger: "bg-danger",
    good: "bg-good",
    info: "bg-info",
  }[color];

  return (
    <div style={{ width: `${(value * 100) / maxValue}%` }}>
      <div className="flex">
        {Array.from({ length: value }, (_, index) => {
          return (
            <div
              key={index}
              className={`h-6 w-full border border-foreground first:rounded-l-sm last:rounded-r-sm border-r-0 last:border-r ${colorClass}`}
            />
          );
        })}
      </div>
    </div>
  );
};
