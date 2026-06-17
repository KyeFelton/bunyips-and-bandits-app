import { useEffect, useState } from "react";
import { CharacterItem } from "../models/items";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: CharacterItem;
  maxQuantity: number;
  onConfirm: (quantity: number) => void;
};

export const RemoveItemDialog = ({
  open,
  onOpenChange,
  item,
  maxQuantity,
  onConfirm,
}: Props) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (open) setQuantity(1);
  }, [open, item.id]);

  const hasMultiple = maxQuantity > 1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Remove item</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <p className="text-sm text-muted-foreground">{item.name}</p>

          {hasMultiple ? (
            <div className="space-y-2">
              <label className="text-sm font-medium">How many to remove?</label>
              <Select
                value={quantity.toString()}
                onValueChange={(value) => setQuantity(parseInt(value) || 1)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from(
                    { length: maxQuantity },
                    (_, index) => index + 1
                  ).map((value) => (
                    <SelectItem key={value} value={value.toString()}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <p className="text-sm">
              Are you sure you want to remove this item?
            </p>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              onConfirm(quantity);
              onOpenChange(false);
            }}
          >
            Remove
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
