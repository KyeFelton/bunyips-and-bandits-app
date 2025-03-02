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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { skillLevelsAtom, skillModifiersAtom } from "../../state/character";

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

  const skillsArray = Object.values(SkillType).map((skillType) => ({
    type: skillType,
    level: skillLevels[skillType],
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
              <TableHead className="text-left w-24">Roll</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skillsArray
              .filter((skill) => skill.level && skill.level > 0)
              .map((skill) => (
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
                    {skill.level}
                  </TableCell>
                  <TableCell className="text-left font-mono">
                    {skill.dice}
                    {skill.modifier > 0
                      ? ` + ${skill.modifier}`
                      : skill.modifier < 0
                      ? ` - ${skill.modifier * -1}`
                      : ""}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  );
};
