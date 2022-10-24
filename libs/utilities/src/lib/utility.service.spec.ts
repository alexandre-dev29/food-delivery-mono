import { Test } from '@nestjs/testing';
import { UtilityService } from './utility.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

describe('UtilityService', () => {
  let service: UtilityService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UtilityService, ConfigService, JwtService],
    }).compile();

    service = module.get(UtilityService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
