import { useAtom, useAtomValue } from "jotai";
import { skillLevelUpgradesAtom } from "../../state/primitives";
import { availableSkillPointsAtom, skillLevelsAtom } from "../../state/derived";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { SkillType } from "../../enums/SkillType";
import * as Skills from "../../models/skills";
import { SkillIcon } from "../SkillIcon";

export const SkillsStep = () => {
  const [skillLevelUpgrades, setSkillLevelUpgrades] = useAtom(
    skillLevelUpgradesAtom
  );
  const skillLevels = useAtomValue(skillLevelsAtom);
  const availablePoints = useAtomValue(availableSkillPointsAtom);

  const totalSkillLevels = Object.values(skillLevelUpgrades).reduce(
    (sum, level) => sum + (level || 0),
    0
  );
  const hasSkillPoints = availablePoints > totalSkillLevels;

  const handleIncreaseSkill = (skillType: SkillType) => {
    if (skillLevels[skillType] < 5 && hasSkillPoints) {
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

  const skillsArray = Object.values(Skills)
    .filter((skill) => !skill.pathSkill)
    .map((skill) => ({
      type: skill.type,
      level: skillLevels[skill.type],
      levelUp: skillLevelUpgrades[skill.type] || 0,
      description: skill.description,
    }));

  return (
    <TooltipProvider>
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Select up to {availablePoints} skills to upgrade. Each upgrade
          increases a skill's level by 1.
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
                <TableCell className="text-center">
                  {skill.level}
                  {skill.levelUp > 0 && (
                    <span className="text-green-foreground ml-1">
                      (+{skill.levelUp})
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDecreaseSkill(skill.type)}
                      disabled={!skillLevelUpgrades[skill.type]}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleIncreaseSkill(skill.type)}
                      disabled={
                        !hasSkillPoints ||
                        skill.level + (skill.levelUp || 0) >= 5
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

        <div className="flex justify-end pt-2">
          <span className="text-sm text-muted-foreground">
            Skill upgrades: {totalSkillLevels}/{availablePoints}
          </span>
        </div>
      </div>
    </TooltipProvider>
  );
};
