import { ReactNode } from "react";
import { DamageType } from "../enums/DamageType";
import { SenseType } from "../enums/SenseType";
import { ArmourIcon } from "./icons/ArmourIcon";
import { SenseIcon } from "./icons/SenseIcon";

type Props = {
  text: string;
  className?: string;
};

const MARKER_PATTERN = /\{\{(\w+):(\w+)\}\}/g;

const DAMAGE_TYPE_TOKENS: Record<string, DamageType> = {
  fire: DamageType.Fire,
  electric: DamageType.Electric,
  toxic: DamageType.Toxic,
  slash: DamageType.Slash,
  force: DamageType.Force,
};

const SENSE_TYPE_TOKENS: Record<string, SenseType> = {
  sight: SenseType.Sight,
  infrared: SenseType.InfraredSight,
  hearing: SenseType.Hearing,
  tremor: SenseType.TremorHearing,
  smell: SenseType.Smell,
  psychic: SenseType.Psychic,
};

const renderMarker = (
  category: string,
  value: string,
  key: number,
): ReactNode => {
  const token = value.toLowerCase();

  if (category === "damage") {
    const type = DAMAGE_TYPE_TOKENS[token];
    if (type) {
      return (
        <>
          <ArmourIcon key={key} type={type} /> {type}
        </>
      );
    }
  }

  if (category === "sense") {
    const type = SENSE_TYPE_TOKENS[token];
    if (type) {
      return (
        <>
          {" "}
          <SenseIcon key={key} type={type} /> {type}
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
      parts.push(text.slice(lastIndex, index));
    }

    parts.push(renderMarker(match[1], match[2], index));
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

export const RichDescription = ({ text, className }: Props) => (
  <span className={className}>{parseDescription(text)}</span>
);
