export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function pascalToSentence(str: string): string {
  return str
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}
