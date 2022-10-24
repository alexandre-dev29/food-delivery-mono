import { rolesStub } from '../test/stubs/roles.stub';
import { jest } from '@jest/globals';
import { Role } from '@food-delivery-mono/data-access';

export const RolesService = jest.fn().mockReturnValue({
  create: jest.fn<() => Promise<Role>>().mockResolvedValue(rolesStub()),

  findAll: jest.fn<() => Promise<Role[]>>().mockResolvedValue([rolesStub()]),

  findOne: jest.fn<() => Promise<Role>>().mockResolvedValue(rolesStub()),
  findOneById: jest.fn<() => Promise<Role>>().mockResolvedValue(rolesStub()),
  findOneWithArgument: jest.fn<() => Promise<Role>>().mockResolvedValue(rolesStub()),
  findOneOrCreate: jest.fn<() => Promise<Role>>().mockResolvedValue(rolesStub()),

  update: jest.fn<() => Promise<Role>>().mockResolvedValue(rolesStub()),

  remove: jest.fn<() => Promise<Role>>().mockResolvedValue(rolesStub()),
});
