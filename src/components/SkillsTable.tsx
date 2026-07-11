import { useState } from "react";
import { useAtomValue } from "jotai";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { SkillIcon } from "./icons/SkillIcon";
import { Edit2, HelpCircle, Lock } from "lucide-react";
import { SkillType } from "./../enums/SkillType";
import * as Skills from "./../models/skills";
import {
  skillLevelsAtom,
  skillRollValuesAtom,
  skillsProgressedSinceRestAtom,
} from "./../state/character";
import { Button } from "./ui/button";
import { SkillForm } from "./../enums/SkillForm";
import { RollButton } from "./RollButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { EditSkillsDialog } from "./EditSkillsDialog";

export const SkillsTable = () => {
  const skillLevels = useAtomValue(skillLevelsAtom);
  const skillRollValues = useAtomValue(skillRollValuesAtom);
  const skillsProgressedSinceRest = useAtomValue(skillsProgressedSinceRestAtom);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

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
            <TableHead className="text-left w-36">Roll</TableHead>
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full text-muted-foreground hover:bg-accent-subtle hover:text-accent-foreground"
                          >
                            <HelpCircle className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>{skill.type}</DialogTitle>
                          </DialogHeader>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                  <TableCell className="text-left">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium">
                        {skill.level || 0}
                      </div>
                      {skillsProgressedSinceRest.has(skill.type) && (
                        <Popover>
                          <PopoverTrigger className="w-6 h-6 flex items-center justify-center text-muted-foreground rounded-full hover:bg-accent-subtle hover:text-accent-foreground">
                            <Lock className="h-3 w-3" />
                          </PopoverTrigger>
                          <PopoverContent
                            className="max-w-[260px] text-sm"
                            side="right"
                          >
                            <p>
                              This skill has recently leveled up. You need to
                              rest before it can level up again.
                            </p>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-left font-mono whitespace-nowrap">
                    {skill.dice ? (
                      <RollButton
                        name={skill.type}
                        skillType={skill.type}
                        dice={skill.dice}
                        modifier={skill.modifier}
                        hasAdvantage={skill.hasAdvantage}
                        hasDisadvantage={skill.hasDisadvantage}
                      />
                    ) : (
                      <div className="ml-3">Fail</div>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <div className="flex justify-end px-1">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 text-muted-foreground"
          onClick={() => setIsEditDialogOpen(true)}
        >
          <Edit2 className="h-3.5 w-3.5" />
          Edit Skills
        </Button>
      </div>
      <EditSkillsDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
      />
    </div>
  );
};
