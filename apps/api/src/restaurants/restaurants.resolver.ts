import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestaurantsService } from './restaurants.service';
import {
  CreateOneRestaurantsArgs,
  DeleteOneRestaurantsArgs,
  FindFirstRestaurantsArgs,
  FindManyRestaurantsArgs,
  Restaurants,
  UpdateOneRestaurantsArgs,
} from '@food-delivery-mono/data-access';

@Resolver(() => Restaurants)
export class RestaurantsResolver {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Mutation(() => Restaurants)
  createRestaurant(
    @Args('createRestaurantInput', { type: () => CreateOneRestaurantsArgs })
    createRestaurantInput: CreateOneRestaurantsArgs
  ) {
    return this.restaurantsService.create(createRestaurantInput);
  }

  @Query(() => [Restaurants], { name: 'restaurants' })
  findAll(@Args('findAllArgs', { type: () => FindManyRestaurantsArgs }) findAllArgument: FindManyRestaurantsArgs) {
    return this.restaurantsService.findAll(findAllArgument);
  }

  @Query(() => Restaurants, { name: 'restaurant' })
  findOne(@Args('findOneArgs', { type: () => FindFirstRestaurantsArgs }) findFirstArgs: FindFirstRestaurantsArgs) {
    return this.restaurantsService.findOne(findFirstArgs);
  }

  @Mutation(() => Restaurants)
  updateRestaurant(
    @Args('updateRestaurantInput', { type: () => UpdateOneRestaurantsArgs })
    updateRestaurantInput: UpdateOneRestaurantsArgs
  ) {
    return this.restaurantsService.update(updateRestaurantInput);
  }

  @Mutation(() => Restaurants)
  removeRestaurant(
    @Args('deleteArgument', { type: () => DeleteOneRestaurantsArgs }) deleteArgs: DeleteOneRestaurantsArgs
  ) {
    return this.restaurantsService.remove(deleteArgs);
  }
}
