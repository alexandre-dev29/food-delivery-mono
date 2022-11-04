import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestauUsersService } from './restau-users.service';
import { RestauUser } from './entities/restau-user.entity';
import { CreateRestauUserInput } from './dto/create-restau-user.input';
import { UpdateRestauUserInput } from './dto/update-restau-user.input';

@Resolver(() => RestauUser)
export class RestauUsersResolver {
  constructor(private readonly restauUsersService: RestauUsersService) {}

  @Mutation(() => RestauUser)
  createRestauUser(@Args('createRestauUserInput') createRestauUserInput: CreateRestauUserInput) {
    return this.restauUsersService.create(createRestauUserInput);
  }

  @Query(() => [RestauUser], { name: 'restauUsers' })
  findAll() {
    return this.restauUsersService.findAll();
  }

  @Query(() => RestauUser, { name: 'restauUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.restauUsersService.findOne(id);
  }

  @Mutation(() => RestauUser)
  updateRestauUser(@Args('updateRestauUserInput') updateRestauUserInput: UpdateRestauUserInput) {
    return this.restauUsersService.update(updateRestauUserInput.id, updateRestauUserInput);
  }

  @Mutation(() => RestauUser)
  removeRestauUser(@Args('id', { type: () => Int }) id: number) {
    return this.restauUsersService.remove(id);
  }
}
