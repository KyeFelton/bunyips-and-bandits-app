import { useAtomValue, useAtom } from "jotai";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  HelpCircle,
  BicepsFlexed,
  Route,
  Hand,
  Swords,
  Crosshair,
  Book,
  Leaf,
  Shield,
  Speech,
  BrainCog,
  VenetianMask,
  Eye,
  Ear,
  Soup,
  Flame,
  Zap,
  Move3D,
  Sun,
  Music2,
  BrainCircuit,
  FlaskRound as Flask,
  Heart,
  Ghost,
  Plus,
  Minus,
} from "lucide-react";
import { SkillType } from "../enums/SkillType";
import * as Skills from "../models/skills";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import {
  skillLevelsAtom,
  skillModifiersAtom,
  availableSkillPointsAtom,
} from "../state/derived";
import { skillLevelUpgradesAtom } from "../state/primitives";

const SkillIcon = ({ type }: { type: SkillType }) => {
  switch (type) {
    case SkillType.Strength:
      return <BicepsFlexed className="h-4 w-4" />;
    case SkillType.Agility:
      return <Route className="h-4 w-4" />;
    case SkillType.Dexterity:
      return <Hand className="h-4 w-4" />;
    case SkillType.Martial:
      return <Swords className="h-4 w-4" />;
    case SkillType.Throw:
      return <Crosshair className="h-4 w-4" />;
    case SkillType.Intelligence:
      return <Book className="h-4 w-4" />;
    case SkillType.Nature:
      return <Leaf className="h-4 w-4" />;
    case SkillType.Willpower:
      return <Shield className="h-4 w-4" />;
    case SkillType.Charisma:
      return <Speech className="h-4 w-4" />;
    case SkillType.Psychology:
      return <BrainCog className="h-4 w-4" />;
    case SkillType.Stealth:
      return <VenetianMask className="h-4 w-4" />;
    case SkillType.Sight:
      return <Eye className="h-4 w-4" />;
    case SkillType.Hearing:
      return <Ear className="h-4 w-4" />;
    case SkillType.Smell:
      return <Soup className="h-4 w-4" />;
    case SkillType.Pyro:
      return <Flame className="h-4 w-4" />;
    case SkillType.Electric:
      return <Zap className="h-4 w-4" />;
    case SkillType.Kinetic:
      return <Move3D className="h-4 w-4" />;
    case SkillType.Radiant:
      return <Sun className="h-4 w-4" />;
    case SkillType.Sonic:
      return <Music2 className="h-4 w-4" />;
    case SkillType.Psychic:
      return <BrainCircuit className="h-4 w-4" />;
    case SkillType.Toxic:
      return <Flask className="h-4 w-4" />;
    case SkillType.Healing:
      return <Heart className="h-4 w-4" />;
    case SkillType.Spirit:
      return <Ghost className="h-4 w-4" />;
    default:
      return null;
  }
};

const getDiceForLevel = (level: number | undefined) => {
  switch (level) {
    case 1:
      return "d4";
    case 2:
      return "d6";
    case 3:
      return "d8";
    case 4:
      return "d12";
    case 5:
      return "d20";
    default:
      return "-";
  }
};

export const SkillsTable = () => {
  const skillLevels = useAtomValue(skillLevelsAtom);
  const skillModifiers = useAtomValue(skillModifiersAtom);
  const availablePoints = useAtomValue(availableSkillPointsAtom);
  const [skillLevelUpgrades, setSkillLevelUpgrades] = useAtom(
    skillLevelUpgradesAtom
  );

  const totalSkillLevels = Object.values(skillLevelUpgrades).reduce(
    (sum, level) => sum + (level || 0),
    0
  );
  const hasSkillPoints = availablePoints > totalSkillLevels;
  const exceededPoints = totalSkillLevels > availablePoints;

  const handleIncreaseSkill = (skillType: SkillType) => {
    if (
      skillLevels[skillType] &&
      skillLevels[skillType] < 5 &&
      hasSkillPoints
    ) {
      setSkillLevelUpgrades({
        ...skillLevelUpgrades,
        [skillType]: (skillLevelUpgrades[skillType] || 0) + 1,
      });
    }
  };

  const handleDecreaseSkill = (skillType: SkillType) => {
    if (skillLevelUpgrades[skillType]) {
      const newLevelUps = { ...skillLevelUpgrades };
      newLevelUps[skillType] = (newLevelUps[skillType] || 0) - 1;
      if (newLevelUps[skillType] === 0) {
        delete newLevelUps[skillType];
      }
      setSkillLevelUpgrades(newLevelUps);
    }
  };

  const skillsArray = Object.values(SkillType).map((skillType) => ({
    type: skillType,
    level: skillLevels[skillType],
    levelUp: skillLevelUpgrades[skillType] || 0,
    dice: getDiceForLevel(skillLevels[skillType]),
    modifier: skillModifiers[skillType] || 0,
    description:
      Object.values(Skills).find((skill) => skill.type === skillType)
        ?.description || "",
    pathSkill:
      Object.values(Skills).find((skill) => skill.type === skillType)
        ?.pathSkill || false,
  }));

  return (
    <TooltipProvider delayDuration={0}>
      <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Skill</TableHead>
              <TableHead className="text-center">Level</TableHead>
              <TableHead className="text-right">Roll</TableHead>
              <TableHead className="text-right">Modifier</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skillsArray.map((skill) => (
              <TableRow key={skill.type}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">
                      <SkillIcon type={skill.type} />
                    </span>
                    {skill.type}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          className="h-5 w-5 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center"
                          type="button"
                        >
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="max-w-[300px]">
                        <p>{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TableCell>
                <TableCell className="text-right flex items-center justify-center">
                  {!skill.pathSkill && skill.levelUp > 0 ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => handleDecreaseSkill(skill.type)}
                      disabled={true}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  ) : (
                    <div className="h-7 w-7"> </div>
                  )}
                  {skill.level}
                  {!skill.pathSkill &&
                    skill.level &&
                    skill.level < 5 &&
                    hasSkillPoints && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleIncreaseSkill(skill.type)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    )}
                </TableCell>
                <TableCell className="text-right font-mono">
                  {skill.dice}
                </TableCell>
                <TableCell className="text-right">
                  {skill.modifier > 0
                    ? `+${skill.modifier}`
                    : skill.modifier || "0"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-end pt-2 p-2">
          <span
            className={`text-sm ${
              exceededPoints ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            Level upgrades: {totalSkillLevels}/{availablePoints}
          </span>
        </div>
      </div>
    </TooltipProvider>
  );
};
