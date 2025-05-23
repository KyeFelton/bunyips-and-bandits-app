import { useAtomValue } from "jotai";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { SkillIcon } from "../icons/SkillIcon";
import { HelpCircle } from "lucide-react";
import { SkillType } from "../../enums/SkillType";
import * as Skills from "../../models/skills";
import { skillLevelsAtom, skillRollValuesAtom } from "../../state/character";
import { useRollToast } from "./RollToast";
import { Button } from "../ui/button";
import { SkillForm } from "../../enums/SkillForm";
import { RollText } from "../RollText";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const SkillsTable = () => {
  const skillLevels = useAtomValue(skillLevelsAtom);
  const skillRollValues = useAtomValue(skillRollValuesAtom);
  const showRollToast = useRollToast();

  const handleRoll = (skill: {
    type: SkillType;
    dice: number;
    modifier: number;
    hasAdvantage: boolean;
    hasDisadvantage: boolean;
  }) => {
    showRollToast({
      name: skill.type,
      ...skill,
    });
  };

  const skillsArray = Object.values(SkillType)
    .map((skillType) => ({
      type: skillType,
      level: skillLevels[skillType],
      description:
        Object.values(Skills).find((skill) => skill.type === skillType)
          ?.description || "",
      pathSkill:
        Object.values(Skills).find((skill) => skill.type === skillType)
          ?.pathSkill || false,
      form:
        Object.values(Skills).find((skill) => skill.type === skillType)?.form ||
        SkillForm.Physical,
      ...skillRollValues[skillType],
    }))
    .sort((a, b) => {
      if (a.form !== b.form) {
        return a.form === SkillForm.Physical ? -1 : 1;
      }
      return 0;
    });

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Skill</TableHead>
            <TableHead className="text-center">Level</TableHead>
            <TableHead className="text-left w-24">Roll</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skillsArray
            .filter(
              (skill) => !skill.pathSkill || (skill.level && skill.level > 0)
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
                        <PopoverTrigger className="w-6 h-6 flex items-center justify-center text-muted-foreground text-left hover:bg-accent hover:text-accent-foreground rounded-full">
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
                  <TableCell className="text-center">{skill.level}</TableCell>
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
                      <div className="ml-3">-</div>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};
