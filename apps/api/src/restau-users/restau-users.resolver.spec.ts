import { Test, TestingModule } from '@nestjs/testing';
import { RestauUsersResolver } from './restau-users.resolver';
import { RestauUsersService } from './restau-users.service';

describe('RestauUsersResolver', () => {
  let resolver: RestauUsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestauUsersResolver, RestauUsersService],
    }).compile();

    resolver = module.get<RestauUsersResolver>(RestauUsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
