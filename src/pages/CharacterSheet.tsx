import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { DescriptionPanel } from "../components/DescriptionPanel";
import { HealthCard } from "../components/HealthCard";
import { SensesStats } from "../components/SensesStats";
import { ArmourStats } from "../components/ArmourStats";
import { SpeedStats } from "../components/SpeedStats";
import { CombatStats } from "../components/CombatStats";
import { ItemsTab } from "../components/ItemsTab";
import { SkillsTable } from "../components/SkillsTable";
import { TraitsList } from "../components/TraitsList";
import { ActionsList } from "../components/ActionsList";
import { useState } from "react";
import { CharacterSheetGridNav } from "../components/CharacterSheetGridNav";
import { LayoutGrid } from "lucide-react";
import { useLoadCharacterFromUrl } from "../hooks/useLoadCharacterFromUrl";

export function CharacterSheet() {
  const [activeSection, setActiveSection] = useState("character");
  const [gridNavOpen, setGridNavOpen] = useState(false);

  useLoadCharacterFromUrl();

  return (
    <div className="w-full h-full relative">
      <div className="relative flex justify-center h-full">
        {/* Mobile Grid Navigation Button */}
        <button
          onClick={() => setGridNavOpen(true)}
          className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-20 bg-accent hover:bg-accent/80 text-foreground rounded-full p-4 shadow-lg transition-all"
        >
          <LayoutGrid className="h-6 w-6" />
          <span className="sr-only">Open navigation</span>
        </button>

        {/* Mobile Grid Navigation Overlay */}
        <CharacterSheetGridNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={gridNavOpen}
          onClose={() => setGridNavOpen(false)}
        />

        {/* Mobile Content */}
        <main className="md:hidden pb-24 w-full h-full overflow-auto">
          {activeSection === "character" && (
            <div className="flex flex-col bg-card">
              <DescriptionPanel />
            </div>
          )}

          {activeSection === "skills" && (
            <div className="p-4 overflow-auto bg-card">
              <SkillsTable />
            </div>
          )}

          {activeSection === "traits" && (
            <div className="p-4 overflow-auto bg-card">
              <TraitsList />
            </div>
          )}

          {activeSection === "actions" && (
            <div className="p-4 overflow-auto bg-card">
              <ActionsList />
            </div>
          )}

          {activeSection === "items" && (
            <div className="p-4 overflow-auto bg-card">
              <ItemsTab />
            </div>
          )}

          {activeSection === "stats" && (
            <div className="flex flex-col bg-card">
              <HealthCard className="overflow-auto" />
              <ArmourStats />
              <CombatStats />
              <SensesStats />
              <SpeedStats />
            </div>
          )}
        </main>

        {/* Desktop Layout */}
        <main className="hidden md:grid py-6 2xl:py-12 px-8 md:grid-cols-3 xl:grid-cols-4 gap-4 h-full w-full max-w-[1500px] overflow-auto min-w-[768px]">
          {/* Left column */}
          <div className="h-full max-h-[1100px] flex flex-col overflow-auto bg-card rounded-lg">
            <DescriptionPanel />
            <div className="xl:hidden flex flex-col divide-y divide-border">
              <HealthCard />
              <ArmourStats />
              <CombatStats />
              <SensesStats />
              <SpeedStats />
            </div>
          </div>

          {/* Middle 2 columns */}
          <div className="col-span-2 h-full max-h-[1100px] overflow-auto">
            <Tabs
              defaultValue="skills"
              className="flex flex-col items-start h-full"
            >
              <TabsList>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="traits">Traits</TabsTrigger>
                <TabsTrigger value="actions">Actions</TabsTrigger>
                <TabsTrigger value="items">Items</TabsTrigger>
              </TabsList>
              <TabsContent
                value="traits"
                className="w-full flex-grow rounded-lg rounded-tl-none bg-card"
              >
                <div className="p-4 overflow-auto">
                  <TraitsList />
                </div>
              </TabsContent>
              <TabsContent
                value="actions"
                className="w-full flex-grow rounded-lg rounded-tl-none bg-card"
              >
                <div className="p-4 overflow-auto">
                  <ActionsList />
                </div>
              </TabsContent>
              <TabsContent
                value="items"
                className="w-full flex-grow rounded-lg rounded-tl-none bg-card"
              >
                <div className="p-4 overflow-auto">
                  <ItemsTab />
                </div>
              </TabsContent>
              <TabsContent
                value="skills"
                className="w-full flex-grow rounded-lg rounded-tl-none bg-card"
              >
                <div className="p-4 overflow-auto">
                  <SkillsTable />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right column */}
          <div className="hidden xl:flex h-full max-h-[1100px] flex-col divide-y divide-border overflow-auto bg-card rounded-lg">
            <HealthCard />
            <ArmourStats />
            <CombatStats />
            <SensesStats />
            <SpeedStats />
          </div>
        </main>
      </div>
    </div>
  );
}
