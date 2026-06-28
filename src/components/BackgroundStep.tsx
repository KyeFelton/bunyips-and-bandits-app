import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { GraduationCap, Package, Star, Wallet } from "lucide-react";
import {
  backgroundAtom,
  backgroundDataAtom,
  itemsAtom,
  moneyAtom,
} from "./../state/character";
import { AllBackgrounds } from "./../data/backgrounds";
import {
  Background,
  MONEY_TIER_AMOUNTS,
  MoneyTier,
  StartingItemGroup,
} from "./../models/backgrounds";
import { InventoryStack, Item } from "./../models/items";
import { ItemType } from "./../enums/ItemType";
import { ItemLocation } from "./../enums/ItemLocation";
import { WearType } from "./../enums/WearType";
import { cn } from "./../utils/cn";
import { ACCESSORY_INDICES, CLOTHES_INDEX } from "./../utils/items";
import { pascalToSentence } from "./../utils/capitalize";
import { BackgroundIcon } from "./icons/BackgroundIcon";
import { SkillIcon } from "./icons/SkillIcon";
import { SkillType } from "./../enums/SkillType";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const STARTING_ITEM_PREFIX = "starting_item_";

function itemLocationFor(item: Item): ItemLocation {
  if (
    item.wearType === WearType.Clothes ||
    item.wearType === WearType.Accessory ||
    item.itemType === ItemType.Armour
  ) {
    return ItemLocation.Worn;
  }
  if (
    item.itemType === ItemType.SlashWeapon ||
    item.itemType === ItemType.ForceWeapon ||
    item.itemType === ItemType.RangedWeapon
  ) {
    return ItemLocation.Held;
  }
  return ItemLocation.Carried;
}

function stacksForGroup(group: StartingItemGroup): InventoryStack[] {
  const stacks: InventoryStack[] = [];
  let heldIndex = 0;

  for (const item of group.items) {
    const location = itemLocationFor(item);
    const stack: InventoryStack = {
      id: `${STARTING_ITEM_PREFIX}${item.name}`,
      name: item.name,
      location,
      quantity: 1,
    };
    if (location === ItemLocation.Worn) {
      if (item.wearType === WearType.Clothes) stack.index = CLOTHES_INDEX;
      else if (item.wearType === WearType.Accessory)
        stack.index = ACCESSORY_INDICES[0];
    } else if (location === ItemLocation.Held) {
      stack.index = heldIndex;
      heldIndex++;
    }
    stacks.push(stack);
  }

  return stacks;
}

function defaultGroupFor(bg: Background): string | null {
  return bg.startingItems[0].name ?? null;
}

type MoneyTierCardProps = {
  tier: MoneyTier;
  amount: number;
  selected: boolean;
  onSelect: () => void;
};

const MoneyTierCard = ({
  tier,
  amount,
  selected,
  onSelect,
}: MoneyTierCardProps) => (
  <button
    type="button"
    onClick={onSelect}
    className={cn(
      "text-left p-3 rounded-lg border-2 transition-colors duration-150 flex flex-col gap-1",
      selected
        ? "border-primary bg-primary/10"
        : "border-muted hover:border-primary/50 bg-transparent",
    )}
  >
    <p className="font-semibold text-sm">{tier}</p>
    <p className="text-sm text-muted-foreground">
      {amount.toLocaleString()} coins
    </p>
  </button>
);

type GroupCardProps = {
  group: StartingItemGroup;
  selected: boolean;
  onSelect: () => void;
};

const GroupCard = ({ group, selected, onSelect }: GroupCardProps) => (
  <button
    type="button"
    onClick={onSelect}
    className={cn(
      "w-full text-left p-4 rounded-lg border-2 transition-colors duration-150 space-y-3 flex flex-col",
      selected
        ? "border-primary bg-primary/10"
        : "border-muted hover:border-primary/50 bg-transparent",
    )}
  >
    <p className="font-semibold">{group.name}</p>
    <div className="space-y-1.5">
      {group.items.map((item) => (
        <div key={item.name} className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-sm">{item.name}</span>
            {item.itemType && (
              <span className="text-xs px-1.5 py-0.5 rounded bg-muted/50 text-muted-foreground font-medium">
                {pascalToSentence(item.itemType)}
              </span>
            )}
          </div>
          {/* {item.equippedEffects && (
            <ItemEffectList equippedEffects={item.equippedEffects} inline />
          )} */}
        </div>
      ))}
    </div>
  </button>
);

