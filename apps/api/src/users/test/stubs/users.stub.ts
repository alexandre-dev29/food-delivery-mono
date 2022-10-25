import { Users } from '@food-delivery-mono/data-access';

export const usersStub = (): Users => {
  return {
    idUser: '1',
    userName: 'alexandre',
    firstName: 'mwenze',
    lastName: 'nkwembe',
    createdAt: new Date(2022, 9, 30),
    updatedAt: new Date(2022, 9, 30),
  };
};
