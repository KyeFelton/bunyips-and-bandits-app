import React from "react";
import { Card } from "../ui/card";
import { TableOfContents } from "./TableOfContents";

export type Section = {
  title: string;
  content: React.ReactNode;
  subSections?: Section[];
};

type Props = {
  title: string;
  subTitle?: string;
  summary?: React.ReactNode;
  tableOfContents: boolean;
  sections: Section[];
};

export function Page({
  title,
  subTitle,
  summary,
  tableOfContents,
  sections,
}: Props) {
  return (
    <div className={"sm:max-w-4xl sm:mx-auto sm:px-4 sm:py-8"}>
      <Card className="py-8 px-12 rounded-none sm:rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {subTitle && (
          <h2 className="text-2xl font-semibold mb-2">{subTitle}</h2>
        )}
        {summary && <div className="prose max-w-none mb-8">{summary}</div>}
        {tableOfContents && <TableOfContents sections={sections} />}
        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              id={section.title}
              className="scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <div className="w-full border-b border-gray-300 mb-4" />
              <div className="prose max-w-none">{section.content}</div>
              {section.subSections && section.subSections.length > 0 && (
                <div className="mt-4">
                  {section.subSections.map((subSection) => (
                    <section
                      key={subSection.title}
                      id={subSection.title}
                      className="scroll-mt-24 mb-4"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {subSection.title}
                      </h3>
                      <div className="w-full border-b border-gray-200 mb-4" />
                      <div className="prose max-w-none">
                        {subSection.content}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </Card>
    </div>
  );
}
