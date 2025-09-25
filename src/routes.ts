export const HomeRoute = "/bunyips-and-bandits-app";
export const CharacterListRoute = HomeRoute;
export const CharacterSheetRoute = `${HomeRoute}/character/:id`;
export const getCharacterSheetRoute = (id: string) =>
  `${HomeRoute}/character/${id}`;
export const CharacterEditorRoute = `${HomeRoute}/character/:id/edit`;
export const getCharacterEditorRoute = (id: string) =>
  `${HomeRoute}/character/${id}/edit`;
export const HandbookRoute = `${HomeRoute}/handbook`;
export const WikiRoute = `${HomeRoute}/wiki`;
