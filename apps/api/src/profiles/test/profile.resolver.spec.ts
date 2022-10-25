import { Test, TestingModule } from '@nestjs/testing';
import { jest } from '@jest/globals';
import { profileStub } from './stubs/profile.stub';
import { ProfilesService } from '../profiles.service';
import { ProfilesResolver } from '../profiles.resolver';
import { CreateOneProfileArgs, Profile } from '@food-delivery-mono/data-access';
import { FileService, UtilityService } from '@food-delivery-mono/utilities';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

jest.mock('../profiles.service.ts');

describe('ProfileResolver', () => {
  let profileResolver: ProfilesResolver;
  let profileService: ProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilesResolver],
      providers: [ProfilesService, UtilityService, ConfigService, JwtService, FileService],
    }).compile();

    profileResolver = module.get<ProfilesResolver>(ProfilesResolver);
    profileService = module.get<ProfilesService>(ProfilesService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(profileResolver).toBeDefined();
  });
  it('should be defined', () => {
    expect(profileService).toBeDefined();
  });

  describe('Get All Profiles ', () => {
    describe('when findAll is called', () => {
      let profiles: Profile[];

      beforeEach(async () => {
        profiles = await profileResolver.findAll();
      });

      test('then it should call profile service', async () => {
        expect(jest.spyOn(profileService, 'findAll')).toHaveBeenCalled();
      });

      test('then is should return auth users', () => {
        expect(profiles).toEqual([profileStub()]);
      });
    });
  });

  describe('Get One auth users', () => {
    describe('when getUser is called', () => {
      let profile: Profile;

      beforeEach(async () => {
        profile = await profileResolver.findOne(profileStub().profileId);
      });

      test('then it should call profile service', async () => {
        expect(jest.spyOn(profileService, 'findOne')).toHaveBeenCalled();
      });

      test(`then it should call profile service with ${profileStub().profileId} as parameter`, async () => {
        expect(jest.spyOn(profileService, 'findOne')).toHaveBeenCalledWith(profileStub().profileId);
      });

      test('then is should return auth users', () => {
        expect(profile).toEqual(profileStub());
      });
    });
  });

  describe('Create a profile', () => {
    describe('when createProfile is called', () => {
      let profile: Profile;
      let createProfileDto: CreateOneProfileArgs;

      beforeEach(async () => {
        createProfileDto = {
          data: {
            bio: profileStub().bio,
            createdAt: profileStub().createdAt,
            updatedAt: profileStub().updatedAt,
            placeOfBirth: profileStub().placeOfBirth,
            dateOfBirth: profileStub().dateOfBirth,
          },
        };
        profile = await profileResolver.createProfile(createProfileDto);
      });

      test('then it should call usersService', () => {
        expect(jest.spyOn(profileService, 'create')).toHaveBeenCalledWith(createProfileDto);
      });

      test('then it should return a user', () => {
        expect(profile).toEqual(profileStub());
      });
    });
  });
});
