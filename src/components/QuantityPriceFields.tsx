import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = {
  itemName: string;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  maxQuantity: number;
  price: number | undefined;
  onPriceChange: (price: number | undefined) => void;
  priceLabel: string;
  total: number;
  totalInvalid?: boolean;
  priceHint?: React.ReactNode;
  totalHint?: React.ReactNode;
};

export const QuantityPriceFields = ({
  itemName,
  quantity,
  onQuantityChange,
  maxQuantity,
  price,
  onPriceChange,
  priceLabel,
  total,
  totalInvalid = false,
  priceHint,
  totalHint,
}: Props) => (
  <div className="space-y-4 py-2">
    <p className="text-sm text-muted-foreground">{itemName}</p>

    {maxQuantity > 1 && (
      <div className="space-y-2">
        <label className="text-sm font-medium">Quantity</label>
        <Select
          value={quantity.toString()}
          onValueChange={(value) => onQuantityChange(parseInt(value) || 1)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: maxQuantity }, (_, index) => index + 1).map(
              (value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground">Maximum: {maxQuantity}</p>
      </div>
    )}

    <div className="space-y-2">
      <label className="text-sm font-medium">{priceLabel}</label>
      <div className="relative max-w-[120px]">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
          £
        </span>
        <Input
          type="number"
          className="pl-7"
          min="0"
          value={price ?? ""}
          onChange={(event) =>
            onPriceChange(
              event.target.value === ""
                ? undefined
                : Math.max(0, parseInt(event.target.value) || 0)
            )
          }
        />
      </div>
      {priceHint}
    </div>

    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">Total:</span>
      <span className={totalInvalid ? "text-destructive" : undefined}>
        £ {total}
      </span>
    </div>
    {totalHint}
  </div>
);
