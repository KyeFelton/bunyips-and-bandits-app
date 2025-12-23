import { Check } from "lucide-react";

interface CircleCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export const CircleCheckbox = ({ checked, onChange }: CircleCheckboxProps) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 cursor-pointer appearance-none rounded-full border-2 border-muted-foreground checked:bg-primary checked:border-primary"
      />
      {checked && (
        <Check className="w-3.5 h-3.5 text-primary-foreground absolute pointer-events-none stroke-[3]" />
      )}
    </div>
  );
};
