import { SkillType } from "../enums/SkillType";
import { MovementType } from "../enums/MovementType";
import { DamageType } from "../enums/DamageType";
import { SenseType } from "../enums/SenseType";
import { CreatureSize } from "../enums/CreatureSize";

export type Species = {
  name: string;
  size: CreatureSize;
  health: {
    initial: number;
    increments: number;
  };
  sanity: {
    initial: number;
    increments: number;
  };
  stamina: {
    initial: number;
    increments: number;
  };
  speed: {
    [MovementType.Walk]: number;
    [MovementType.Swim]: number;
    [MovementType.Climb]: number;
    [MovementType.Fly]: number;
  };
  senses: {
    [SenseType.Sight]: boolean;
    [SenseType.InfraredSight]: boolean;
    [SenseType.Hearing]: boolean;
    [SenseType.TremorHearing]: boolean;
    [SenseType.Smell]: boolean;
    [SenseType.Psychic]: boolean;
  };
  armour: {
    [DamageType.Fire]: number;
    [DamageType.Electric]: number;
    [DamageType.Toxic]: number;
    [DamageType.Slash]: number;
    [DamageType.Force]: number;
  };
  skillLevels: {
    [SkillType.Strength]: number;
    [SkillType.Agility]: number;
    [SkillType.Dexterity]: number;
    [SkillType.Throw]: number;
    [SkillType.Intelligence]: number;
    [SkillType.Nature]: number;
    [SkillType.Willpower]: number;
    [SkillType.Charisma]: number;
    [SkillType.Psychology]: number;
    [SkillType.Stealth]: number;
    [SkillType.Sight]: number;
    [SkillType.Hearing]: number;
    [SkillType.Smell]: number;
  };
};

export const Badgerman: Species = {
  name: "Badgerman",
  size: CreatureSize.Small,
  health: {
    initial: 10,
    increments: 1,
  },
  sanity: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [MovementType.Walk]: 3,
    [MovementType.Swim]: 1,
    [MovementType.Climb]: 3,
    [MovementType.Fly]: 0,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 2,
    [SkillType.Agility]: 2,
    [SkillType.Dexterity]: 3,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 3,
    [SkillType.Sight]: 1,
    [SkillType.Hearing]: 3,
    [SkillType.Smell]: 3,
  },
};

export const Cobber: Species = {
  name: "Cobber",
  size: CreatureSize.Small,
  health: {
    initial: 10,
    increments: 1,
  },
  sanity: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [MovementType.Walk]: 3,
    [MovementType.Swim]: 3,
    [MovementType.Climb]: 3,
    [MovementType.Fly]: 0,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 1,
    [SkillType.Agility]: 3,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 3,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 3,
    [SkillType.Sight]: 2,
    [SkillType.Hearing]: 3,
    [SkillType.Smell]: 1,
  },
};

export const Cormiard: Species = {
  name: "Cormiard",
  size: CreatureSize.Medium,
  health: {
    initial: 20,
    increments: 2,
  },
  sanity: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [MovementType.Walk]: 4,
    [MovementType.Swim]: 4,
    [MovementType.Climb]: 1,
    [MovementType.Fly]: 0,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 2,
    [SkillType.Agility]: 2,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 3,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 2,
    [SkillType.Sight]: 3,
    [SkillType.Hearing]: 2,
    [SkillType.Smell]: 1,
  },
};

export const Goa: Species = {
  name: "Goa",
  size: CreatureSize.Large,
  health: {
    initial: 30,
    increments: 3,
  },
  sanity: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [MovementType.Walk]: 4,
    [MovementType.Swim]: 1,
    [MovementType.Climb]: 1,
    [MovementType.Fly]: 0,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 3,
    [SkillType.Agility]: 1,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 3,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 1,
    [SkillType.Sight]: 2,
    [SkillType.Hearing]: 3,
    [SkillType.Smell]: 1,
  },
};

export const Jeli: Species = {
  name: "Jeli",
  size: CreatureSize.Medium,
  health: {
    initial: 20,
    increments: 2,
  },
  sanity: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [MovementType.Walk]: 3,
    [MovementType.Swim]: 1,
    [MovementType.Climb]: 0,
    [MovementType.Fly]: 0,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 2,
  },
  skillLevels: {
    [SkillType.Strength]: 2,
    [SkillType.Agility]: 2,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 3,
    [SkillType.Nature]: 3,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 3,
    [SkillType.Stealth]: 2,
    [SkillType.Sight]: 1,
    [SkillType.Hearing]: 1,
    [SkillType.Smell]: 2,
  },
};

