import { Profile } from '@food-delivery-mono/data-access';

export const profileStub = (): Profile => {
  return {
    createdAt: new Date(2022, 9, 30),
    updatedAt: new Date(2022, 9, 30),
    profileId: '1',
    bio: 'i am alexandre mwenze',
    userId: '1',
    dateOfBirth: new Date(2022, 9, 30),
    placeOfBirth: new Date(2022, 9, 30),
  };
};
