import { ItemLocation } from "../enums/ItemLocation";
import { CharacterItem } from "../models/items";
import { buildDescription, isPartialSlotItem, unitsPerSlot } from "../utils/items";
import { RichDescription } from "./RichDescription";

type Props = {
  item: CharacterItem;
};

type DetailRow = {
  label: string;
  value: string;
};

const formatSlots = (item: CharacterItem): string => {
  if (isPartialSlotItem(item)) {
    return `${unitsPerSlot(item)} per backpack slot`;
  }
  return item.slots === 1 ? "1 backpack slot" : `${item.slots} backpack slots`;
};

const buildDetailRows = (item: CharacterItem): DetailRow[] => {
  const rows: DetailRow[] = [];

  if (item.quantity > 1 || isPartialSlotItem(item)) {
    rows.push({ label: "Quantity", value: item.quantity.toString() });
  }
  if (item.defaultCost !== undefined) {
    rows.push({ label: "Market value", value: `£ ${item.defaultCost}` });
  }
  rows.push({ label: "Backpack slots", value: formatSlots(item) });
  if (item.singleUse) {
    rows.push({ label: "Single use", value: "Yes" });
  }
  if (item.stackable) {
    rows.push({ label: "Stackable effects", value: "Yes" });
  }
  if (item.location === ItemLocation.Stored && item.storageLocation) {
    rows.push({ label: "Stored at", value: item.storageLocation });
  }

  return rows;
};

export const ItemDetails = ({ item }: Props) => {
  const rows = buildDetailRows(item);

  return (
    <div className="space-y-6">
      <RichDescription className="text-sm text-muted-foreground" text={[item.description, buildDescription(item)].join(" ")} />

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        {rows.map(({ label, value }) => (
          <div key={label} className="contents">
            <dt className="text-muted-foreground">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
