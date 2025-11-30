import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  availablePathPointsAtom,
  availableHealthUpgradesAtom,
  availableSkillPointsAtom,
  pathsAtom,
  skillLevelUpgradesAtom,
  mindAtom,
  bodyAtom,
  staminaAtom,
  bodyUpgradesAtom,
  mindUpgradesAtom,
  staminaUpgradesAtom,
  skillLevelsAtom,
  currentBodyAtom,
  currentMindAtom,
  currentStaminaAtom,
} from "./../state/character";
import { SkillType } from "./../enums/SkillType";
import {
  PathProgressionForm,
  PathProgressionWithInitial,
} from "./PathProgressionForm";
import { Health, HealthUpgradeForm } from "./HealthUpgradeForm";
import { SkillsUpgradeTable } from "./SkillsUpgradeTable";

interface LevelUpModalProps {
  open: boolean;
  onClose: (success: boolean) => void;
  preventCancel?: boolean;
}

type Step = {
  id: string;
  title: string;
  component: React.ComponentType;
  canShow: boolean;
};

type PendingChanges = {
  paths: PathProgressionWithInitial[];
  health: Health;
  skills: Record<string, number>;
};

const usePendingChanges = () => {
  const [pendingChanges, setPendingChanges] = useState<PendingChanges>({
    paths: [],
    health: {
      body: 0,
      mind: 0,
      stamina: 0,
    },
    skills: {},
  });
  const updatePath = (path: PathProgressionWithInitial) => {
    setPendingChanges((prev) => {
      if (path.level === 0) {
        return {
          ...prev,
          paths: prev.paths.filter((p) => p.name !== path.name),
        };
      }
      const updatedPaths = [...prev.paths];
      const pathIndex = updatedPaths.findIndex((p) => p.name === path.name);
      if (pathIndex === -1) {
        updatedPaths.push(path);
      } else {
        updatedPaths[pathIndex] = path;
      }
      return { ...prev, paths: updatedPaths };
    });
  };

  const updateHealth = (health: Health) => {
    setPendingChanges((prev) => ({ ...prev, health }));
  };

  const updateSkills = (skills: Record<string, number>) => {
    setPendingChanges((prev) => ({ ...prev, skills }));
  };

  const reset = () => {
    setPendingChanges({
      paths: [],
      health: {
        body: 0,
        mind: 0,
        stamina: 0,
      },
      skills: {},
    });
  };

  return {
    pendingChanges,
    updatePath,
    updateHealth,
    updateSkills,
    reset,
  };
};

