import { Fragment, ReactNode } from "react";
import { DamageType } from "../enums/DamageType";
import { SenseType } from "../enums/SenseType";
import { ArmourIcon } from "./icons/ArmourIcon";
import { SenseIcon } from "./icons/SenseIcon";
import { BodyIcon, MindIcon } from "./icons/HealthIcon";
import { capitalize } from "../utils/capitalize";
import { SkillIcon } from "./icons/SkillIcon";
import { SkillType } from "../enums/SkillType";
import { SpeedIcon } from "./icons/SpeedIcon";
import { Locomotion } from "../enums/Locomotion";
import { ActionIcon } from "./icons/ActionIcon";

type Props = {
  text: string;
  className?: string;
};

const MARKER_PATTERN = /\{\{(\w+):(\w+)\}\}/g;

const renderMarker = (category: string, value: string): ReactNode => {
  const token = capitalize(value);

  if (category === "skill") {
    if (token) {
      return (
        <>
          <SkillIcon type={token as SkillType} /> {token}
        </>
      );
    }
  }

  if (category === "damage") {
    if (token) {
      return (
        <>
          <ArmourIcon type={token as DamageType} /> {token}
        </>
      );
    }
  }

  if (category === "sense") {
    if (token) {
      return (
        <>
          <SenseIcon type={token as SenseType} /> {token}
        </>
      );
    }
  }

  if (category === "speed") {
    if (token) {
      return (
        <>
          <SpeedIcon type={token as Locomotion} /> {token}
        </>
      );
    }
  }

  if (category === "health") {
    if (token === "Body") {
      return (
        <>
          <BodyIcon /> physical health
        </>
      );
    }
    if (token === "Mind") {
      return (
        <>
          <MindIcon /> mental health
        </>
      );
    }
    if (token === "Stamina") {
      return (
        <>
          <ActionIcon type={"stamina"} /> Stamina
        </>
      );
    }
  }

  return `{{${category}:${value}}}`;
};

const parseDescription = (text: string): ReactNode[] => {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(MARKER_PATTERN)) {
    const index = match.index ?? 0;

    if (index > lastIndex) {
      parts.push(
        <Fragment key={`text-${lastIndex}`}>
          {text.slice(lastIndex, index)}
        </Fragment>,
      );
    }

    parts.push(
      <Fragment key={`marker-${index}`}>
        {renderMarker(match[1], match[2])}
      </Fragment>,
    );
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(
      <Fragment key={`text-${lastIndex}`}>{text.slice(lastIndex)}</Fragment>,
    );
  }

  return parts;
};

export const RichDescription = ({ text, className }: Props) => (
  <span className={className}>{parseDescription(text)}</span>
);
