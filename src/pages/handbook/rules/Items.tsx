import { Search } from "lucide-react";
import { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { WikiPage } from "../../../components/WikiPage";
import { AllItems } from "../../../data/items";
import { ItemType } from "../../../enums/ItemType";
import { Effect } from "../../../models/effect";
import { Item } from "../../../models/items";
import { ItemIcon } from "../../../components/icons/ItemIcon";
import { cn } from "../../../utils/cn";
import { pascalToSentence } from "../../../utils/capitalize";

function formatEquippedEffect(effect: Effect): string {
  if (effect.weapon) {
    const parts: string[] = [];
    if (effect.weapon.bonus) parts.push(`+${effect.weapon.bonus}`);
    if (effect.weapon.damageType) parts.push(effect.weapon.damageType);
    parts.push("weapon damage");
    return parts.join(" ");
  }
  if (effect.armour) {
    const bonus = effect.armour.bonus ? `+${effect.armour.bonus}` : "";
    return `${bonus} ${effect.armour.damageType} armour`.trim();
  }
  if (effect.body?.bonus) return `+${effect.body.bonus} body`;
  if (effect.mind?.bonus) return `+${effect.mind.bonus} mind`;
  if (effect.stamina?.bonus) return `+${effect.stamina.bonus} stamina`;
  if (effect.actions?.bonus) return `+${effect.actions.bonus} actions`;
  if (effect.evasions?.bonus) return `+${effect.evasions.bonus} evasions`;
  if (effect.skill) {
    const bonus = effect.skill.bonus ? `+${effect.skill.bonus}` : "";
    return `${bonus} ${effect.skill.skillType}`.trim();
  }
  if (effect.custom) return effect.custom;
  return "";
}

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

      {item.description && (
        <p className="text-sm text-muted-foreground">{item.description}</p>
      )}

      {item.equippedEffects && item.equippedEffects.length > 0 && (
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            When Equipped
          </p>
          <ul className="space-y-0.5">
            {item.equippedEffects.map((effect, i) => {
              const text = formatEquippedEffect(effect);
              return text ? (
                <li key={i} className="text-sm">
                  {text}
                </li>
              ) : null;
            })}
          </ul>
        </div>
      )}

      {item.consumedEffect && (
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            When Consumed
          </p>
          <div className="text-sm space-y-0.5">
            {item.consumedEffect.stamina !== undefined && (
              <p>+{item.consumedEffect.stamina} stamina</p>
            )}
            {item.consumedEffect.body !== undefined && (
              <p>+{item.consumedEffect.body} body</p>
            )}
            {item.consumedEffect.mind !== undefined && (
              <p>+{item.consumedEffect.mind} mind</p>
            )}
            {item.consumedEffect.condition && (
              <p className="italic">{item.consumedEffect.condition}</p>
            )}
            {item.consumedEffect.custom && (
              <p className="text-muted-foreground">
                {item.consumedEffect.custom}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-1 border-t border-muted mt-auto">
        {item.defaultCost !== undefined && (
          <span>{item.defaultCost} coins</span>
        )}
        <span>{item.slots === 1 ? "1 slot" : `${item.slots} slots`}</span>
        {item.singleUse && <span>Single use</span>}
        {item.stackable && <span>Stackable</span>}
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
