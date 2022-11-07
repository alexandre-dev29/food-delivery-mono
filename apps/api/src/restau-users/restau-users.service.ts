import { Injectable } from '@nestjs/common';
import {
  DataAccessPrismaService,
  DeleteOneRestauUsersArgs,
  FindFirstRestauUsersArgs,
  FindManyRestauUsersArgs,
  Role,
  UpdateOneRestauUsersArgs,
} from '@food-delivery-mono/data-access';
import { LoginResponse } from '@food-delivery-mono/shared-types';
import { GraphQLError } from 'graphql/error';
import * as bcrypt from 'bcrypt';
import { UtilityService } from '@food-delivery-mono/utilities';

@Injectable()
export class RestauUsersService {
  constructor(private prismaService: DataAccessPrismaService, private utilityService: UtilityService) {}

  async create(userName: string, password: string, userFullName: string, role: Role, restaurantId: string) {
    const userFounded = await this.prismaService.restauUsers.findFirst({
      where: { userName },
    });

    if (userFounded) {
      return new GraphQLError('This user already exist in the system please select another name');
    }

    const encryptedPassword = await bcrypt.hash(password, 10).then((value) => value);

    return this.prismaService.restauUsers.create({
      data: {
        role: role,
        userName: userName,
        userFullName: userFullName,
        restauId: restaurantId,
        password: encryptedPassword,
      },
    });
  }

  findAll(findManyRestaurantsArgs: FindManyRestauUsersArgs) {
    return this.prismaService.restauUsers.findMany(findManyRestaurantsArgs);
  }

  findOne(restauUsersArgs: FindFirstRestauUsersArgs) {
    return this.prismaService.restauUsers.findFirst(restauUsersArgs);
  }

  update(restauUsersArgs: UpdateOneRestauUsersArgs) {
    return this.prismaService.restauUsers.update(restauUsersArgs);
  }

  remove(deleteOneRestauUsersArgs: DeleteOneRestauUsersArgs) {
    return this.prismaService.restauUsers.delete(deleteOneRestauUsersArgs);
  }

  async loginRestauUser(userName: string, password: string) {
    const user = await this.prismaService.restauUsers.findFirst({
      where: { userName: userName },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { refresh_token, access_token } = await this.utilityService.getTokensForRestauUsers({
        id: user.idRestauUser,
        userId: user.idRestauUser,
        restaurantId: user.restauId,
        userName: user.userName,
        roles: user.role as Role,
        isRestaurant: true,
        isSuperAdmin: false,
      });
      await this.prismaService.restauUsers.update({
        data: {
          refreshToken: refresh_token,
        },
        where: {
          idRestauUser: user.idRestauUser,
        },
      });

      return {
        access_token,
        refresh_token,
        user: {
          userId: user.idRestauUser,
          username: user.userName,
          userFullName: user.userFullName,
        },
      } as LoginResponse;
    } else {
      return new GraphQLError('The userName or password is invalid please try again');
    }
  }

  async changeUserPassword(userName: string, newPassword: string): Promise<boolean | any> {
    const foundedUser = await this.prismaService.restauUsers.findFirst({
      where: { userName: userName },
    });

    if (!foundedUser) return new GraphQLError('incorrect user name provided');

    const encryptedPassword = await bcrypt.hash(newPassword, 10).then((value) => value);

    await this.prismaService.restauUsers.update({
      where: { idRestauUser: foundedUser.idRestauUser },
      data: { password: encryptedPassword },
    });
    return true;
  }
}
