import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateOneUsersArgs, UpdateOneUsersArgs, Users } from '@food-delivery-mono/data-access';
import { AccessGuard, UseAbility } from 'nest-casl';
import { MainAuthGuardGuard, SecurityActions } from '@food-delivery-mono/app-security';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => Users)
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(SecurityActions.create, Users)
  createUser(@Args('createUserInput') createUserInput: CreateOneUsersArgs) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [Users], { name: 'users' })
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(SecurityActions.readAll, Users)
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => Users, { name: 'user' })
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(SecurityActions.readOne, Users)
  findOne(@Args('userId', { type: () => String }) userId: string) {
    return this.userService.findOne(userId);
  }

  @Mutation(() => Users)
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(SecurityActions.update, Users)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateOneUsersArgs) {
    return this.userService.update(updateUserInput);
  }

  @Mutation(() => Users)
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(SecurityActions.delete, Users)
  removeUser(@Args('userId', { type: () => String }) userId: string) {
    return this.userService.remove(userId);
  }
}
