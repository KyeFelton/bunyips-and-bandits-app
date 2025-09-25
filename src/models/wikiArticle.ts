import { ReactNode } from "react";

export type InfoBoxTrait = {
  key: string;
  value: ReactNode;
};

export type InfoBox = {
  imageSrc: string;
  traits: InfoBoxTrait[];
};

export type WikiArticle = {
  title: string;
  subTitle?: string;
  summary?: ReactNode;
  infoBox?: InfoBox;
  tableOfContents?: ReactNode;
  content?: ReactNode;
};
