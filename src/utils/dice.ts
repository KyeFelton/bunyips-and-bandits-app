export const getDiceForLevel = (level: number | undefined) => {
  switch (level) {
    case 1:
      return 4;
    case 2:
      return 6;
    case 3:
      return 8;
    case 4:
      return 10;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return 12;
    default:
      return 0;
  }
};

export const getDiceBonusForLevel = (level: number | undefined) => {
  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return 0;
    case 6:
      return 1;
    case 7:
      return 2;
    case 8:
      return 3;
    case 9:
      return 4;
    case 10:
      return 5;
    default:
      return 0;
  }
};
