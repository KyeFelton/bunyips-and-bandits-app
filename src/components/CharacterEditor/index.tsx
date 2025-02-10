import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SpeciesStep } from "./SpeciesStep";
import { DescriptionStep } from "./DescriptionStep";
import { LevelStep } from "./LevelStep";
import { PathsStep } from "./PathsStep";
import { SkillsStep } from "./SkillsStep";
import { useSetAtom } from "jotai";
import { isEditingCharacterAtom } from "../../state/app";

const steps = [
  { title: "Choose a species", component: SpeciesStep },
  { title: "Describe your character", component: DescriptionStep },
  { title: "Select a level", component: LevelStep },
  { title: "Choose your paths", component: PathsStep },
  { title: "Upgrade your skills", component: SkillsStep },
];

export const CharacterEditor = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;
  const setIsEditingCharacter = useSetAtom(isEditingCharacterAtom);
  const StepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (isLastStep) {
      setIsEditingCharacter(false);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div className="h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8 h-full flex flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Create Your Character</h1>
          <p className="text-muted-foreground">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex relative">
          <div
            className="absolute top-2 w-full h-0.5 bg-muted-foreground/20"
            style={{ width: "80%", left: "10%", right: "10%" }}
          >
            <div
              className="absolute h-full bg-primary transition-all duration-500 ease-in-out"
              style={{
                width:
                  currentStep === 0
                    ? "0%"
                    : `${(currentStep / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex-1 flex flex-col items-center cursor-pointer"
              style={{ minWidth: 0 }} // Prevent flex items from growing beyond container
              onClick={() => handleStepClick(index)}
            >
              {/* Circle */}
              <div
                className={`relative z-10 w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
                  index <= currentStep
                    ? "bg-primary border-primary"
                    : "bg-background border-muted-foreground/20"
                }`}
              />
              {/* Label */}
              <span className="mt-4 text-sm font-medium text-center px-2">
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <Card className="p-8 shadow-lg overflow-auto">
          <StepComponent />
        </Card>

        {/* Navigation */}
        <div
          className="flex justify-between pt-8"
          style={{ marginTop: "auto" }}
        >
          <Button
            variant="outline"
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={currentStep === 0}
            size="lg"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button onClick={handleNext} size="lg">
            {isLastStep ? "Finish" : "Next"}
            {!isLastStep && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};
