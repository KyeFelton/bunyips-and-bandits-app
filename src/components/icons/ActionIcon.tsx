import { BatteryMedium, ClockFading, Ruler, Scan } from "lucide-react";
import { cn } from "../../utils/cn";

export type ActionAttributeIconType = "range" | "area" | "stamina" | "duration";

const labels: Record<ActionAttributeIconType, string> = {
  range: "Range",
  area: "Area",
  stamina: "Stamina",
  duration: "Duration",
};

type Props = {
  type: ActionAttributeIconType;
  size?: number;
  className?: string;
  showText?: boolean;
};

export const ActionIcon = ({
  type,
  size = 14,
  className = "",
  showText = false,
}: Props) => {
  const props = {
    className: cn("inline-flex align-text-text-bottom", className),
    width: size,
    height: size,
  };

  const icon = (() => {
    switch (type) {
      case "range":
        return <Ruler {...props} />;
      case "area":
        return <Scan {...props} />;
      case "stamina":
        return <BatteryMedium {...props} />;
      case "duration":
        return <ClockFading {...props} />;
    }
  })();

  if (!showText) {
    return icon;
  }

  return (
    <span className="inline-flex items-center gap-1 align-middle">
      {icon}
      {labels[type]}
    </span>
  );
};
