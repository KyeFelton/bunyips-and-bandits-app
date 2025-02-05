import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SpeciesStep } from './SpeciesStep';
import { DetailsStep } from './DetailsStep';
import { LevelStep } from './LevelStep';
import { PathsStep } from './PathsStep';
import { SkillsStep } from './SkillsStep';

const steps = [
  { title: 'Choose Species', component: SpeciesStep },
  { title: 'Character Details', component: DetailsStep },
  { title: 'Select Level', component: LevelStep },
  { title: 'Choose Paths', component: PathsStep },
  { title: 'Upgrade Skills', component: SkillsStep },
];

export const CharacterWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-muted p-8 flex flex-col items-center">
      <Card className="w-full max-w-4xl p-6">
        <div className="space-y-8">
          {/* Progress Bar */}
          <div className="relative">
            <div className="absolute top-2 w-full h-0.5 bg-muted-foreground/20">
              <div 
                className="absolute h-full bg-primary transition-all duration-500 ease-in-out"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <div 
                  key={step.title}
                  className="flex flex-col items-center"
                >
                  <div 
                    className={`w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
                      index <= currentStep 
                        ? 'bg-primary border-primary' 
                        : 'bg-background border-muted-foreground/20'
                    }`}
                  />
                  <span className="mt-4 text-sm font-medium">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="mt-8">
            <StepComponent />
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => prev - 1)}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={currentStep === steps.length - 1}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};