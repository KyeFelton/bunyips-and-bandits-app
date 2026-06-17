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
  onConfirm: (quantity: number, price: number) => void;
};

export const SellItemDialog = ({
  open,
  onOpenChange,
  item,
  onConfirm,
}: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (open) {
      setQuantity(1);
      setPrice(undefined);
    }
  }, [open, item.id]);

  const total = (price ?? 0) * quantity;
  const canConfirm =
    price !== undefined && quantity >= 1 && quantity <= item.quantity;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Sell item</DialogTitle>
        </DialogHeader>

        <QuantityPriceFields
          itemName={item.name}
          quantity={quantity}
          onQuantityChange={setQuantity}
          maxQuantity={item.quantity}
          price={price}
          onPriceChange={setPrice}
          priceLabel={item.quantity > 1 ? "Price per item" : "Price"}
          total={total}
          priceHint={
            item.defaultCost !== undefined && (
              <p className="text-xs text-muted-foreground">
                Market value: £ {item.defaultCost}
              </p>
            )
          }
        />

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm(quantity, price ?? 0);
              onOpenChange(false);
            }}
            disabled={!canConfirm}
          >
            Sell
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
