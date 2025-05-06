import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  availablePathPointsAtom,
  availableHealthUpgradesAtom,
  availableSkillPointsAtom,
  pathsAtom,
  skillLevelUpgradesAtom,
  moraleAtom,
  physiqueAtom,
  staminaAtom,
  physiqueUpgradesAtom,
  moraleUpgradesAtom,
  staminaUpgradesAtom,
  skillLevelsAtom,
  currentPhysiqueAtom,
  currentMoraleAtom,
  currentStaminaAtom,
} from "../../state/character";
import { SkillType } from "../../enums/SkillType";
import {
  PathProgressionForm,
  PathProgressionWithInitial,
} from "../PathProgressionForm";
import { Health, HealthUpgradeForm } from "../HealthUpgradeForm";
import { SkillsUpgradeTable } from "../SkillsUpgradeTable";

interface LevelUpModalProps {
  open: boolean;
  onClose: (success: boolean) => void;
}

type Step = {
  id: string;
  title: string;
  component: React.ComponentType;
  canShow: boolean;
};

type PendingChanges = {
  path: PathProgressionWithInitial | null;
  health: Health;
  skills: Record<string, number>;
};

const usePendingChanges = () => {
  const [pendingChanges, setPendingChanges] = useState<PendingChanges>({
    path: null,
    health: {
      physique: 0,
      morale: 0,
      stamina: 0,
    },
    skills: {},
  });
  const updatePath = (path: PathProgressionWithInitial | null) => {
    setPendingChanges((prev) => ({ ...prev, path }));
  };

  const updateHealth = (health: Health) => {
    setPendingChanges((prev) => ({ ...prev, health }));
  };

  const updateSkills = (skills: Record<string, number>) => {
    setPendingChanges((prev) => ({ ...prev, skills }));
  };

  const reset = () => {
    setPendingChanges({
      path: null,
      health: {
        physique: 0,
        morale: 0,
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

export const LevelUpModal = ({ open, onClose }: LevelUpModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const availablePathPoints = useAtomValue(availablePathPointsAtom);
  const availableHealthUpgrades = useAtomValue(availableHealthUpgradesAtom);
  const availableSkillPoints = useAtomValue(availableSkillPointsAtom);
  const [paths, setPaths] = useAtom(pathsAtom);
  const [skillLevelUpgrades, setSkillLevelUpgrades] = useAtom(
    skillLevelUpgradesAtom
  );
  const skillLevels = useAtomValue(skillLevelsAtom);
  const physique = useAtomValue(physiqueAtom);
  const [physiqueUpgrades, setPhysiqueUpgrades] = useAtom(physiqueUpgradesAtom);
  const morale = useAtomValue(moraleAtom);
  const [moraleUpgrades, setMoraleUpgrades] = useAtom(moraleUpgradesAtom);
  const stamina = useAtomValue(staminaAtom);
  const [staminaUpgrades, setStaminaUpgrades] = useAtom(staminaUpgradesAtom);
  const [currentPhysique, setCurrentPhysique] = useAtom(currentPhysiqueAtom);
  const [currentMorale, setCurrentMorale] = useAtom(currentMoraleAtom);
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
    .filter((p) => p.name !== pendingChanges.path?.name)
    .map(
      (p) =>
        ({
          ...p,
          initialLevel: p.level,
        } as PathProgressionWithInitial)
    )
    .concat(pendingChanges.path?.level ? [pendingChanges.path] : [])
    .sort((a, b) => a.name.localeCompare(b.name));

  const remainingHealthUpgrades =
    availableHealthUpgrades -
    physiqueUpgrades -
    moraleUpgrades -
    staminaUpgrades;

  const remainingSkillUpgrades =
    availableSkillPoints -
    Object.values(skillLevelUpgrades).reduce((sum, value) => sum + value, 0);

  const currentHealth = {
    physique: physique.max + pendingChanges.health.physique,
    morale: morale.max + pendingChanges.health.morale,
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

  const visibleSteps = steps.filter((step) => step.canShow);
  const isLastStep = currentStep === visibleSteps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    if (pendingChanges.path) {
      setPaths((prev) =>
        prev
          .filter((p) => p.name !== pendingChanges.path?.name)
          .concat(
            pendingChanges.path && pendingChanges.path.level > 0
              ? [pendingChanges.path]
              : []
          )
          .sort((a, b) => a.name.localeCompare(b.name))
      );
    }
    setPhysiqueUpgrades((prev) => prev + pendingChanges.health.physique);
    setMoraleUpgrades((prev) => prev + pendingChanges.health.morale);
    setStaminaUpgrades((prev) => prev + pendingChanges.health.stamina);
    setSkillLevelUpgrades((prev) => {
      const updatedSkills = { ...prev };
      Object.entries(pendingChanges.skills).forEach(([skill, value]) => {
        updatedSkills[skill as SkillType] =
          (prev[skill as SkillType] || 0) + value;
      });
      return updatedSkills;
    });
    setCurrentPhysique(currentPhysique + pendingChanges.health.physique);
    setCurrentMorale(currentMorale + pendingChanges.health.morale);
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
    <Dialog open={open} onOpenChange={handleCancel}>
      <DialogContent className="max-w-2xl h-[800px] flex flex-col">
        <DialogHeader className="flex-none px-2">
          <DialogTitle>Level Up</DialogTitle>
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
            <Button onClick={isLastStep ? handleFinish : handleNext}>
              {isLastStep ? "Finish" : "Next"}
              {!isLastStep && <ChevronRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
