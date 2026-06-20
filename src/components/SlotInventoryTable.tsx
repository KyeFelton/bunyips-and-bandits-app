import { Plus } from "lucide-react";
import { useState } from "react";
import { ItemLocation } from "../enums/ItemLocation";
import { CharacterItem } from "../models/items";
import { AddItemTarget, SlotDisplayRow } from "../utils/items";
import { AddItemDialog } from "./AddItemDialog";
import { Button } from "./ui/button";
import { ItemAction, ItemActionsMenu } from "./ItemActionsMenu";
import { ItemNameCell } from "./ItemNameCell";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { cn } from "../utils/cn";

const inventoryCellClass = "px-3 py-3 align-middle";

const POSITIONAL_LOCATIONS = [ItemLocation.Worn, ItemLocation.Held];

type Props = {
  title: string;
  icon: React.ReactNode;
  rows: SlotDisplayRow[];
  location: ItemLocation;
  onAction: (stackId: string, action: ItemAction, rowUnits: number) => void;
  getActionDisabled: (
    item: CharacterItem
  ) => Partial<Record<ItemAction, boolean>>;
};

export const SlotInventoryTable = ({
  title,
  icon,
  rows,
  location,
  onAction,
  getActionDisabled,
}: Props) => {
  const [hoveredGroupKey, setHoveredGroupKey] = useState<string | null>(null);

  const getAddTarget = (row: SlotDisplayRow): AddItemTarget => ({
    location,
    index: POSITIONAL_LOCATIONS.includes(location)
      ? row.slotIndex
      : undefined,
  });

  const getGroupKey = (index: number): string | null => {
    for (let i = index; i >= 0; i--) {
      const row = rows[i];
      if (!row.isLabelOnly) {
        return row.rowSpan > 1 && row.itemName ? row.itemName : null;
      }
    }
    return null;
  };

  const getGroupHoverHandlers = (groupKey: string | null) =>
    groupKey
      ? {
          onMouseEnter: () => setHoveredGroupKey(groupKey),
          onMouseLeave: () => setHoveredGroupKey(null),
        }
      : {};

  const isGroupHovered = (groupKey: string | null) =>
    groupKey !== null && hoveredGroupKey === groupKey;

  const groupCellClass = (groupKey: string | null) =>
    isGroupHovered(groupKey) ? "bg-muted/50" : undefined;

  const groupRowClass = (groupKey: string | null) =>
    groupKey !== null ? "hover:bg-transparent" : undefined;

  const renderRow = (row: SlotDisplayRow, index: number) => {
    const groupKey = getGroupKey(index);
    const groupHoverHandlers = getGroupHoverHandlers(groupKey);

    if (row.isLabelOnly) {
      const nextRow = rows[index + 1];
      const isLastInGroup = !nextRow?.isLabelOnly;

      return (
        <TableRow
          key={`${location}-${row.slotIndex}-continuation`}
          {...groupHoverHandlers}
          className={cn(
            groupRowClass(groupKey),
            !isLastInGroup && "border-b-0",
          )}
        >
          <TableCell
            className={cn(
              inventoryCellClass,
              "font-medium text-muted-foreground w-28",
              groupCellClass(groupKey),
              !isLastInGroup && "border-b-0",
              isLastInGroup && "border-b border-border",
            )}
          >
            {row.label}
          </TableCell>
        </TableRow>
      );
    }

    const { itemName, item, displayName } = row;
    const isEmpty = !item || !itemName;
    const isMerged = row.rowSpan > 1;

    return (
      <TableRow
        key={`${location}-${row.slotIndex}`}
        {...groupHoverHandlers}
        className={cn(groupRowClass(groupKey), isMerged && "border-b-0")}
      >
        <TableCell
          className={cn(
            inventoryCellClass,
            "font-medium text-muted-foreground w-28",
            groupCellClass(groupKey),
            isMerged && "border-b-0",
          )}
        >
          {row.label}
        </TableCell>
        <TableCell
          rowSpan={row.rowSpan}
          {...groupHoverHandlers}
          className={cn(
            inventoryCellClass,
            groupCellClass(groupKey),
            isMerged && "border-b border-border",
            isEmpty && "px-2"
          )}
        >
          {isEmpty ? (
            <AddItemDialog
              target={getAddTarget(row)}
              trigger={
                <Button
                  variant="ghost"
                  size="mini"
                  className="text-muted-foreground"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add item
                </Button>
              }
            />
          ) : (
            item &&
            itemName && (
              <ItemNameCell
                item={item}
                name={itemName}
                displayName={displayName ?? itemName}
              />
            )
          )}
        </TableCell>
        <TableCell
          rowSpan={row.rowSpan}
          {...groupHoverHandlers}
          className={cn(
            inventoryCellClass,
            "text-right w-12",
            groupCellClass(groupKey),
            isMerged && "border-b border-border",
          )}
        >
          {item && row.stackId ? (
            <div className="flex justify-end items-center">
              <ItemActionsMenu
                item={item}
                disabled={getActionDisabled(item)}
                onAction={(action) =>
                  onAction(row.stackId!, action, row.rowUnits)
                }
              />
            </div>
          ) : null}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div>
      <h3 className="text-sm font-semibold flex items-center gap-2 pb-2 border-b border-border">
        {icon}
        {title}
      </h3>
      <Table>
        <TableBody>{rows.map((row, index) => renderRow(row, index))}</TableBody>
      </Table>
    </div>
  );
};
