import { useAtomValue, useSetAtom } from "jotai";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { SkillIcon } from "./icons/SkillIcon";
import { HelpCircle, Lock, Minus, Plus } from "lucide-react";
import { SkillType } from "./../enums/SkillType";
import * as Skills from "./../models/skills";
import {
  criticalSuccessesAtom,
  MAX_SKILL_LEVEL,
  skillLevelsAtom,
  skillRollValuesAtom,
  skillsProgressedSinceRestAtom,
} from "./../state/character";
import { useRollToast } from "./RollToast";
import { Button } from "./ui/button";
import { SkillForm } from "./../enums/SkillForm";
import { RollText } from "./RollText";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const SkillsTable = () => {
  const skillLevels = useAtomValue(skillLevelsAtom);
  const skillRollValues = useAtomValue(skillRollValuesAtom);
  const skillsProgressedSinceRest = useAtomValue(skillsProgressedSinceRestAtom);
  const setCriticalSuccesses = useSetAtom(criticalSuccessesAtom);
  const showRollToast = useRollToast();

  const adjustLevel = (type: SkillType, delta: number) => {
    setCriticalSuccesses((prev) => ({
      ...prev,
      [type]: (prev[type] || 0) + delta,
    }));
  };

  const handleRoll = (skill: {
    type: SkillType;
    dice: number;
    modifier: number;
    hasAdvantage: boolean;
    hasDisadvantage: boolean;
  }) => {
    showRollToast({
      name: skill.type,
      type: skill.type,
      dice: skill.dice,
      modifier: skill.modifier,
      hasAdvantage: skill.hasAdvantage,
      hasDisadvantage: skill.hasDisadvantage,
    });
  };

  const skillsArray = Object.values(SkillType).map((skillType) => ({
    type: skillType,
    level: skillLevels[skillType],
    description:
      Object.values(Skills).find((skill) => skill.type === skillType)
        ?.description || "",
    magicSkill:
      Object.values(Skills).find((skill) => skill.type === skillType)
        ?.magicSkill || false,
    form:
      Object.values(Skills).find((skill) => skill.type === skillType)?.form ||
      SkillForm.Physical,
    ...skillRollValues[skillType],
  }));

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Skill</TableHead>
            <TableHead className="text-left w-20">Level</TableHead>
            <TableHead className="text-left w-24">Roll</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skillsArray
            .filter(
              (skill) => !skill.magicSkill || (skill.level && skill.level > 0),
            )
            .map((skill) => {
              return (
                <TableRow key={skill.type}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">
                        <SkillIcon type={skill.type} />
                      </span>
                      <div className="flex flex-col">
                        <span>{skill.type}</span>
                        <span className="text-xs text-muted-foreground capitalize">
                          {skill.form}
                        </span>
                      </div>
                      <Popover>
                        <PopoverTrigger className="w-6 h-6 flex items-center justify-center text-muted-foreground text-left hover:bg-accent-subtle hover:text-accent-foreground rounded-full">
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </PopoverTrigger>
                        <PopoverContent
                          className="max-w-[300px] text-sm"
                          side="right"
                        >
                          <p>{skill.description}</p>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </TableCell>
                  <TableCell className="text-left">
                    <div className="flex items-center justify-start gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        disabled={(skill.level || 0) <= 1}
                        onClick={() => adjustLevel(skill.type, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <div className="text-sm font-medium w-4 text-center">
                        {skill.level || 0}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        disabled={(skill.level || 0) >= MAX_SKILL_LEVEL}
                        onClick={() => adjustLevel(skill.type, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      {skillsProgressedSinceRest.has(skill.type) && (
                        <Lock className="h-3 w-3 text-muted-foreground" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-left font-mono">
                    {skill.dice ? (
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRoll(skill)}
                        >
                          <RollText
                            dice={skill.dice}
                            hasAdvantage={skill.hasAdvantage}
                            hasDisadvantage={skill.hasDisadvantage}
                            modifier={skill.modifier}
                          />
                        </Button>
                      </div>
                    ) : (
                      <div className="ml-3">Fail</div>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <div className="text-xs text-muted-foreground mt-2 px-1">
        <span className="inline-flex items-center gap-1">
          <Lock className="h-3 w-3" />
          indicates a skill has recently leveled up, and you need to rest before
          you can level up again.
        </span>
      </div>
    </div>
  );
};
