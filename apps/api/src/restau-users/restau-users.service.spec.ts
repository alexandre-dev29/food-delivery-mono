import { Test, TestingModule } from '@nestjs/testing';
import { RestauUsersService } from './restau-users.service';

describe('RestauUsersService', () => {
  let service: RestauUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestauUsersService],
    }).compile();

    service = module.get<RestauUsersService>(RestauUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
