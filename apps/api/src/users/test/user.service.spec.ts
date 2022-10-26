import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, DataAccessPrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});