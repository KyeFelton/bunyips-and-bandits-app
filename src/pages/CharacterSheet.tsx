import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
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
import { ItemsTable } from "../components/ItemsTable";
import { SkillsTable } from "../components/SkillsTable";
import { TraitsList } from "../components/TraitsList";
import { ActionsList } from "../components/ActionsList";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function CharacterSheet() {
  const [activeSection, setActiveSection] = useState("character");

  // Define sections for mobile navigation
  const sections = [
    { value: "character", label: "Character" },
    { value: "stats", label: "Stats" },
    { value: "skills", label: "Skills" },
    { value: "traits", label: "Traits" },
    { value: "actions", label: "Actions" },
    { value: "items", label: "Items" },
  ];

  return (
    <motion.div
      className="w-full h-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex justify-center h-full">
        {/* Mobile Navigation */}
        <div className="md:hidden w-full fixed top-0 z-10 p-4 bg-black">
          <Select value={activeSection} onValueChange={setActiveSection}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent>
              {sections.map((section) => (
                <SelectItem key={section.value} value={section.value}>
                  {section.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Mobile Content */}
        <main className="md:hidden py-20 px-4 w-full h-full overflow-auto">
          {activeSection === "character" && (
            <div className="flex flex-col gap-4">
              <NameCard />
              <DescriptionCard />
            </div>
          )}

          {activeSection === "skills" && (
            <Card className="p-4 overflow-auto">
              <SkillsTable />
            </Card>
          )}

          {activeSection === "traits" && (
            <Card className="p-4 overflow-auto">
              <TraitsList />
            </Card>
          )}

          {activeSection === "actions" && (
            <Card className="p-4 overflow-auto">
              <ActionsList />
            </Card>
          )}

          {activeSection === "items" && (
            <Card className="p-4 overflow-auto">
              <ItemsTable />
            </Card>
          )}

          {activeSection === "stats" && (
            <div className="flex flex-col gap-4">
              <HealthCard className="overflow-auto" />
              <CombatCard />
              <SpeedCard />
              <ArmourCard />
              <SensesCard />
            </div>
          )}
        </main>

        {/* Desktop Layout - Unchanged */}
        <main className="hidden md:grid py-12 px-8 grid-cols-4 gap-4 h-full w-full max-w-[1400px] overflow-auto min-w-[1024px]">
          <div className="flex flex-col gap-2 h-[948px] justify-between">
            <NameCard />
            <DescriptionCard />
            <SensesCard />
          </div>
          <div className="col-span-2">
            <Tabs defaultValue="skills" className="flex flex-col items-start">
              <TabsList>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="traits">Traits</TabsTrigger>
                <TabsTrigger value="actions">Actions</TabsTrigger>
                <TabsTrigger value="items">Items</TabsTrigger>
              </TabsList>
              <TabsContent
                value="traits"
                className="w-full flex-grow shadow-sm"
              >
                <Card className="h-[908px] p-4 overflow-auto rounded-tl-none">
                  <TraitsList />
                </Card>
              </TabsContent>
              <TabsContent
                value="actions"
                className="w-full flex-grow shadow-sm"
              >
                <Card className="h-[908px] p-4 overflow-auto rounded-tl-none">
                  <ActionsList />
                </Card>
              </TabsContent>
              <TabsContent value="items" className="w-full flex-grow shadow-sm">
                <Card className="h-[908px] p-4 overflow-auto rounded-tl-none">
                  <ItemsTable />
                </Card>
              </TabsContent>
              <TabsContent
                value="skills"
                className="w-full flex-grow shadow-sm"
              >
                <Card className="h-[908px] p-4 overflow-auto rounded-tl-none">
                  <SkillsTable />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex flex-col gap-4 h-[948px] justify-between">
            <HealthCard className="h-[432px] overflow-auto" />
            <CombatCard />
            <SpeedCard />
            <ArmourCard />
          </div>
        </main>
      </div>
    </motion.div>
  );
}
