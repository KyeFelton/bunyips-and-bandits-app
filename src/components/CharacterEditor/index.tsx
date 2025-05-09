import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SpeciesStep } from "./SpeciesStep";
import { DescriptionStep } from "./DescriptionStep";
import { LevelStep } from "./LevelStep";
import { PathsStep } from "./PathsStep";
import { SkillsStep } from "./SkillsStep";
import { CustomTraitsStep } from "./CustomTraitsStep";
import { HealthStep } from "./HealthStep";
import { CharacterSheetRoute } from "../../routes";

const steps = [
  { title: "Species", component: SpeciesStep },
  { title: "Description", component: DescriptionStep },
  { title: "Level", component: LevelStep },
  { title: "Paths", component: PathsStep },
  { title: "Skills", component: SkillsStep },
  { title: "Health", component: HealthStep },
  { title: "Traits", component: CustomTraitsStep },
];

export const CharacterEditor = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;
  const navigate = useNavigate();
  const StepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (isLastStep) {
      navigate(CharacterSheetRoute);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (isFirstStep) {
      navigate(-1);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <motion.div
      className="h-screen p-6 sm:p-8 bg-gray-500/15"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto space-y-8 h-full flex flex-col">
        <div>
          <div className="text-center relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 text-background hover:text-white/80 hover:bg-white/10"
              onClick={handleClose}
            >
              <X className="h-6 w-6" />
            </Button>
            <h1 className="text-3xl font-bold mb-2 text-background">
              Create Your Character
            </h1>
            <p className="text-background/80">
              Step {currentStep + 1} of {steps.length}:{" "}
              {steps[currentStep].title}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex relative mt-8">
            <div
              className="absolute top-2 w-full h-0.5 bg-muted-foreground/20"
              style={{
                width: `${100 - 100 / steps.length}%`,
                left: `${100 / (2 * steps.length)}%`,
                right: `${100 / (2 * steps.length)}%`,
              }}
            >
              <div
                className="absolute h-full bg-background transition-all duration-500 ease-in-out"
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
                style={{ minWidth: 0 }}
                onClick={() => handleStepClick(index)}
              >
                <div
                  className={`relative z-10 w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
                    index <= currentStep
                      ? "bg-background border-background"
                      : "bg-muted-foreground border-muted-foreground/20"
                  }`}
                />
                <span className="mt-4 text-sm font-medium text-center px-2 text-background hidden sm:block">
                  {index + 1}. {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Card className="h-full p-4 sm:py-6 sm:px-9 lg:py-8 lg:px-12 shadow-lg overflow-auto">
          {/* Step Content */}
          <h2 className="text-2xl my-3 font-bold text-foreground tracking-tight">
            {currentStep + 1}. {steps[currentStep].title}
          </h2>
          <StepComponent />
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          {isFirstStep ? (
            <div />
          ) : (
            <Button onClick={handlePrevious} size="lg">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}
          <Button variant="outline" onClick={handleNext} size="lg">
            {isLastStep ? "Finish" : "Next"}
            {!isLastStep && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
