import { authUserStub } from '../test/stubs/auth-user.stub';
import { LoginResponseStub } from '../test/stubs/login-response.stub';
import { jest } from '@jest/globals';
import { AuthUser } from '@food-delivery-mono/data-access';
import { LoginResponse } from '@food-delivery-mono/shared-types';

export const AuthService = jest.fn().mockReturnValue({
  create: jest.fn<() => Promise<AuthUser>>().mockResolvedValue(authUserStub()),

  findAll: jest.fn<() => Promise<AuthUser[]>>().mockResolvedValue([authUserStub()]),

  findOne: jest.fn<() => Promise<AuthUser>>().mockResolvedValue(authUserStub()),

  update: jest.fn<() => Promise<AuthUser>>().mockResolvedValue(authUserStub()),

  remove: jest.fn<() => Promise<AuthUser>>().mockResolvedValue(authUserStub()),
  // Auth Methods

  registerUser: jest.fn<() => Promise<AuthUser>>().mockResolvedValue(authUserStub()),

  confirmPhoneNumber: jest.fn<() => Promise<boolean>>().mockResolvedValue(true),
  confirmOtpForForgot: jest.fn<() => Promise<boolean>>().mockResolvedValue(true),
  changeUserPassword: jest.fn<() => Promise<AuthUser>>().mockResolvedValue(authUserStub()),
  refreshUserRefreshToken: jest.fn<() => Promise<string>>().mockResolvedValue(authUserStub().refreshToken),

  askingForOtpCode: jest.fn<() => Promise<boolean>>().mockResolvedValue(true),

  loginUser: jest.fn<() => Promise<LoginResponse>>().mockResolvedValue(LoginResponseStub()),
});
