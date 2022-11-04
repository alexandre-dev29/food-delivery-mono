import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsResolver } from '../restaurants.resolver';
import { RestaurantsService } from '../restaurants.service';
import {
  CreateOneRestaurantsArgs,
  DataAccessPrismaService,
  DeleteOneRestaurantsArgs,
  FindFirstRestaurantsArgs,
  FindManyRestaurantsArgs,
  Restaurants,
  UpdateOneRestaurantsArgs,
} from '@food-delivery-mono/data-access';
import { RestaurantsServiceMock } from '../__mock__/restaurants.service';
import { jest } from '@jest/globals';
import { restaurantsStub } from './stubs/restaurants.stub';

describe('RestaurantsResolver', () => {
  let restaurantResolver: RestaurantsResolver;
  let restaurantService: RestaurantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RestaurantsResolver,
        {
          provide: RestaurantsService,
          useValue: RestaurantsServiceMock,
        },
        DataAccessPrismaService,
      ],
    }).compile();

    restaurantResolver = module.get<RestaurantsResolver>(RestaurantsResolver);
    restaurantService = module.get<RestaurantsService>(RestaurantsService);
    jest.clearAllMocks();
  });

  it('should be defined (RestaurantResolver)', () => {
    expect(restaurantResolver).toBeDefined();
  });
  it('should be defined (RestaurantService)', () => {
    expect(restaurantService).toBeDefined();
  });

  describe('Get All Restaurants', () => {
    let restaurants: Restaurants[];
    const argumentFind: FindManyRestaurantsArgs = {
      where: {},
    };

    beforeEach(async () => {
      restaurants = await restaurantResolver.findAll(argumentFind);
    });

    test('then it should call restaurantService', async () => {
      expect(jest.spyOn(restaurantService, 'findAll')).toHaveBeenCalled();
    });

    test('then it should call restaurantService', async () => {
      expect(jest.spyOn(restaurantService, 'findAll')).toHaveBeenCalledWith(argumentFind);
    });

    test('then is should return all restaurants', () => {
      expect(restaurants).toEqual([restaurantsStub()]);
    });
  });
  describe('Get One Restaurants', () => {
    let restaurant: Restaurants;
    const argumentFind: FindFirstRestaurantsArgs = {
      where: {},
    };

    beforeEach(async () => {
      restaurant = await restaurantResolver.findOne(argumentFind);
    });

    test('then it should call restaurantService', async () => {
      expect(jest.spyOn(restaurantService, 'findOne')).toHaveBeenCalled();
    });

    test('then it should call restaurantService', async () => {
      expect(jest.spyOn(restaurantService, 'findOne')).toHaveBeenCalledWith(argumentFind);
    });

    test('then is should return all restaurants', () => {
      expect(restaurant).toEqual(restaurantsStub());
    });
  });
  describe('Create One Restaurants', () => {
    let restaurant: Restaurants;
    const argumentCreate: CreateOneRestaurantsArgs = {
      data: {
        createdAt: restaurantsStub().createdAt,
        updatedAt: restaurantsStub().updatedAt,
        restauName: restaurantsStub().restauName,
        restauDescription: restaurantsStub().restauDescription,
        creationDate: restaurantsStub().creationDate,
        restauMainImage: {},
      },
    };

    beforeEach(async () => {
      restaurant = await restaurantResolver.createRestaurant(argumentCreate);
    });

    test('then it should call restaurantService', async () => {
      expect(jest.spyOn(restaurantService, 'create')).toHaveBeenCalled();
    });

    test('then it should call restaurantService', async () => {
      expect(jest.spyOn(restaurantService, 'create')).toHaveBeenCalledWith(argumentCreate);
    });

    test('then is should return all restaurants', () => {
      expect(restaurant).toEqual(restaurantsStub());
    });
  });
  describe('Update One Restaurants', () => {
    let restaurant: Restaurants;
    const argumentUpdate: UpdateOneRestaurantsArgs = {
      data: {},
      where: {},
    };

    beforeEach(async () => {
      restaurant = await restaurantResolver.updateRestaurant(argumentUpdate);
    });

    test('then it should call restaurantService', async () => {
      expect(jest.spyOn(restaurantService, 'update')).toHaveBeenCalled();
    });

    test('then it should call restaurantService', async () => {
      expect(jest.spyOn(restaurantService, 'update')).toHaveBeenCalledWith(argumentUpdate);
    });

    test('then is should return all restaurants', () => {
      expect(restaurant).toEqual(restaurantsStub());
    });
  });
  describe('Delete One Restaurants', () => {
    let restaurant: Restaurants;
    const argumentDelete: DeleteOneRestaurantsArgs = {
      where: {},
    };

    beforeEach(async () => {
      restaurant = await restaurantResolver.removeRestaurant(argumentDelete);
    });

    test('then it should call restaurantService', async () => {
      expect(jest.spyOn(restaurantService, 'remove')).toHaveBeenCalled();
    });

    test('then it should call restaurantService with argument', async () => {
      expect(jest.spyOn(restaurantService, 'remove')).toHaveBeenCalledWith(argumentDelete);
    });

    test('then is should return all restaurants', () => {
      expect(restaurant).toEqual(restaurantsStub());
    });
  });
});
