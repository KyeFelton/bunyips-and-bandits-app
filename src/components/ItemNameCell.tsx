import { HelpCircle } from "lucide-react";
import { ItemLocation } from "../enums/ItemLocation";
import { CharacterItem } from "../models/items";
import { HAND_SLOT_COUNT } from "../utils/items";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type Props = {
  name: string;
  item: CharacterItem;
  displayName: string;
};

export const ItemNameCell = ({ item, displayName }: Props) => (
  <div className="flex items-center gap-1 min-h-7">
    {displayName}
    {item.location === ItemLocation.Held && item.slots >= HAND_SLOT_COUNT && (
      <span className="text-xs text-muted-foreground">(2H)</span>
    )}
    <Popover>
      <PopoverTrigger className="h-7 w-7 shrink-0 flex items-center justify-center text-muted-foreground hover:bg-accent-subtle hover:text-accent-foreground rounded-full">
        <HelpCircle className="h-4 w-4 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="max-w-[300px] text-sm" side="right">
        <p>{item.description}</p>
      </PopoverContent>
    </Popover>
  </div>
);
