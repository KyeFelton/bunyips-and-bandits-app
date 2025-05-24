import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { SkillIcon } from "./icons/SkillIcon";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { SkillType } from "../enums/SkillType";
import * as Skills from "../models/skills";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface SkillsUpgradeTableProps {
  skillLevels: Partial<Record<SkillType, number>>;
  skillLevelUpgrades: Partial<Record<SkillType, number>>;
  onSkillLevelUpgradesChange: (
    upgrades: Partial<Record<SkillType, number>>
  ) => void;
  availablePoints: number;
}

export const SkillsUpgradeTable = ({
  skillLevels,
  skillLevelUpgrades,
  onSkillLevelUpgradesChange,
  availablePoints,
}: SkillsUpgradeTableProps) => {
  const totalSkillLevels = Object.values(skillLevelUpgrades).reduce(
    (sum, level) => sum + (level || 0),
    0
  );
  const hasSkillPoints = availablePoints > totalSkillLevels;
  const maxUpgradePerSkill = 5;

  const handleIncreaseSkill = (skillType: SkillType) => {
    const currentLevel = skillLevels[skillType] ?? 0;
    const currentUpgrade = skillLevelUpgrades[skillType] ?? 0;

    if (
      currentLevel < 10 &&
      hasSkillPoints &&
      currentUpgrade < maxUpgradePerSkill
    ) {
      onSkillLevelUpgradesChange({
        ...skillLevelUpgrades,
        [skillType]: currentUpgrade + 1,
      });
    }
  };

  const handleDecreaseSkill = (skillType: SkillType) => {
    const currentUpgrade = skillLevelUpgrades[skillType] ?? 0;
    if (currentUpgrade > 0) {
      const newLevelUps = { ...skillLevelUpgrades };
      if (currentUpgrade === 1) {
        delete newLevelUps[skillType];
      } else {
        newLevelUps[skillType] = currentUpgrade - 1;
      }
      onSkillLevelUpgradesChange(newLevelUps);
    }
  };

  const skillsArray = Object.values(SkillType)
    .filter(
      (skillType) =>
        !Object.values(Skills).find((skill) => skill.type === skillType)
          ?.pathSkill
    )
    .map((skillType) => {
      const skill = Object.values(Skills).find((s) => s.type === skillType);
      return {
        type: skillType,
        level: skillLevels[skillType] ?? 0,
        upgrades: skillLevelUpgrades[skillType] ?? 0,
        description: skill?.description ?? "",
      };
    });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1 sm:whitespace-nowrap">
          Spend your points to improve the skills that matter most to your
          character.
        </div>
        <div className="whitespace-nowrap">
          Skills upgraded: {totalSkillLevels}/{availablePoints}
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Skill</TableHead>
            <TableHead className="text-center">Level</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skillsArray.map(({ type, level, upgrades, description }) => (
            <TableRow key={type}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">
                    <SkillIcon type={type} />
                  </span>
                  {type}
                  <Popover>
                    <PopoverTrigger className="w-6 h-6 flex items-center justify-center text-muted-foreground text-left hover:bg-accent hover:text-accent-foreground rounded-full">
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </PopoverTrigger>
                    <PopoverContent
                      className="max-w-[300px] text-sm"
                      side="right"
                    >
                      <p>{description}</p>
                    </PopoverContent>
                  </Popover>
                </div>
              </TableCell>
              <TableCell className="text-center">
                {level}
                {upgrades > 0 && (
                  <span className="text-green-foreground ml-1">
                    (+{upgrades})
                  </span>
                )}
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDecreaseSkill(type)}
                    disabled={upgrades === 0}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleIncreaseSkill(type)}
                    disabled={
                      !hasSkillPoints ||
                      level >= 10 ||
                      upgrades >= maxUpgradePerSkill
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
