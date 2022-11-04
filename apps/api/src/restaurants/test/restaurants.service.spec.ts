import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsService } from '../restaurants.service';
import { jest } from '@jest/globals';
import {
  DataAccessPrismaService,
  DeleteOneRestaurantsArgs,
  FindFirstRestaurantsArgs,
  FindManyRestaurantsArgs,
  Restaurants,
  UpdateOneRestaurantsArgs,
} from '@food-delivery-mono/data-access';
import { restaurantsStub } from './stubs/restaurants.stub';
import { RestaurantsResolver } from '../restaurants.resolver';
import { RestaurantsServiceMock } from '../__mock__/restaurants.service';

describe('RestaurantsService', () => {
  let service: RestaurantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: RestaurantsService, useValue: RestaurantsServiceMock },
        DataAccessPrismaService,
        RestaurantsResolver,
      ],
    }).compile();

    service = module.get<RestaurantsService>(RestaurantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Get All Restaurants', () => {
    let restaurants: Restaurants[];
    const findAllArguments: FindManyRestaurantsArgs = {
      where: {},
    };
    beforeEach(async () => {
      restaurants = await service.findAll(findAllArguments);
    });

    test('then it should call restaurant service', async () => {
      expect(jest.spyOn(service, 'findAll')).toHaveBeenCalled();
    });
    test('then it should call find all with arguments', async () => {
      expect(jest.spyOn(service, 'findAll')).toHaveBeenCalledWith(findAllArguments);
    });
    test('then it should return restaurants', async () => {
      expect(restaurants).toEqual([restaurantsStub()]);
    });
  });
  describe('Get One Restaurants', () => {
    let restaurant: Restaurants;
    const findOneArgs: FindFirstRestaurantsArgs = {
      where: {},
    };
    beforeEach(async () => {
      restaurant = await service.findOne(findOneArgs);
    });

    test('then it should call restaurant service', async () => {
      expect(jest.spyOn(service, 'findOne')).toHaveBeenCalled();
    });
    test('then it should call find all with arguments', async () => {
      expect(jest.spyOn(service, 'findOne')).toHaveBeenCalledWith(findOneArgs);
    });
    test('then it should return restaurants', async () => {
      expect(restaurant).toEqual(restaurantsStub());
    });
  });
  describe('Update Restaurants', () => {
    let restaurant: Restaurants;
    const updateOneRestaurantArgs: UpdateOneRestaurantsArgs = {
      where: {},
      data: {},
    };
    beforeEach(async () => {
      restaurant = await service.update(updateOneRestaurantArgs);
    });

    test('then it should call restaurant service', async () => {
      expect(jest.spyOn(service, 'update')).toHaveBeenCalled();
    });
    test('then it should call update with arguments', async () => {
      expect(jest.spyOn(service, 'update')).toHaveBeenCalledWith(updateOneRestaurantArgs);
    });
    test('then it should return restaurants', async () => {
      expect(restaurant).toEqual(restaurantsStub());
    });
  });
  describe('Delete Restaurants', () => {
    let restaurant: Restaurants;
    const deleteOneRestaurantArgs: DeleteOneRestaurantsArgs = {
      where: {},
    };
    beforeEach(async () => {
      restaurant = await service.remove(deleteOneRestaurantArgs);
    });

    test('then it should call restaurant service', async () => {
      expect(jest.spyOn(service, 'remove')).toHaveBeenCalled();
    });
    test('then it should call delete with arguments', async () => {
      expect(jest.spyOn(service, 'remove')).toHaveBeenCalledWith(deleteOneRestaurantArgs);
    });
    test('then it should return the  restaurants deleted', async () => {
      expect(restaurant).toEqual(restaurantsStub());
    });
  });
});
