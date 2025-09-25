import { WikiRoute } from "../routes";
import { WikiCategory } from "./WikiCategory";

export enum WikiUri {
  ContinentDownunda = `${WikiRoute}/${WikiCategory.Continents}/downunda`,
  CultureDharrigal = `${WikiRoute}/${WikiCategory.Cultures}/dharrigal`,
  CultureDropbear = `${WikiRoute}/${WikiCategory.Cultures}/dropbear`,
  FolkDropbear = `${WikiRoute}/${WikiCategory.Folk}/dropbear`,
}