export const LevelUpModal = ({
  open,
  onClose,
  preventCancel = false,
}: LevelUpModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const availablePathPoints = useAtomValue(availablePathPointsAtom);
  const availableHealthUpgrades = useAtomValue(availableHealthUpgradesAtom);
  const availableSkillPoints = useAtomValue(availableSkillPointsAtom);
  const [paths, setPaths] = useAtom(pathsAtom);
  const [skillLevelUpgrades, setSkillLevelUpgrades] = useAtom(
    skillLevelUpgradesAtom
  );
  const skillLevels = useAtomValue(skillLevelsAtom);
  const body = useAtomValue(bodyAtom);
  const [bodyUpgrades, setBodyUpgrades] = useAtom(bodyUpgradesAtom);
  const mind = useAtomValue(mindAtom);
  const [mindUpgrades, setMindUpgrades] = useAtom(mindUpgradesAtom);
  const stamina = useAtomValue(staminaAtom);
  const [staminaUpgrades, setStaminaUpgrades] = useAtom(staminaUpgradesAtom);
  const [currentBody, setCurrentBody] = useAtom(currentBodyAtom);
  const [currentMind, setCurrentMind] = useAtom(currentMindAtom);
  const [currentStamina, setCurrentStamina] = useAtom(currentStaminaAtom);

  const { pendingChanges, updatePath, updateHealth, updateSkills, reset } =
    usePendingChanges();

  const currentSkillLevels = Object.values(SkillType).reduce(
    (acc, skillType) => ({
      ...acc,
      [skillType]:
        (skillLevels[skillType] || 0) + (pendingChanges.skills[skillType] || 0),
    }),
    {} as Record<SkillType, number>
  );

  const adjustedPaths = paths
    .filter((p) => !pendingChanges.paths.some((path) => path.name === p.name))
    .map(
      (p) =>
        ({
          ...p,
          initialLevel: p.level,
        } as PathProgressionWithInitial)
    )
    .concat(pendingChanges.paths)
    .sort((a, b) => a.name.localeCompare(b.name));

  const remainingHealthUpgrades =
    availableHealthUpgrades -
    bodyUpgrades -
    mindUpgrades -
    staminaUpgrades;

  const remainingSkillUpgrades =
    availableSkillPoints -
    Object.values(skillLevelUpgrades).reduce((sum, value) => sum + value, 0);

  const currentHealth = {
    body: body.max + pendingChanges.health.body,
    mind: mind.max + pendingChanges.health.mind,
    stamina: stamina.max + pendingChanges.health.stamina,
  };

  const steps: Step[] = [
    {
      id: "paths",
      title: "Upgrade Paths",
      component: () => (
        <div className="space-y-4">
          <PathProgressionForm
            availablePathPoints={availablePathPoints}
            paths={adjustedPaths}
            onPathChange={updatePath}
          />
        </div>
      ),
      canShow: true,
    },
    {
      id: "health",
      title: "Upgrade Health",
      component: () => (
        <HealthUpgradeForm
          availableHealthUpgrades={remainingHealthUpgrades}
          onChanges={updateHealth}
          initialUpgrades={pendingChanges.health}
          currentValues={currentHealth}
        />
      ),
      canShow: remainingHealthUpgrades > 0,
    },
    {
      id: "skills",
      title: "Upgrade Skills",
      component: () => (
        <SkillsUpgradeTable
          skillLevels={currentSkillLevels}
          skillLevelUpgrades={pendingChanges.skills}
          onSkillLevelUpgradesChange={updateSkills}
          availablePoints={remainingSkillUpgrades}
        />
      ),
      canShow: remainingSkillUpgrades > 0,
    },
  ];

  const usedPathPoints =
    paths.reduce((sum, path) => sum + path.level, 0) +
    adjustedPaths.reduce(
      (sum, path) => sum + (path.level - (path.initialLevel || 0)),
      0
    );
  const remainingPathPoints = availablePathPoints - usedPathPoints;

  const visibleSteps = steps.filter((step) => step.canShow);
  const isLastStep = currentStep === visibleSteps.length - 1;
  const isFirstStep = currentStep === 0;

  const isCurrentStepComplete = () => {
    const currentStepId = visibleSteps[currentStep]?.id;

    if (currentStepId === "paths") {
      return remainingPathPoints === 0;
    }

    if (currentStepId === "health") {
      const totalHealthUpgrades =
        pendingChanges.health.body +
        pendingChanges.health.mind +
        pendingChanges.health.stamina;
      return totalHealthUpgrades === remainingHealthUpgrades;
    }

    if (currentStepId === "skills") {
      const totalSkillUpgrades = Object.values(pendingChanges.skills).reduce(
        (sum, value) => sum + value,
        0
      );
      return totalSkillUpgrades === remainingSkillUpgrades;
    }

    return true;
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    setPaths((prev) =>
      prev
        .filter(
          (p) => !pendingChanges.paths.some((path) => path.name === p.name)
        )
        .concat(pendingChanges.paths)
        .sort((a, b) => a.name.localeCompare(b.name))
    );
    setBodyUpgrades((prev) => prev + pendingChanges.health.body);
    setMindUpgrades((prev) => prev + pendingChanges.health.mind);
    setStaminaUpgrades((prev) => prev + pendingChanges.health.stamina);
    setSkillLevelUpgrades((prev) => {
      const updatedSkills = { ...prev };
      Object.entries(pendingChanges.skills).forEach(([skill, value]) => {
        updatedSkills[skill as SkillType] =
          (prev[skill as SkillType] || 0) + value;
      });
      return updatedSkills;
    });
    setCurrentBody(currentBody + pendingChanges.health.body);
    setCurrentMind(currentMind + pendingChanges.health.mind);
    setCurrentStamina(currentStamina + pendingChanges.health.stamina);
    onClose(true);
    setCurrentStep(0);
    reset();
  };

  const handleCancel = () => {
    setCurrentStep(0);
    reset();
    onClose(false);
  };

  const CurrentStepComponent = visibleSteps[currentStep]?.component;

  return (
    <Dialog open={open} onOpenChange={preventCancel ? undefined : handleCancel}>
      <DialogContent className="max-w-2xl h-[800px] flex flex-col">
        <DialogHeader className="flex-none px-2">
          <DialogTitle className="text-2xl">Level Up</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex-none flex items-center justify-center gap-2">
            {visibleSteps.map((step, index) => (
              <div
                key={step.id}
                className={`h-2 w-2 rounded-full ${
                  index <= currentStep ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-2">
            {CurrentStepComponent && <CurrentStepComponent />}
          </div>

          <div className="flex-none flex justify-between pt-4 px-2">
            {!isFirstStep ? (
              <Button variant="outline" onClick={handlePrevious}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            ) : (
              <div />
            )}
            <Button
              onClick={isLastStep ? handleFinish : handleNext}
              disabled={!isCurrentStepComplete()}
            >
              {isLastStep ? "Finish" : "Next"}
              {!isLastStep && <ChevronRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
