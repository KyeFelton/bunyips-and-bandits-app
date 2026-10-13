import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom, useSetAtom } from "jotai";
import { Button } from "../components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Fingerprint,
  ScrollText,
  Sparkles,
  UserRoundPen,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../components/ui/dialog";
import { saveFileAtom, focalCharacterIdAtom } from "../state/saveFile";
import { nameAtom } from "../state/character";
import { KinStep } from "../components/KinStep";
import { DescriptionStep } from "../components/DescriptionStep";
import { MagicStep } from "../components/MagicStep";
import { BackgroundStep } from "../components/BackgroundStep";
import { useLoadCharacterFromUrl } from "../hooks/useLoadCharacterFromUrl";

const steps = [
  {
    title: "Kin",
    description: "Choose your heritage",
    icon: Fingerprint,
    component: KinStep,
  },
  {
    title: "Background",
    description: "Shape your past",
    icon: ScrollText,
    component: BackgroundStep,
  },
  {
    title: "Magic",
    description: "Choose your magic",
    icon: Sparkles,
    component: MagicStep,
  },
  {
    title: "Description",
    description: "Bring them to life",
    icon: UserRoundPen,
    component: DescriptionStep,
  },
];

export const CharacterEditor = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepContentRef = useRef<HTMLDivElement>(null);
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  useEffect(() => {
    stepContentRef.current?.scrollTo(0, 0);
  }, [currentStep]);
  const navigate = useNavigate();
  const StepComponent = steps[currentStep].component;
  const setSaveFile = useSetAtom(saveFileAtom);
  const [focalCharacterId] = useAtom(focalCharacterIdAtom);
  const [name, setName] = useAtom(nameAtom);

  useLoadCharacterFromUrl();

  const handleNext = () => {
    if (isLastStep) {
      if (name.trim() === "") {
        setName("No name");
      }

      navigate(-1);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (isFirstStep) {
      handleClose();
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleClose = () => {
    // Delete the character if exiting without completing
    if (focalCharacterId) {
      setSaveFile((prev) => {
        const characters = { ...prev.characters };
        delete characters[focalCharacterId];
        return { ...prev, characters };
      });
    }
    navigate(-1);
  };

  return (
    <Dialog open onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        className="flex h-[min(94dvh,900px)] w-[calc(100%-1rem)] max-w-6xl flex-col gap-0 overflow-hidden p-0 sm:rounded-xl"
      >
        <DialogTitle className="sr-only">Character editor</DialogTitle>
        <DialogDescription className="sr-only">
          Choose your character's kin, background, magic, and description.
        </DialogDescription>

        <nav
          aria-label="Character creation steps"
          className="grid shrink-0 grid-cols-2 gap-2 border-b bg-muted/20 px-4 pb-4 pt-12 sm:grid-cols-4 sm:gap-3 sm:px-8 sm:pb-6 sm:pt-10"
        >
          {steps.map((step, index) => {
            const isCurrent = index === currentStep;
            const StepIcon = step.icon;
            return (
              <button
                key={step.title}
                type="button"
                aria-current={isCurrent ? "step" : undefined}
                onClick={() => setCurrentStep(index)}
                className={`flex min-h-20 items-center gap-3 rounded-lg border px-3 py-3 text-left transition-colors sm:min-h-24 sm:px-4 ${
                  isCurrent
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-background text-foreground hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                <StepIcon
                  aria-hidden="true"
                  className={`h-6 w-6 shrink-0 sm:h-7 sm:w-7 ${
                    isCurrent
                      ? "text-primary-foreground"
                      : "text-primary"
                  }`}
                />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold sm:text-base">
                    {step.title}
                  </span>
                  <span
                    className={`mt-0.5 block truncate text-xs ${
                      isCurrent
                        ? "text-primary-foreground/75"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.description}
                  </span>
                </span>
              </button>
            );
          })}
        </nav>

        <div
          ref={stepContentRef}
          className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-16 sm:py-8"
        >
          <StepComponent />
        </div>

        <footer className="flex shrink-0 justify-between gap-3 border-t bg-background px-4 py-4 sm:px-8">
          {isFirstStep ? (
            <div />
          ) : (
            <Button onClick={handlePrevious} size="lg" variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}
          <Button onClick={handleNext} size="lg">
            {isLastStep ? "Finish" : "Next"}
            {!isLastStep && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </footer>
      </DialogContent>
    </Dialog>
  );
};
