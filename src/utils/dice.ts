export const getDiceForLevel = (level: number | undefined) => {
  switch (level) {
    case 1:
    case 2:
      return 4;
    case 3:
    case 4:
      return 6;
    case 5:
    case 6:
      return 8;
    case 7:
    case 8:
      return 10;
    case 9:
    case 10:
      return 12;
    default:
      return 0;
  }
};
