import {
  Backpack,
  Coins,
  EllipsisVertical,
  Hand,
  Plus,
  Shirt,
  Trash2,
  Warehouse,
  Zap,
} from "lucide-react";
import { CharacterItem } from "../models/items";
import { ItemLocation } from "../enums/ItemLocation";
import { isPartialSlotItem } from "../utils/items";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export type ItemAction =
  | "wear"
  | "store"
  | "hold"
  | "carry"
  | "sell"
  | "remove"
  | "use"
  | "addMore";

type Props = {
  item: CharacterItem;
  disabled?: Partial<Record<ItemAction, boolean>>;
  onAction: (action: ItemAction) => void;
};

export const ItemActionsMenu = ({ item, disabled = {}, onAction }: Props) => {
  const actions: {
    action: ItemAction;
    label: string;
    icon: React.ReactNode;
    show: boolean;
  }[] = [
    {
      action: "use",
      label: "Use",
      icon: <Zap className="h-4 w-4" />,
      show: item.singleUse && item.location === ItemLocation.Carried,
    },
    {
      action: "addMore",
      label: "Add more",
      icon: <Plus className="h-4 w-4" />,
      show: isPartialSlotItem(item) && item.location === ItemLocation.Carried,
    },
    {
      action: "wear",
      label: "Wear",
      icon: <Shirt className="h-4 w-4" />,
      show: Boolean(item.wearType) && item.location !== ItemLocation.Worn,
    },
    {
      action: "hold",
      label: "Hold",
      icon: <Hand className="h-4 w-4" />,
      show: item.location !== ItemLocation.Held,
    },
    {
      action: "carry",
      label: "Carry",
      icon: <Backpack className="h-4 w-4" />,
      show: item.location !== ItemLocation.Carried,
    },
    {
      action: "store",
      label: "Store",
      icon: <Warehouse className="h-4 w-4" />,
      show: item.location !== ItemLocation.Stored,
    },
    {
      action: "sell",
      label: "Sell",
      icon: <Coins className="h-4 w-4" />,
      show: true,
    },
    {
      action: "remove",
      label: "Remove",
      icon: <Trash2 className="h-4 w-4" />,
      show: true,
    },
  ];

  const visibleActions = actions.filter((entry) => entry.show);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {visibleActions.map(({ action, label, icon }) => (
          <DropdownMenuItem
            key={action}
            disabled={disabled[action]}
            onClick={() => onAction(action)}
            className="gap-2"
          >
            {icon}
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
