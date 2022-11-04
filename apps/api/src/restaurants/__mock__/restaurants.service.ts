import { jest } from '@jest/globals';
import { restaurantsStub } from '../test/stubs/restaurants.stub';
import { Restaurants } from '@food-delivery-mono/data-access';

export const RestaurantsServiceMock = {
  create: jest.fn<() => Promise<Restaurants>>().mockResolvedValue(restaurantsStub()),

  findAll: jest.fn<() => Promise<Restaurants[]>>().mockResolvedValue([restaurantsStub()]),

  findOne: jest.fn<() => Promise<Restaurants>>().mockResolvedValue(restaurantsStub()),

  update: jest.fn<() => Promise<Restaurants>>().mockResolvedValue(restaurantsStub()),

  remove: jest.fn<() => Promise<Restaurants>>().mockResolvedValue(restaurantsStub()),
};
