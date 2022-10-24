import { AuthUser } from '@food-delivery-mono/data-access';

export const authUserStub = (): AuthUser => {
  return {
    phoneNumber: '+243975344824',
    password: '123456',
    username: 'alexandre',
    userId: '',
    roleRoleId: 'User',
    createdAt: new Date(2022, 9, 30),
    refreshToken: '',
    id: '1',
    updatedAt: new Date(2022, 9, 30),
    isPhoneConfirmed: false,
  };
};
