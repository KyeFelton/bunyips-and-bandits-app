import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { NameCard } from "../components/NameCard";
import { DescriptionCard } from "../components/DescriptionCard";
import { HealthCard } from "../components/HealthCard";
import { SensesCard } from "../components/SensesCard";
import { ArmourCard } from "../components/ArmourCard";
import { SpeedCard } from "../components/SpeedCard";
import { CombatCard } from "../components/CombatCard";
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
              <NameCard />
              <DescriptionCard />
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
              <CombatCard />
              <SpeedCard />
              <ArmourCard />
              <SensesCard />
            </div>
          )}
        </main>

        {/* Desktop Layout */}
        <main className="hidden md:grid py-6 xl:py-12 px-8 grid-cols-4 gap-4 h-full w-full max-w-[1400px] overflow-auto min-w-[1024px]">
          <div className="h-full max-h-[1100px] flex flex-col overflow-auto bg-card rounded-lg">
            <NameCard />
            <DescriptionCard />
          </div>
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
                <div className="p-4 overflow-auto border-t border-border">
                  <TraitsList />
                </div>
              </TabsContent>
              <TabsContent
                value="actions"
                className="w-full flex-grow rounded-lg rounded-tl-none bg-card"
              >
                <div className="p-4 overflow-auto border-t border-border">
                  <ActionsList />
                </div>
              </TabsContent>
              <TabsContent
                value="items"
                className="w-full flex-grow rounded-lg rounded-tl-none bg-card"
              >
                <div className="p-4 overflow-auto border-t border-border">
                  <ItemsTab />
                </div>
              </TabsContent>
              <TabsContent
                value="skills"
                className="w-full flex-grow rounded-lg rounded-tl-none bg-card"
              >
                <div className="p-4 overflow-auto border-t border-border">
                  <SkillsTable />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="h-full max-h-[1100px] flex flex-col divide-y divide-border overflow-auto bg-card rounded-lg">
            <HealthCard />
            <CombatCard />
            <SpeedCard />
            <ArmourCard />
            <SensesCard />
          </div>
        </main>
      </div>
    </div>
  );
}
