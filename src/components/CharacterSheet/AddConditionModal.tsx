import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { AllConditions } from "../../models/conditions";
import { useState } from "react";
import { conditionsAtom } from "../../state/character";
import { useAtomValue } from "jotai";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (condition: string) => void;
};

export const AddConditionModal = ({ isOpen, onClose, onAdd }: Props) => {
  const conditions = useAtomValue(conditionsAtom);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(
    null
  );

  const handleSelect = (condition: string) => {
    setSelectedCondition(condition);
  };

  const handleAdd = () => {
    if (selectedCondition) {
      onAdd(selectedCondition);
      setSelectedCondition(null);
      onClose();
    }
  };

  const selectedConditionData = selectedCondition
    ? AllConditions.find((c) => c.name === selectedCondition)
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Condition</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Select
            value={selectedCondition ?? undefined}
            onValueChange={handleSelect}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a condition" />
            </SelectTrigger>
            <SelectContent>
              {AllConditions.filter(
                (condition) =>
                  !conditions.find((c) => c.name === condition.name)
              ).map((condition) => (
                <SelectItem key={condition.name} value={condition.name}>
                  {condition.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedConditionData && (
            <div className="text-sm text-muted-foreground">
              {selectedConditionData.description}
            </div>
          )}
        </div>
        <DialogFooter>
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
