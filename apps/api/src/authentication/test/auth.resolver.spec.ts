import { Test } from '@nestjs/testing';

import { authUserStub } from './stubs/auth-user.stub';
import { LoginResponseStub } from './stubs/login-response.stub';
import { jest } from '@jest/globals';
import { rolesStub } from '../../roles/test/stubs/roles.stub';
import { GraphQLError } from 'graphql/error';
import { AuthenticationResolver } from '../authentication.resolver';
import { AuthenticationService } from '../authentication.service';
import { AuthUser, CreateOneAuthUserArgs, UpdateOneAuthUserArgs } from '@food-delivery-mono/data-access';

jest.mock('../authentication.service.ts');

describe('AuthResolver', () => {
  let authResolver: AuthenticationResolver;
  let authService: AuthenticationService;
  const prismaMocking = {
    authUser: {
      findMany: () => Promise.resolve([authUserStub()]),
      findFirst: () => Promise.resolve(authUserStub()),
      update: () => Promise.resolve(authUserStub()),
      delete: () => Promise.resolve(authUserStub()),
    },
    role: {
      findMany: () => Promise.resolve([rolesStub()]),
      findFirst: () => Promise.resolve(rolesStub()),
      update: () => Promise.resolve(rolesStub()),
      delete: () => Promise.resolve(rolesStub()),
    },
  };
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [AuthenticationResolver],
      providers: [AuthenticationService],
    }).compile();

    authResolver = moduleRef.get<AuthenticationResolver>(AuthenticationResolver);
    authService = moduleRef.get<AuthenticationService>(AuthenticationService);
    jest.clearAllMocks();
  });

  describe('Get All auth users', () => {
    describe('when getUser is called', () => {
      let user: AuthUser[];

      beforeEach(async () => {
        user = await authResolver.findAll();
      });

      test('then it should call usersService', async () => {
        expect(jest.spyOn(authService, 'findAll')).toHaveBeenCalled();
      });

      test('then is should return auth users', () => {
        expect(user).toEqual([authUserStub()]);
      });
    });
  });
  describe('Get One auth users', () => {
    describe('when getUser is called', () => {
      let user: AuthUser;

      beforeEach(async () => {
        user = await authResolver.findOne(authUserStub().id);
      });

      test('then it should call usersService', async () => {
        expect(jest.spyOn(authService, 'findOne')).toHaveBeenCalled();
      });

      test(`then it should call usersService with ${authUserStub().id} as parameter`, async () => {
        expect(jest.spyOn(authService, 'findOne')).toHaveBeenCalledWith(authUserStub().id);
      });

      test('then is should return auth users', () => {
        expect(user).toEqual(authUserStub());
      });
    });
  });
  describe('createUser', () => {
    describe('when createUser is called', () => {
      let user: AuthUser;
      let createUserDto: CreateOneAuthUserArgs;

      beforeEach(async () => {
        createUserDto = {
          data: {
            phoneNumber: authUserStub().phoneNumber,
            username: authUserStub().username,
            isPhoneConfirmed: authUserStub().isPhoneConfirmed,
            userId: authUserStub().userId,
            password: authUserStub().password,
          },
        };
        user = await authResolver.createAuth(createUserDto);
      });

      test('then it should call usersService', () => {
        expect(jest.spyOn(authService, 'create')).toHaveBeenCalledWith(createUserDto);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(authUserStub());
      });
    });
  });
  describe('Update a auth user', () => {
    describe('when update is called', () => {
      let user: AuthUser;
      let updateUserDto: UpdateOneAuthUserArgs;

      beforeEach(async () => {
        updateUserDto = {
          data: {
            username: { set: 'mwenze' },
          },
          where: {
            id: '1',
          },
        };
        user = await authResolver.updateAuth(updateUserDto);
      });

      test('then it should call usersService', () => {
        expect(jest.spyOn(authService, 'update')).toHaveBeenCalledWith(updateUserDto);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(authUserStub());
      });
    });
  });
  describe('Change the user password', () => {
    describe('when changePassword  is called', () => {
      let user: AuthUser | GraphQLError;

      beforeEach(async () => {
        user = await authResolver.changePassword(authUserStub().phoneNumber, authUserStub().password);
      });

      test('then it should call usersService', () => {
        expect(jest.spyOn(authService, 'changeUserPassword')).toHaveBeenCalledWith(
          authUserStub().phoneNumber,
          authUserStub().password
        );
      });

      test('then it should return a user', () => {
        expect(user).toEqual(authUserStub());
      });
    });
  });
  describe('Register a new user', () => {
    describe('when register is called', () => {
      let user: AuthUser;
      let registerDto;

      beforeEach(async () => {
        registerDto = {
          password: authUserStub().password,
          username: authUserStub().username,
          phoneNumber: authUserStub().phoneNumber,
        };
        user = await authResolver.registerUser(registerDto);
      });

      test('then it should call usersService', () => {
        expect(jest.spyOn(authService, 'registerUser')).toHaveBeenCalledWith(registerDto);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(authUserStub());
      });
    });
  });
  describe('Login a  user', () => {
    describe('when login is called', () => {
      let user: AuthUser;

      beforeEach(async () => {
        user = await authResolver.loginUser(authUserStub().phoneNumber, authUserStub().password);
      });

      test('then it should call usersService', () => {
        expect(jest.spyOn(authService, 'loginUser')).toHaveBeenCalledWith(
          authUserStub().phoneNumber,
          authUserStub().password
        );
      });

      test('then it should return a user', () => {
        expect(user).toEqual(LoginResponseStub());
      });
    });
  });
  describe('Confirm a  user phone Number', () => {
    describe('when ConfirmPhoneNumber is called', () => {
      let user: boolean;

      beforeEach(async () => {
        user = await authResolver.confirmPhoneNumber(authUserStub().phoneNumber, '1234');
      });

      test('then it should call usersService', () => {
        expect(jest.spyOn(authService, 'confirmPhoneNumber')).toHaveBeenCalledWith(authUserStub().phoneNumber, '1234');
      });

      test('then it should return a user', () => {
        expect(user).toEqual(true);
      });
    });
  });
  describe('refresh a  user token', () => {
    describe('when refreshToken is called', () => {
      let user: GraphQLError | string;

      beforeEach(async () => {
        user = await authResolver.refreshToken(authUserStub().refreshToken);
      });

      test('then it should call usersService', () => {
        expect(jest.spyOn(authService, 'refreshUserRefreshToken')).toHaveBeenCalledWith(authUserStub().refreshToken);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(authUserStub().refreshToken);
      });
    });
  });
  describe('Asking for otp code', () => {
    describe('when askingForOtp is called', () => {
      let response: boolean;

      beforeEach(async () => {
        response = await authResolver.askingForOtpCode(authUserStub().phoneNumber);
      });

      test('then it should call usersService', () => {
        expect(jest.spyOn(authService, 'askingForOtpCode')).toHaveBeenCalledWith(authUserStub().phoneNumber);
      });

      test('then it should return a user', () => {
        expect(response).toEqual(true);
      });
    });
  });
  describe('confirm Otp For Forgot', () => {
    describe('when confirmOtpForForgot is called', () => {
      let response: boolean | GraphQLError;

      beforeEach(async () => {
        response = await authResolver.confirmOtpForForgot(authUserStub().phoneNumber, '1234');
      });

      test('then it should call usersService', () => {
        expect(jest.spyOn(authService, 'confirmOtpForForgot')).toHaveBeenCalledWith(authUserStub().phoneNumber, '1234');
      });

      test('then it should return a user', () => {
        expect(response).toEqual(true);
      });
    });
  });
});
