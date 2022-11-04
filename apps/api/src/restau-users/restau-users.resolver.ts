import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestauUsersService } from './restau-users.service';
import {
  DeleteOneRestauUsersArgs,
  FindFirstRestauUsersArgs,
  FindManyRestauUsersArgs,
  RestauUsers,
  UpdateOneRestauUsersArgs,
} from '@food-delivery-mono/data-access';
import { CurrentRestauUser } from '../../../../libs/app-security/src/lib/restauUser.decorator';

@Resolver(() => RestauUsers)
export class RestauUsersResolver {
  constructor(private readonly restauUsersService: RestauUsersService) {}

  @Mutation(() => RestauUsers)
  createRestauUser(
    @Args('userName', { type: () => String }) userName: string,
    @Args('password', { type: () => String }) password: string,
    @Args('userFullName', { type: () => String }) userFullName: string,
    @Args('roleId', { type: () => String }) roleId: string,
    @CurrentRestauUser() restauUser
  ) {
    return this.restauUsersService.create(userName, password, userFullName, roleId, restauUser.restauId);
  }

  @Query(() => [RestauUsers], { name: 'FindAllRestauUsers' })
  findAll(
    @Args('findAllArgs', { type: () => FindManyRestauUsersArgs }) findManyRestaurantsArgs: FindManyRestauUsersArgs
  ) {
    return this.restauUsersService.findAll(findManyRestaurantsArgs);
  }

  @Query(() => RestauUsers, { name: 'FindOneRestauUser' })
  findOne(@Args('findOneArgs', { type: () => FindFirstRestauUsersArgs }) findOneArgs: FindFirstRestauUsersArgs) {
    return this.restauUsersService.findOne(findOneArgs);
  }

  @Mutation(() => RestauUsers)
  updateRestauUser(@Args('updateRestauUserInput') updateRestauUserInput: UpdateOneRestauUsersArgs) {
    return this.restauUsersService.update(updateRestauUserInput);
  }

  @Mutation(() => RestauUsers)
  loginRestauUser(
    @Args('userName', { type: () => String }) userName: string,
    @Args('password', { type: () => String }) password: string
  ) {
    return this.restauUsersService.loginRestauUser(userName, password);
  }

  @Mutation(() => RestauUsers)
  changeRestauUserPassword(
    @Args('userName', { type: () => String }) userName: string,
    @Args('newPassword', { type: () => String }) password: string
  ) {
    return this.restauUsersService.changeUserPassword(userName, password);
  }

  @Mutation(() => RestauUsers)
  removeRestauUser(
    @Args('deleteArgs', { type: () => DeleteOneRestauUsersArgs }) restauUsersArgs: DeleteOneRestauUsersArgs
  ) {
    return this.restauUsersService.remove(restauUsersArgs);
  }
}
