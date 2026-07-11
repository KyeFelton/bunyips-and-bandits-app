import { Brain, Heart } from "lucide-react";
import { cn } from "../../utils/cn";

type Props = {
  size?: number;
  className?: string;
};

export const BodyIcon = ({ size = 16, className = "" }: Props) => {
  const props = {
    className: cn("inline-flex align-text-text-bottom", className),
    width: size,
    height: size,
  };
  return <Heart {...props} />;
};

export const MindIcon = ({ size = 16, className = "" }: Props) => {
  const props = {
    className: cn("inline-flex align-text-text-bottom", className),
    width: size,
    height: size,
  };
  return <Brain {...props} />;
};
