type Props = {
  value: number;
  maxValue: number;
  color?: "red" | "green" | "blue";
};

export const SpeciesHealthBar = ({
  value,
  maxValue,
  color = "green",
}: Readonly<Props>) => {
  const colorClass = {
    red: "bg-red-foreground",
    green: "bg-green-foreground",
    blue: "bg-blue-foreground",
  }[color];

  return (
    <div style={{ width: `${(value * 100) / maxValue}%` }}>
      <div className="flex">
        {Array.from({ length: value }, (_, index) => {
          return (
            <div
              key={index}
              className={`h-6 w-full border border-black first:rounded-l-sm last:rounded-r-sm border-r-0 last:border-r ${colorClass}`}
            />
          );
        })}
      </div>
    </div>
  );
};
