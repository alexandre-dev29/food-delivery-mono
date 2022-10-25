import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesService } from '../profiles.service';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';

describe('ProfilesService', () => {
  let service: ProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilesService, DataAccessPrismaService],
    }).compile();

    service = module.get<ProfilesService>(ProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
