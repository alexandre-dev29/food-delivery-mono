import { jest } from '@jest/globals';
import { profileStub } from '../test/stubs/profile.stub';
import { Profile } from '@food-delivery-mono/data-access';

export const ProfilesService = jest.fn().mockReturnValue({
  create: jest.fn<() => Promise<Profile>>().mockResolvedValue(profileStub()),

  findAll: jest.fn<() => Promise<Profile[]>>().mockResolvedValue([profileStub()]),

  findOne: jest.fn<() => Promise<Profile>>().mockResolvedValue(profileStub()),

  update: jest.fn<() => Promise<Profile>>().mockResolvedValue(profileStub()),

  remove: jest.fn<() => Promise<Profile>>().mockResolvedValue(profileStub()),
});
