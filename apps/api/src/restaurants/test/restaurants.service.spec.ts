import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsService } from '../restaurants.service';
import { jest } from '@jest/globals';
import { DataAccessPrismaService, FindManyRestaurantsArgs, Restaurants } from '@food-delivery-mono/data-access';
import { restaurantsStub } from './stubs/restaurants.stub';
import { RestaurantsResolver } from '../restaurants.resolver';

jest.mock('../restaurants.service.ts');

describe('RestaurantsService', () => {
  let service: RestaurantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantsService, DataAccessPrismaService, RestaurantsResolver],
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
});