export const Minotaur: Species = {
  name: "Minotaur",
  size: CreatureSize.Large,
  health: {
    initial: 30,
    increments: 3,
  },
  sanity: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [MovementType.Walk]: 5,
    [MovementType.Swim]: 1,
    [MovementType.Climb]: 0,
    [MovementType.Fly]: 0,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 3,
    [SkillType.Agility]: 1,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 3,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 1,
    [SkillType.Sight]: 1,
    [SkillType.Hearing]: 3,
    [SkillType.Smell]: 2,
  },
};

export const Pixie: Species = {
  name: "Pixie",
  size: CreatureSize.Tiny,
  health: {
    initial: 5,
    increments: 0.5,
  },
  sanity: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [MovementType.Walk]: 1,
    [MovementType.Swim]: 1,
    [MovementType.Climb]: 1,
    [MovementType.Fly]: 4,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 2,
    [DamageType.Force]: 2,
  },
  skillLevels: {
    [SkillType.Strength]: 0,
    [SkillType.Agility]: 4,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 3,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 4,
    [SkillType.Sight]: 2,
    [SkillType.Hearing]: 3,
    [SkillType.Smell]: 2,
  },
};

export const Tengaroo: Species = {
  name: "Tengaroo",
  size: CreatureSize.Small,
  health: {
    initial: 10,
    increments: 1,
  },
  sanity: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [MovementType.Walk]: 3,
    [MovementType.Swim]: 1,
    [MovementType.Climb]: 3,
    [MovementType.Fly]: 0,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 1,
    [SkillType.Agility]: 4,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 3,
    [SkillType.Sight]: 3,
    [SkillType.Hearing]: 1,
    [SkillType.Smell]: 2,
  },
};

export const Vulturan: Species = {
  name: "Vulturan",
  size: CreatureSize.Medium,
  health: {
    initial: 20,
    increments: 2,
  },
  sanity: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [MovementType.Walk]: 4,
    [MovementType.Swim]: 1,
    [MovementType.Climb]: 1,
    [MovementType.Fly]: 0,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 2,
    [SkillType.Agility]: 2,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 2,
    [SkillType.Willpower]: 3,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 2,
    [SkillType.Sight]: 3,
    [SkillType.Hearing]: 2,
    [SkillType.Smell]: 1,
  },
};

export const Yowie: Species = {
  name: "Yowie",
  size: CreatureSize.Large,
  health: {
    initial: 30,
    increments: 3,
  },
  sanity: {
    initial: 10,
    increments: 1,
  },
  stamina: {
    initial: 10,
    increments: 1,
  },
  speed: {
    [MovementType.Walk]: 4,
    [MovementType.Swim]: 1,
    [MovementType.Climb]: 1,
    [MovementType.Fly]: 0,
  },
  senses: {
    [SenseType.Sight]: true,
    [SenseType.InfraredSight]: false,
    [SenseType.Hearing]: true,
    [SenseType.TremorHearing]: false,
    [SenseType.Smell]: true,
    [SenseType.Psychic]: false,
  },
  armour: {
    [DamageType.Fire]: 0,
    [DamageType.Electric]: 0,
    [DamageType.Toxic]: 0,
    [DamageType.Slash]: 0,
    [DamageType.Force]: 0,
  },
  skillLevels: {
    [SkillType.Strength]: 3,
    [SkillType.Agility]: 1,
    [SkillType.Dexterity]: 2,
    [SkillType.Throw]: 2,
    [SkillType.Intelligence]: 2,
    [SkillType.Nature]: 3,
    [SkillType.Willpower]: 2,
    [SkillType.Charisma]: 2,
    [SkillType.Psychology]: 2,
    [SkillType.Stealth]: 1,
    [SkillType.Sight]: 1,
    [SkillType.Hearing]: 3,
    [SkillType.Smell]: 2,
  },
};

export const AllSpecies = {
  Badgerman,
  Cobber,
  Cormiard,
  Goa,
  Jeli,
  Minotaur,
  Pixie,
  Tengaroo,
  Vulturan,
  Yowie,
};

export const startingSpecies = AllSpecies.Badgerman;
