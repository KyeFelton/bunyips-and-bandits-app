import { Search } from "lucide-react";
import { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { WikiPage } from "../../../components/WikiPage";
import { AllItems } from "../../../data/items";
import { ItemType } from "../../../enums/ItemType";
import { Item } from "../../../models/items";
import { ItemIcon } from "../../../components/icons/ItemIcon";
import { cn } from "../../../utils/cn";
import { pascalToSentence } from "../../../utils/capitalize";
import { buildDescription } from "../../../utils/items";
import { RichDescription } from "../../../components/RichDescription";

function ItemCard({ item }: { item: Item }) {
  return (
    <Card className="p-4 space-y-3 border-2 border-muted flex flex-col">
      <div className="flex items-start justify-between gap-2">
        <p className="font-semibold text-lg leading-tight">{item.name}</p>
        {item.itemType && (
          <Badge
            variant="secondary"
            className="shrink-0 flex align-middle gap-1"
          >
            <ItemIcon itemType={item.itemType} />{" "}
            {pascalToSentence(item.itemType)}
          </Badge>
        )}
      </div>

      <RichDescription className="text-sm text-muted-foreground" text={[item.description, buildDescription(item)].join(" ")} />

      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-1 border-t border-muted mt-auto">
        {item.defaultCost !== undefined && (
          <span>{item.defaultCost} coins</span>
        )}
        <span>{item.slots === 1 ? "1 slot" : `${item.slots} slots`}</span>
        {item.singleUse && <span>Single use</span>}
      </div>
    </Card>
  );
}

function ItemCards({ items }: { items: Item[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {items.map((item) => (
        <div key={item.name} className="break-inside-avoid mb-4">
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}

const usedTypes = [
  ...new Set(AllItems.map((i) => i.itemType).filter(Boolean)),
] as ItemType[];

export function Items() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<ItemType | null>(null);

  const sorted = [...AllItems].sort((a, b) => a.name.localeCompare(b.name));
  const filtered = sorted.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType = activeType === null || item.itemType === activeType;
    return matchesSearch && matchesType;
  });

  return (
    <WikiPage title="Items">
      <div className="space-y-4">
        <div className="relative mr-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="item-search"
            placeholder="Search items…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 m-1"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {[...usedTypes].sort().map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(activeType === type ? null : type)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
                activeType === type
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary/50",
              )}
            >
              <ItemIcon itemType={type} />
              {pascalToSentence(type)}
            </button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No items match your search.
          </p>
        ) : (
          <ItemCards items={filtered} />
        )}
      </div>
    </WikiPage>
  );
}
