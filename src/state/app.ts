import { atom } from 'jotai';

export const isFirstLoadAtom = atom<boolean>(true);
export const isEditingCharacterAtom = atom<boolean>(false);
