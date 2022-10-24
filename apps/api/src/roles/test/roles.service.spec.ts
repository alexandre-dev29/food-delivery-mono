import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from '../roles.service';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';

describe('RolesService', () => {
  let service: RolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesService, DataAccessPrismaService],
    }).compile();

    service = module.get<RolesService>(RolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
