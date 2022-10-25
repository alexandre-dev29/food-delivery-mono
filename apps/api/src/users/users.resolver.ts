import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateOneUsersArgs, UpdateOneUsersArgs, Users } from '@food-delivery-mono/data-access';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => Users)
  createUser(@Args('createUserInput') createUserInput: CreateOneUsersArgs) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [Users], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => Users, { name: 'user' })
  findOne(@Args('userId', { type: () => String }) userId: string) {
    return this.userService.findOne(userId);
  }

  @Mutation(() => Users)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateOneUsersArgs) {
    return this.userService.update(updateUserInput);
  }

  @Mutation(() => Users)
  removeUser(@Args('userId', { type: () => String }) userId: string) {
    return this.userService.remove(userId);
  }
}
