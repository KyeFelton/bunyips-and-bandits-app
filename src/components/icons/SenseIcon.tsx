import {
  Eye,
  Ear,
  Soup,
  Sun,
  Flame,
  Wind,
  Mountain,
  Brain,
} from "lucide-react";
import { cn } from "../../utils/cn";

export const SightIcon = ({
  standard,
  infrared,
  className,
}: {
  standard: boolean;
  infrared: boolean;
  className?: string;
}) => (
  <div className={cn("relative w-7", className)}>
    <Eye className="h-5 w-5" />
    {standard && <Sun className="absolute -top-1 -right-1 h-3 w-3" />}
    {infrared && <Flame className="absolute -bottom-1 -right-1 h-3 w-3" />}
  </div>
);

export const HearingIcon = ({
  standard,
  tremor,
  className,
}: {
  standard: boolean;
  tremor: boolean;
  className?: string;
}) => (
  <div className={cn("relative w-7", className)}>
    <Ear className="h-5 w-5" />
    {standard && <Wind className="absolute -top-1 -right-1 h-3 w-3" />}
    {tremor && <Mountain className="absolute -bottom-1 -right-1 h-3 w-3" />}
  </div>
);

export const SmellIcon = ({ className }: { className?: string }) => (
  <Soup className={cn("h-5 w-5", className)} />
);

export const PsychicSenseIcon = ({ className }: { className?: string }) => (
  <Brain className={cn("h-5 w-5", className)} />
);
