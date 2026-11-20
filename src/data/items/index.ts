import type { Item } from "../../models/items";

export * from "./Adrenaline";
export * from "./Akubra";
export * from "./Antidote";
export * from "./BarruginSpineArmour";
export * from "./BillyCan";
export * from "./BlouseAndSkirt";
export * from "./Boomerang";
export * from "./BottleOfRum";
export * from "./BowlerHat";
export * from "./BreadKnife";
export * from "./BustleDress";
export * from "./Chalk";
export * from "./Caltrops";
export * from "./ChloroformAndCloth";
export * from "./CrocodileScaleArmour";
export * from "./Crowbar";
export * from "./DayDress";
export * from "./DecorativeBonnet";
export * from "./DenimOveralls";
export * from "./Didgeridoo";
export * from "./DjugiPoisonSac";
export * from "./DrumKit";
export * from "./DynamiteStick";
export * from "./EnchantedClub";
export * from "./FeatherDuster";
export * from "./FeatheredHat";
export * from "./FeignDeathPotion";
export * from "./FirstAidKit";
export * from "./FishingNet";
export * from "./FlaskOfAlchemistFire";
export * from "./FlatCap";
export * from "./FlintAndSteel";
export * from "./FootholdTrap";
export * from "./FrockCoatAndBreeches";
export * from "./FullBodyCloak";
export * from "./GasMask";
export * from "./GrapplingHook";
export * from "./GuernseyAndTrousers";
export * from "./Hammer";
export * from "./ApothecaryKit";
export * from "./HuntingKnife";
export * from "./IronSpikes";
export * from "./KangarooHideArmour";
export * from "./Lantern";
export * from "./LavastoneClub";
export * from "./LeatherApron";
export * from "./LeatherDuster";
export * from "./LightningSwordOfRollo";
export * from "./LightningstoneClub";
export * from "./LockpickKit";
export * from "./LovePotion";
export * from "./MagnifyingGlass"
export * from "./MakeupKit";
export * from "./Mantle";
export * from "./MilitaryCap";
export * from "./MilitaryUniform";
export * from "./Mirror";
export * from "./MithrilMace";
export * from "./MithrilSpear";
export * from "./MithrilSword";
export * from "./MobCap";
export * from "./Notebook";
export * from "./OilFlask";
export * from "./Pickaxe";
export * from "./PinaforeAndDress";
export * from "./Pitchfork";
export * from "./ShirtAndTrousers";
export * from "./Pole";
export * from "./PortalStone";
export * from "./PrayerBeads";
export * from "./Psychedelic";
export * from "./RainbowScaleNecklace";
export * from "./Robes";
export * from "./RidingHabit";
export * from "./RollingPin";
export * from "./Rope";
export * from "./RubberSuit";
export * from "./Scythe";
export * from "./SewingKit";
export * from "./Shears";
export * from "./SignetRing";
export * from "./SleepingAid";
export * from "./SmokeBomb";
export * from "./SoothingHerb";
export * from "./SpiceKit";
export * from "./Spyglass";
export * from "./StageCostume";
export * from "./SteelDagger";
export * from "./SteelJavelin";
export * from "./SteelMace";
export * from "./SteelMailArmour";
export * from "./SteelPlateArmour";
export * from "./SteelSpear";
export * from "./SteelSword";
export * from "./Steroid";
export * from "./SunstoneClub";
export * from "./Swag";
export * from "./TailcoatAndBreeches";
export * from "./TimberWedge";
export * from "./ThunderstoneClub";
export * from "./TopHat";
export * from "./Tongs";
export * from "./Torch";
export * from "./Tucker";
export * from "./VialOfPotentAcid";
export * from "./Violin";
export * from "./WalkingDress";
export * from "./WalkingStaff";
export * from "./WaterHammerOfTytos";
export * from "./Whip";
export * from "./WindSpearOfCassreina";
export * from "./WindstoneClub";
export * from "./WoodcutterAxe";
export * from "./WoodenClub";

const isItem = (value: unknown): value is Item =>
  typeof value === "object" &&
  value !== null &&
  "name" in value &&
  "slots" in value;

const itemModules = import.meta.glob<Record<string, unknown>>(
  ["./*.ts", "!./index.ts"],
  { eager: true }
);

export const AllItems: Item[] = Object.values(itemModules)
  .flatMap((module) => Object.values(module))
  .filter(isItem);
