import { atom } from "jotai";
import { SaveFile } from "../models/saveFile";

export const saveFileAtom = atom<SaveFile>({ characters: {} });
export const focalCharacterIdAtom = atom<string | undefined>(undefined);
