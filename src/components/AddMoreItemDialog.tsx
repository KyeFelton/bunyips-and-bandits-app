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
import { QuantityPriceFields } from "./QuantityPriceFields";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: CharacterItem;
  maxQuantity: number;
  money: number;
  onConfirm: (quantity: number, cost: number) => void;
};

export const AddMoreItemDialog = ({
  open,
  onOpenChange,
  item,
  maxQuantity,
  money,
  onConfirm,
}: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (open) {
      setQuantity(1);
      setCost(undefined);
    }
  }, [open, item.id]);

  const total = (cost ?? 0) * quantity;
  const unaffordable = total > money;
  const canConfirm =
    cost !== undefined && !unaffordable && quantity >= 1 && quantity <= maxQuantity;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Add more</DialogTitle>
        </DialogHeader>

        <QuantityPriceFields
          itemName={item.name}
          quantity={quantity}
          onQuantityChange={setQuantity}
          maxQuantity={maxQuantity}
          price={cost}
          onPriceChange={setCost}
          priceLabel="Cost per item"
          total={total}
          totalInvalid={unaffordable}
          totalHint={
            unaffordable && (
              <p className="text-sm text-destructive">Insufficient funds</p>
            )
          }
        />

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm(quantity, cost ?? 0);
              onOpenChange(false);
            }}
            disabled={!canConfirm}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
