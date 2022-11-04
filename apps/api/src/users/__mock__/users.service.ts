import { jest } from '@jest/globals';
import { usersStub } from '../test/stubs/users.stub';
import { Users } from '@food-delivery-mono/data-access';

export const UsersServiceMock = {
  create: jest.fn<() => Promise<Users>>().mockResolvedValue(usersStub()),

  findAll: jest.fn<() => Promise<Users[]>>().mockResolvedValue([usersStub()]),

  findOne: jest.fn<() => Promise<Users>>().mockResolvedValue(usersStub()),

  update: jest.fn<() => Promise<Users>>().mockResolvedValue(usersStub()),

  remove: jest.fn<() => Promise<Users>>().mockResolvedValue(usersStub()),
};
