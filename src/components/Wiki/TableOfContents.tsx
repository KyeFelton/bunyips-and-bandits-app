type Section = {
  title: string;
  subSections?: Section[];
};

export function TableOfContents({ sections }: { sections: Section[] }) {
  return (
    <nav className="handbook-toc p-4 mb-6 bg-gray-50 rounded border border-gray-200">
      <h2 className="font-bold mb-2 text-lg">Contents</h2>
      <ul className="list-disc ml-6 space-y-1">
        {sections.map((section) => (
          <li key={section.title}>
            <a
              href={`#${section.title}`}
              className="text-blue-600 hover:underline"
            >
              {section.title}
            </a>
            {section.subSections && section.subSections.length > 0 && (
              <ul className="list-disc ml-6 space-y-1">
                {section.subSections.map((subSection) => (
                  <li key={subSection.title}>
                    <a
                      href={`#${subSection.title}`}
                      className="text-blue-600 hover:underline"
                    >
                      {subSection.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
