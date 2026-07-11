import { ArrowDown, ArrowUp } from "lucide-react";
import { useState, type ReactNode } from "react";
import { SkillType } from "../enums/SkillType";
import { cn } from "../utils/cn";
import { useRollToast } from "./RollToast";
import { RollText } from "./RollText";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type RollMode = "disadv" | "norm" | "adv";

type Props = {
  name: string;
  skillType: SkillType;
  dice: number;
  modifier: number;
  hasAdvantage: boolean;
  hasDisadvantage: boolean;
  disabled?: boolean;
  onRoll?: () => void;
};

const getAtomRollMode = (
  hasAdvantage: boolean,
  hasDisadvantage: boolean,
): RollMode => {
  if (hasAdvantage && !hasDisadvantage) return "adv";
  if (hasDisadvantage && !hasAdvantage) return "disadv";
  return "norm";
};

const rollModeToFlags = (mode: RollMode) => ({
  hasAdvantage: mode === "adv",
  hasDisadvantage: mode === "disadv",
});

type RollModeButtonProps = {
  value: "disadv" | "adv";
  mode: RollMode;
  label: string;
  onToggle: (value: "disadv" | "adv") => void;
  icon: ReactNode;
};

const RollModeButton = ({
  value,
  mode,
  label,
  onToggle,
  icon,
}: RollModeButtonProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        type="button"
        aria-label={label}
        aria-pressed={mode === value}
        onClick={() => onToggle(value)}
        className={cn(
          "flex flex-1 items-center justify-center transition-colors",
          mode === value
            ? "bg-accent text-accent-foreground"
            : "bg-background text-muted-foreground hover:bg-accent-subtle",
        )}
      >
        {icon}
      </button>
    </TooltipTrigger>
    <TooltipContent>{label}</TooltipContent>
  </Tooltip>
);

type RollModeToggleProps = {
  mode: RollMode;
  onToggle: (value: "disadv" | "adv") => void;
};

const RollModeToggle = ({ mode, onToggle }: RollModeToggleProps) => (
  <div className="flex h-full w-9 shrink-0 flex-col divide-y divide-border">
    <RollModeButton
      value="adv"
      mode={mode}
      label="Advantage"
      onToggle={onToggle}
      icon={<ArrowUp className="h-3 w-3" />}
    />
    <RollModeButton
      value="disadv"
      mode={mode}
      label="Disadvantage"
      onToggle={onToggle}
      icon={<ArrowDown className="h-3 w-3" />}
    />
  </div>
);

export const RollButton = ({
  name,
  skillType,
  dice,
  modifier,
  hasAdvantage,
  hasDisadvantage,
  disabled,
  onRoll,
}: Props) => {
  const showRollToast = useRollToast();
  const atomMode = getAtomRollMode(hasAdvantage, hasDisadvantage);
  const [overrideMode, setOverrideMode] = useState<RollMode | null>(null);
  const mode = overrideMode ?? atomMode;

  const handleToggle = (value: "disadv" | "adv") => {
    const nextMode = mode === value ? "norm" : value;
    setOverrideMode(nextMode === atomMode ? null : nextMode);
  };

  const handleRoll = () => {
    onRoll?.();

    const { hasAdvantage: rollAdvantage, hasDisadvantage: rollDisadvantage } =
      rollModeToFlags(mode);

    showRollToast({
      name,
      type: skillType,
      dice,
      modifier,
      hasAdvantage: rollAdvantage,
      hasDisadvantage: rollDisadvantage,
    });

    setOverrideMode(null);
  };

  return (
    <TooltipProvider delayDuration={300}>
      <div className="inline-flex h-9 divide-x divide-border overflow-hidden rounded-md border border-input">
        <Button
          variant="outline"
          size="sm"
          className="h-full rounded-none border-0 px-3 shadow-none"
          onClick={handleRoll}
          disabled={disabled}
        >
          <RollText dice={dice} modifier={modifier} />
        </Button>
        <RollModeToggle mode={mode} onToggle={handleToggle} />
      </div>
    </TooltipProvider>
  );
};
