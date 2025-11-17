import { SkillType } from '../../enums/SkillType';
import { Ancestry } from '../../models/ancestry';

export const Downunda: Ancestry = {
  name: 'Downunda',
  description: 'Indigenous peoples with deep spiritual connection to Country and ancestral lands.',
  species: ['Avian', 'Floret', 'Giant', 'Goblin', 'Human', 'Reptilian', 'Sprite'],
  effects: [
    {
      skill: {
        skillType: SkillType.Nature,
        bonus: 1,
      },
    },
  ],
};