export const BackgroundStep = () => {
  const [selectedBackground, setBackground] = useAtom(backgroundAtom);
  const backgroundData = useAtomValue(backgroundDataAtom);
  const setItems = useSetAtom(itemsAtom);
  const currentMoney = useAtomValue(moneyAtom);
  const setMoney = useSetAtom(moneyAtom);
  const [selectedGroupName, setSelectedGroupName] = useState<string | null>(
    null,
  );
  const [selectedMoneyTier, setSelectedMoneyTier] = useState<MoneyTier | null>(
    null,
  );
  const [api, setApi] = useState<CarouselApi>();

  const backgroundsArray = Object.values(AllBackgrounds);

  const applyGroup = useCallback(
    (group: StartingItemGroup) => {
      const newStacks = stacksForGroup(group);
      setItems((prev) => [
        ...prev.filter((s) => !s.id.startsWith(STARTING_ITEM_PREFIX)),
        ...newStacks,
      ]);
    },
    [setItems],
  );

  const handleBackgroundChange = useCallback(
    (backgroundName: string) => {
      setBackground(backgroundName);
      const bg = AllBackgrounds[backgroundName as keyof typeof AllBackgrounds];
      if (!bg) return;
      const defaultGroup = bg.startingItems[0] ?? null;
      setSelectedGroupName(defaultGroup?.name ?? null);
      if (defaultGroup) applyGroup(defaultGroup);
      const defaultTier = bg.availableMoneyTiers[0];
      if (defaultTier) {
        setSelectedMoneyTier(defaultTier);
        setMoney(MONEY_TIER_AMOUNTS[defaultTier]);
      }
    },
    [setBackground, applyGroup, setMoney],
  );

  const handleGroupSelect = useCallback(
    (group: StartingItemGroup) => {
      setSelectedGroupName(group.name);
      applyGroup(group);
    },
    [applyGroup],
  );

  const handleMoneyTierSelect = useCallback(
    (tier: MoneyTier) => {
      setSelectedMoneyTier(tier);
      setMoney(MONEY_TIER_AMOUNTS[tier]);
    },
    [setMoney],
  );

  const onSelect = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const name = backgroundsArray[api.selectedScrollSnap()]?.name;
      if (name) handleBackgroundChange(name);
    },
    [handleBackgroundChange, backgroundsArray],
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || !selectedBackground) return;
    const idx = backgroundsArray.findIndex(
      (b) => b.name === selectedBackground,
    );
    if (idx !== -1) api.scrollTo(idx);
  }, [api, selectedBackground, backgroundsArray]);

  // Sync default group when backgroundData first resolves (e.g. loaded from saved state)
  useEffect(() => {
    if (!backgroundData || selectedGroupName !== null) return;
    const defaultName = defaultGroupFor(backgroundData);
    setSelectedGroupName(defaultName);
    const defaultGroup = backgroundData.startingItems[0];
    if (defaultGroup) applyGroup(defaultGroup);
  }, [backgroundData, selectedGroupName, applyGroup]);

  // Sync money tier when backgroundData first resolves
  useEffect(() => {
    if (!backgroundData || selectedMoneyTier !== null) return;
    const inferredTier = (
      Object.entries(MONEY_TIER_AMOUNTS) as [MoneyTier, number][]
    ).find(([, amount]) => amount === currentMoney)?.[0];
    const tier =
      inferredTier && backgroundData.availableMoneyTiers.includes(inferredTier)
        ? inferredTier
        : backgroundData.availableMoneyTiers[0];
    if (tier) {
      setSelectedMoneyTier(tier);
      setMoney(MONEY_TIER_AMOUNTS[tier]);
    }
  }, [backgroundData, selectedMoneyTier, currentMoney, setMoney]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1">
          Choose your background to represent your character's past profession
          and training.
        </div>
      </div>

      {/* Background Carousel */}
      <div className="relative px-16">
        <div className="h-[220px] lg:h-[280px] flex items-center">
          <Carousel
            opts={{ align: "center", loop: true }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {backgroundsArray.map((backgroundItem) => (
                <CarouselItem
                  key={backgroundItem.name}
                  className="basis-3/4 sm:basis-1/2 md:basis-1/3 cursor-pointer flex justify-center items-center"
                  onClick={() => {
                    const idx = backgroundsArray.findIndex(
                      (b) => b.name === backgroundItem.name,
                    );
                    if (idx !== -1) {
                      api?.scrollTo(idx);
                      handleBackgroundChange(backgroundItem.name);
                    }
                  }}
                >
                  <div className="flex flex-col justify-center items-center gap-2">
                    <div
                      className={cn(
                        "rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center h-36 w-36 lg:h-44 lg:w-44",
                        backgroundItem.name === selectedBackground
                          ? "opacity-100"
                          : "opacity-50",
                      )}
                    >
                      <BackgroundIcon
                        name={backgroundItem.name}
                        className={cn(
                          "transition-all duration-300 ease-in-out ",
                          backgroundItem.name === selectedBackground
                            ? "h-16 w-16 lg:h-20 lg:w-20"
                            : "h-14 w-14 lg:h-16 lg:w-16",
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        "font-medium",
                        backgroundItem.name !== selectedBackground
                          ? "text-md text-muted-foreground/50"
                          : "text-lg",
                      )}
                    >
                      {backgroundItem.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Background Description */}
      {backgroundData && (
        <div className="p-4 bg-primary/10 rounded-lg mt-4">
          <h4 className="font-semibold text-lg mb-2">{backgroundData.name}</h4>
          <p className="text-sm text-muted-foreground">
            {backgroundData.description}
          </p>
        </div>
      )}

      {/* Background Details */}
      {backgroundData && (
        <div className="space-y-6 pt-6 border-t border-muted-foreground/20">
          {/* Expertise Skills */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Expertise
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {backgroundData.expertiseSkills.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No expertise skills
                </p>
              )}
              {backgroundData.expertiseSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <SkillIcon type={skill as SkillType} />
                  <div>
                    <div className="text-sm font-medium">{skill}</div>
                    <div>Level 5</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Traits */}
          <div className="space-y-4 pt-6 border-t border-muted-foreground/20">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Star className="h-5 w-5" />
              Trait
            </h3>
            <div className="space-y-3">
              {backgroundData.traits.length === 0 && (
                <p className="text-sm text-muted-foreground">No traits</p>
              )}
              {backgroundData.traits.map((trait, index) => (
                <div key={index}>
                  <p className="text-sm text-muted-foreground">
                    {trait.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Starting Money */}
          <div className="space-y-4 pt-6 border-t border-muted-foreground/20">
            <h3 className="font-semibold flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Starting Money
            </h3>
            {backgroundData.availableMoneyTiers.length > 1 && (
              <p className="text-sm text-muted-foreground">
                Choose how much coin you begin with
              </p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {backgroundData.availableMoneyTiers.map((tier) => (
                <MoneyTierCard
                  key={tier}
                  tier={tier}
                  amount={MONEY_TIER_AMOUNTS[tier]}
                  selected={selectedMoneyTier === tier}
                  onSelect={() => handleMoneyTierSelect(tier)}
                />
              ))}
            </div>
          </div>
          {/* Starting Items */}
          <div className="space-y-4 pt-6 border-t border-muted-foreground/20">
            <h3 className="font-semibold flex items-center gap-2">
              <Package className="h-5 w-5" />
              Starting Items
            </h3>
            <p className="text-sm text-muted-foreground">
              Choose your starting gear
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {backgroundData.startingItems.map((group) => (
                <GroupCard
                  key={group.name}
                  group={group}
                  selected={selectedGroupName === group.name}
                  onSelect={() => handleGroupSelect(group)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
