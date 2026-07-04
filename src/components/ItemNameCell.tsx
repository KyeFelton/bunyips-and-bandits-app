import { HelpCircle } from "lucide-react";
import { ItemLocation } from "../enums/ItemLocation";
import { CharacterItem } from "../models/items";
import { HAND_SLOT_COUNT } from "../utils/items";
import { ItemDetails } from "./ItemDetails";
import { ItemIcon } from "./icons/ItemIcon";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

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
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 shrink-0 rounded-full text-muted-foreground hover:bg-accent-subtle hover:text-accent-foreground"
        >
          <HelpCircle className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {item.itemType && (
              <ItemIcon
                itemType={item.itemType}
                className="h-5 w-5 shrink-0 text-muted-foreground"
              />
            )}
            {displayName}
          </DialogTitle>
        </DialogHeader>
        <ItemDetails item={item} />
      </DialogContent>
    </Dialog>
  </div>
);
