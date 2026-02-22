export const HomeRoute = "/";
export const CharacterListRoute = "/character";
export const CharacterSheetRoute = `/character/:id`;
export const getCharacterSheetRoute = (id: string) => `/character/${id}`;
export const CharacterEditorRoute = `/character/:id/edit`;
export const getCharacterEditorRoute = (id: string) => `/character/${id}/edit`;
export const HandbookRoute = `/handbook`;
export const HandbookPageRoute = `/handbook/:section/:page`;
export const getHandbookPageRoute = (section: string, page: string) =>
  `/handbook/${section}/${page}`;
export const HandbookSubsectionPageRoute = `/handbook/:section/:subsection/:page`;
export const getHandbookSubsectionPageRoute = (
  section: string,
  subsection: string,
  page: string,
) => `/handbook/${section}/${subsection}/${page}`;
