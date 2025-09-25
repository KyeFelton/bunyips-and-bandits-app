import { ReactNode } from "react";

export type InfoBoxTrait = {
  key: string;
  value: ReactNode;
};

export type InfoBox = {
  imageSrc?: string;
  traits: InfoBoxTrait[];
};

export type WikiContent = {
  id: string;
  category?: string;
  title: string;
  subTitle?: string;
  summary?: ReactNode;
  infoBox?: InfoBox;
  tableOfContents?: ReactNode;
  main?: ReactNode;
};
