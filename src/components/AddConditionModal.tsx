import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { AllConditions } from "./../models/conditions";
import { useState } from "react";
import { conditionsAtom } from "./../state/character";
import { useAtom } from "jotai";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddConditionModal = ({ isOpen, onClose }: Props) => {
  const [conditions, setConditions] = useAtom(conditionsAtom);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(
    null
  );

  const handleSelect = (condition: string) => {
    setSelectedCondition(condition);
  };

  const handleAdd = () => {
    const condition = AllConditions.find((c) => c.name === selectedCondition);
    if (condition) {
      setConditions((prev) => [...prev, condition]);
      setSelectedCondition(null);
      onClose();
    }
  };

  const selectedConditionData = selectedCondition
    ? AllConditions.find((c) => c.name === selectedCondition)
    : null;

  const availableConditions = AllConditions.filter((condition) => {
    const existingCondition = conditions.find((c) => c.name === condition.name);
    return condition.stackable || !existingCondition;
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md min-h-[300px] flex flex-col justify-between">
        <DialogHeader>
          <DialogTitle>Add Condition</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Select
            value={selectedCondition ?? undefined}
            onValueChange={handleSelect}
          >
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select a condition" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px] overflow-y-auto">
              {availableConditions.map((condition) => (
                <SelectItem key={condition.name} value={condition.name}>
                  {condition.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedConditionData && (
            <div className="text-sm text-muted-foreground">
              {selectedConditionData.description}
              {selectedConditionData.stackable > 0 && (
                <div className="mt-1">
                  This condition can be stacked{" "}
                  {selectedConditionData.stackable} times.
                </div>
              )}
            </div>
          )}
        </div>
        <DialogFooter className="mt-auto">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} disabled={!selectedCondition}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
