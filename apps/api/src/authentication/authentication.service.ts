import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql/error';
import { JwtService } from '@nestjs/jwt';
import { TwilioOperationService } from '@food-delivery-mono/twilio-operations';
import { UtilityService } from '@food-delivery-mono/utilities';
import { RolesService } from '../roles/roles.service';
import * as bcrypt from 'bcrypt';

import {
  AuthUser,
  CreateOneAuthUserArgs,
  DataAccessPrismaService,
  UpdateOneAuthUserArgs,
} from '@food-delivery-mono/data-access';
import { LoginResponse } from '@food-delivery-mono/shared-types';

@Injectable()
export class AuthenticationService {
  constructor(
    private authPrismaService: DataAccessPrismaService,
    private jwtService: JwtService,
    private twilioService: TwilioOperationService,
    private utilityService: UtilityService,
    private roleService: RolesService
  ) {}

  create(createAuthInput: CreateOneAuthUserArgs): Promise<AuthUser> {
    return this.authPrismaService.authUser.create(createAuthInput);
  }

  async findAll(): Promise<AuthUser[]> {
    return (
      await this.authPrismaService.authUser.findMany({
        include: { Role: true },
      })
    ).map((element) => ({ ...element, password: '' }));
  }

  findOne(id: string): Promise<AuthUser> {
    return this.authPrismaService.authUser.findFirst({ where: { id: id } });
  }

  update(updateAuthInput: UpdateOneAuthUserArgs) {
    return this.authPrismaService.authUser.update(updateAuthInput);
  }

  remove(id: string) {
    return this.authPrismaService.authUser.delete({ where: { id: id } });
  }

  // Auth Methods

  async registerUser({ phoneNumber, password, username }: Partial<AuthUser>): Promise<AuthUser | any> {
    const userFounded = await this.authPrismaService.authUser.findFirst({
      where: { phoneNumber: phoneNumber },
    });

    if (userFounded) {
      return new GraphQLError('This user already exist in the system');
    }

    const roleRecup = await this.roleService.findOneOrCreate(
      {
        where: { userRole: { equals: 'User' } },
      },
      'User'
    );

    const encryptedPassword = await bcrypt.hash(password, 10).then((value) => value);

    try {
      const responseTwilio = await this.twilioService.SendOtpVerificationCode(phoneNumber);

      if (responseTwilio.status == 'pending') {
        const userCreated = await this.authPrismaService.users.create({ data: { userName: username } });
        const responseInsert = await this.authPrismaService.authUser.create({
          data: {
            phoneNumber: phoneNumber,
            roleRoleId: roleRecup.roleId,
            password: encryptedPassword,
            username: username,
            userId: userCreated.idUser,
          },
        });

        return { ...responseInsert, password: '' };
      } else {
        return new GraphQLError('There was an error while validating your phone number, please try again later');
      }
    } catch (e) {
      return new GraphQLError('An Error occur while registering please try again later');
    }
  }

  async confirmPhoneNumber(phoneNumber: string, otpCode: string): Promise<boolean | any> {
    const foundedUser = await this.authPrismaService.authUser.findFirst({
      where: { phoneNumber: phoneNumber },
    });
    if (foundedUser) {
      const confirmation = await this.twilioService.checkTheVerificationCode(phoneNumber, otpCode);

      if (!confirmation.valid || confirmation.status !== 'approved') {
        throw new GraphQLError('The code is not correct');
      } else {
        await this.authPrismaService.authUser.update({
          where: { id: foundedUser.id },
          data: { isPhoneConfirmed: true },
        });
        return true;
      }
    } else {
      return new GraphQLError("This phone number doesn't exist ");
    }
  }

  async askingForOtpCode(phoneNumber: string): Promise<boolean | any> {
    const foundedUser = await this.authPrismaService.authUser.findFirst({
      where: { phoneNumber: phoneNumber },
    });

    if (foundedUser) {
      const responseTwilio = await this.twilioService.SendOtpVerificationCode(phoneNumber);
      if (responseTwilio.status == 'pending') {
        return true;
      } else {
        return new GraphQLError('There was an error while validating your phone number, please try again later');
      }
    } else {
      return new GraphQLError("This phone number doesn't exist ");
    }
  }

  async loginUser(phoneNumber: string, password: string): Promise<LoginResponse | any> {
    const user = await this.authPrismaService.authUser.findFirst({
      where: { phoneNumber: phoneNumber },
      include: { Role: true },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { refresh_token, access_token } = await this.utilityService.getTokens(
        user.id,
        user.userId,
        phoneNumber,
        user.Role.userRole
      );
      await this.authPrismaService.authUser.update({
        data: {
          refreshToken: refresh_token,
        },
        where: {
          id: user.id,
        },
      });

      return {
        access_token,
        refresh_token,
        user: {
          userId: user.userId,
          phoneNumber: user.phoneNumber,
        },
      } as LoginResponse;
    } else {
      return new GraphQLError('The phone number or password is invalid please try again');
    }
  }

  async confirmOtpForForgot(phoneNumber: string, otpCode: string) {
    const foundedUser = await this.authPrismaService.authUser.findFirst({
      where: { phoneNumber: phoneNumber },
    });

    if (foundedUser) {
      const confirmation = await this.twilioService.checkTheVerificationCode(phoneNumber, otpCode);

      if (!confirmation.valid || confirmation.status !== 'approved') {
        throw new GraphQLError('The code is not correct');
      } else {
        return true;
      }
    } else {
      return new GraphQLError("This phone number doesn't exist ");
    }
  }

  async changeUserPassword(phoneNumber: string, newPassword: string): Promise<boolean | any> {
    const foundedUser = await this.authPrismaService.authUser.findFirst({
      where: { phoneNumber: phoneNumber },
    });

    if (!foundedUser) return new GraphQLError('incorrect phone number provided');

    const encryptedPassword = await bcrypt.hash(newPassword, 10).then((value) => value);

    await this.authPrismaService.authUser.update({
      where: { id: foundedUser.id },
      data: { password: encryptedPassword },
    });
    return true;
  }

  async refreshUserRefreshToken(refreshToken: string) {
    const userByToken = await this.authPrismaService.authUser.findFirst({
      where: { refreshToken },
      include: { Role: true },
    });
    if (!userByToken) return new GraphQLError('Impossible to refresh the token please login again');

    const { refresh_token } = await this.utilityService.getTokens(
      userByToken.id,
      userByToken.userId,
      userByToken.phoneNumber,
      userByToken.Role.userRole
    );
    this.authPrismaService.authUser.update({
      where: { id: userByToken.id },
      data: {
        refreshToken: refresh_token,
      },
    });

    return refresh_token;
  }
}
