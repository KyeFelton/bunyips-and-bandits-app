export const getDiceForLevel = (level: number | undefined) => {
  switch (level) {
    case 1:
      return "d4";
    case 2:
      return "d6";
    case 3:
      return "d8";
    case 4:
      return "d12";
    case 5:
      return "d20";
    default:
      return "-";
  }
};
