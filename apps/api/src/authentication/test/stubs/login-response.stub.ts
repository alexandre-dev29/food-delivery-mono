import { LoginResponse } from '@food-delivery-mono/shared-types';
import { Role } from '@food-delivery-mono/data-access';

export const LoginResponseStub = (): LoginResponse => {
  return {
    access_token: '11111111111111',
    refresh_token: '22222222222222',
    user: {
      phoneNumber: '+243975344824',
      password: '123456',
      username: 'alexandre',
      userId: '',
      role: Role.User,
      createdAt: new Date(2022, 9, 30),
      refreshToken: '',
      id: '1',
      updatedAt: new Date(2022, 9, 30),
      isPhoneConfirmed: false,
    },
  };
};
