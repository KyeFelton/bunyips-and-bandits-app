export const HomeRoute = "/";
export const CharacterListRoute = "/character";
export const CharacterSheetRoute = `/character/:id`;
export const getCharacterSheetRoute = (id: string) => `/character/${id}`;
export const CharacterEditorRoute = `/character/:id/edit`;
export const getCharacterEditorRoute = (id: string) => `/character/${id}/edit`;
export const HandbookRoute = `/handbook`;
export const WikiRoute = `/wiki`;
export const WikiCategoryRoute = `/wiki/:category`;
export const getWikiCategoryRoute = (category: string) => `/wiki/${category}`;
export const WikiArticleRoute = `/wiki/:category/:id`;
export const getWikiArticleRoute = (category: string, id: string) =>
  `/wiki/${category}/${id}`;
