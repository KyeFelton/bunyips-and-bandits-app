export type Character = {
  health: {
    max: number;
    current: number;
  };
  sanity: {
    max: number;
    current: number;
  };
  stamina: {
    max: number;
    current: number;
  };
  sight: {
    standard: 0 | 1 | 2 | 3;
    infrared: 0 | 1 | 2 | 3;
  };
  hearing: {
    standard: 0 | 1 | 2 | 3;
    tremour: 0 | 1 | 2 | 3;
  };
  smell: 0 | 1 | 2 | 3;
};
