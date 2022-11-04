import { Injectable } from '@nestjs/common';
import {
  CreateOneRestaurantsArgs,
  DataAccessPrismaService,
  DeleteOneRestaurantsArgs,
  FindFirstRestaurantsArgs,
  FindManyRestaurantsArgs,
  Restaurants,
  UpdateOneRestaurantsArgs,
} from '@food-delivery-mono/data-access';

@Injectable()
export class RestaurantsService {
  constructor(private prismaService: DataAccessPrismaService) {}

  create(createRestaurantInput: CreateOneRestaurantsArgs): Promise<Restaurants> {
    return this.prismaService.restaurants.create(createRestaurantInput);
  }

  findAll(findAllRestaurantArgs: FindManyRestaurantsArgs): Promise<Restaurants[]> {
    return this.prismaService.restaurants.findMany(findAllRestaurantArgs);
  }

  findOne(findOneRestaurantArg: FindFirstRestaurantsArgs): Promise<Restaurants> {
    return this.prismaService.restaurants.findFirst(findOneRestaurantArg);
  }

  update(updateOneRestaurantArs: UpdateOneRestaurantsArgs): Promise<Restaurants> {
    return this.prismaService.restaurants.update(updateOneRestaurantArs);
  }

  remove(deleteOneRestaurantArgs: DeleteOneRestaurantsArgs): Promise<Restaurants> {
    return this.prismaService.restaurants.delete(deleteOneRestaurantArgs);
  }
}
