import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsResolver } from '../restaurants.resolver';
import { RestaurantsService } from '../restaurants.service';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';

describe('RestaurantsResolver', () => {
  let resolver: RestaurantsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantsResolver, RestaurantsService, DataAccessPrismaService],
    }).compile();

    resolver = module.get<RestaurantsResolver>(RestaurantsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
