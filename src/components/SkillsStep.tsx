import { useAtom, useAtomValue } from "jotai";
import {
  skillLevelUpgradesAtom,
  availableSkillPointsAtom,
  skillLevelsAtom,
} from "./../state/character";
import { SkillsUpgradeTable } from "./SkillsUpgradeTable";

export const SkillsStep = () => {
  const [skillLevelUpgrades, setSkillLevelUpgrades] = useAtom(
    skillLevelUpgradesAtom
  );
  const availablePoints = useAtomValue(availableSkillPointsAtom);
  const skillLevels = useAtomValue(skillLevelsAtom);

  return (
    <SkillsUpgradeTable
      skillLevels={skillLevels}
      skillLevelUpgrades={skillLevelUpgrades}
      onSkillLevelUpgradesChange={setSkillLevelUpgrades}
      availablePoints={availablePoints}
    />
  );
};
