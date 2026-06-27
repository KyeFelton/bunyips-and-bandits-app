import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { Minus, Plus, Sparkles } from "lucide-react";
import { SkillType } from "../enums/SkillType";
import * as Skills from "../models/skills";
import {
  backgroundDataAtom,
  CRIT_TO_LEVEL_UP,
  criticalSuccessesAtom,
  magicSkillsAtom,
  MAX_SKILL_LEVEL,
  skillsProgressedSinceRestAtom,
} from "../state/character";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { CircleCheckbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { SkillIcon } from "./icons/SkillIcon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const allSkills = Object.values(Skills);

const computeLevel = (
  skillType: SkillType,
  pendingCS: Partial<Record<SkillType, number>>,
  expertiseSkills: SkillType[] | undefined,
): number => {
  const base = expertiseSkills?.includes(skillType) ? 5 : 1;
  const levelUps = Math.floor((pendingCS[skillType] || 0) / CRIT_TO_LEVEL_UP);
  return Math.max(1, Math.min(MAX_SKILL_LEVEL, base + levelUps));
};

export const EditSkillsDialog = ({ isOpen, onClose }: Props) => {
  const [criticalSuccesses, setCriticalSuccesses] = useAtom(
    criticalSuccessesAtom,
  );
  const [magicSkills, setMagicSkills] = useAtom(magicSkillsAtom);
  const [skillsProgressedSinceRest, setSkillsProgressedSinceRest] = useAtom(
    skillsProgressedSinceRestAtom,
  );
  const backgroundData = useAtomValue(backgroundDataAtom);

  const [pendingCS, setPendingCS] = useState<
    Partial<Record<SkillType, number>>
  >({});
  const [pendingMagic, setPendingMagic] = useState<string[]>([]);
  const [pendingLocked, setPendingLocked] = useState<Set<SkillType>>(new Set());

  useEffect(() => {
    if (isOpen) {
      setPendingCS({ ...criticalSuccesses });
      setPendingMagic([...magicSkills]);
      setPendingLocked(new Set(skillsProgressedSinceRest));
    }
  }, [isOpen, criticalSuccesses, magicSkills, skillsProgressedSinceRest]);

  const handleSave = () => {
    setCriticalSuccesses(pendingCS);
    setMagicSkills(pendingMagic);
    setSkillsProgressedSinceRest(pendingLocked);
    onClose();
  };

  const adjustLevel = (skillType: SkillType, delta: number) => {
    const expertiseSkills = backgroundData?.expertiseSkills;
    const base = expertiseSkills?.includes(skillType) ? 5 : 1;
    const currentLevel = computeLevel(skillType, pendingCS, expertiseSkills);
    const newLevel = currentLevel + delta;
    if (newLevel < 1 || newLevel > MAX_SKILL_LEVEL) return;
    const newCS = (newLevel - base) * CRIT_TO_LEVEL_UP;
    setPendingCS((prev) => ({ ...prev, [skillType]: newCS }));
  };

  const toggleLocked = (skillType: SkillType) => {
    setPendingLocked((prev) => {
      const next = new Set(prev);
      if (next.has(skillType)) {
        next.delete(skillType);
      } else {
        next.add(skillType);
      }
      return next;
    });
  };

  const addMagicSkill = (skillType: SkillType) => {
    setPendingMagic((prev) => [...prev, skillType as string]);
  };

  const removeMagicSkill = (skillType: SkillType) => {
    setPendingMagic((prev) => prev.filter((s) => s !== (skillType as string)));
    setPendingCS((prev) => {
      const next = { ...prev };
      delete next[skillType];
      return next;
    });
  };

  const activeSkills = allSkills.filter(
    (skill) => !skill.magicSkill || pendingMagic.includes(skill.type as string),
  );

  const availableMagicSkills = allSkills.filter(
    (skill) => skill.magicSkill && !pendingMagic.includes(skill.type as string),
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Skills</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Skill</TableHead>
                <TableHead className="text-center w-32">Level</TableHead>
                <TableHead className="text-center w-16">Locked</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeSkills.map((skill) => {
                const level = computeLevel(
                  skill.type,
                  pendingCS,
                  backgroundData?.expertiseSkills,
                );
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
                        {skill.magicSkill && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-5 px-1.5 text-xs text-muted-foreground ml-auto"
                            onClick={() => removeMagicSkill(skill.type)}
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          disabled={level <= 1}
                          onClick={() => adjustLevel(skill.type, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <div className="text-sm font-medium w-5 text-center">
                          {level}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          disabled={level >= MAX_SKILL_LEVEL}
                          onClick={() => adjustLevel(skill.type, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center">
                        <CircleCheckbox
                          checked={pendingLocked.has(skill.type)}
                          onChange={() => toggleLocked(skill.type)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {availableMagicSkills.length > 0 && (
            <div className="space-y-2 pb-2">
              <p className="text-sm font-medium flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Add Magic Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {availableMagicSkills.map((skill) => (
                  <Button
                    key={skill.type}
                    variant="outline"
                    size="sm"
                    className="gap-1"
                    onClick={() => addMagicSkill(skill.type)}
                  >
                    <Plus className="h-3 w-3" />
                    {skill.type}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
