import { Test, TestingModule } from '@nestjs/testing';
import { RolesResolver } from '../roles.resolver';
import { RolesService } from '../roles.service';

import { rolesStub } from './stubs/roles.stub';
import { CreateOneRoleArgs, DataAccessPrismaService, Role, UpdateOneRoleArgs } from '@food-delivery-mono/data-access';

jest.mock('../roles.service.ts');
describe('RolesResolver', () => {
  let roleResolver: RolesResolver;
  let rolesService: RolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesResolver, RolesService, DataAccessPrismaService],
    }).compile();

    roleResolver = module.get<RolesResolver>(RolesResolver);
    rolesService = module.get<RolesService>(RolesService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(roleResolver).toBeDefined();
  });

  describe('Get All Roles from the app', () => {
    let roles: Role[];
    beforeEach(async () => {
      roles = await roleResolver.findAll();
    });
    test('then it should call rolesService', async () => {
      expect(jest.spyOn(rolesService, 'findAll')).toHaveBeenCalled();
    });
    test('then it should returns roles', async () => {
      expect(roles).toEqual([rolesStub()]);
    });
  });

  describe('Get one Roles from the app', () => {
    let role: Role;
    beforeEach(async () => {
      role = await roleResolver.findOne(rolesStub().roleId);
    });

    test('then it should call rolesService', async () => {
      expect(jest.spyOn(rolesService, 'findOneById')).toHaveBeenCalled();
    });

    test('then it should call rolesService with some params', async () => {
      expect(jest.spyOn(rolesService, 'findOneById')).toHaveBeenCalledWith(rolesStub().roleId);
    });

    test('then it should returns roles', async () => {
      expect(role).toEqual(rolesStub());
    });
  });

  describe('create one Roles in the app', () => {
    let role: Role;
    let createDto: CreateOneRoleArgs;
    beforeEach(async () => {
      createDto = {
        data: {
          userRole: rolesStub().userRole,
        },
      };
      role = await roleResolver.createRole(createDto);
    });

    test('then it should call rolesService/create', async () => {
      expect(jest.spyOn(rolesService, 'create')).toHaveBeenCalled();
    });

    test('then it should call rolesService/create with some params', async () => {
      expect(jest.spyOn(rolesService, 'create')).toHaveBeenCalledWith(createDto);
    });

    test('then it should returns roles', async () => {
      expect(role).toEqual(rolesStub());
    });
  });

  describe('update one Roles in the app', () => {
    let role: Role;
    let updateDto: UpdateOneRoleArgs;
    beforeEach(async () => {
      updateDto = {
        data: {
          userRole: { set: rolesStub().roleId },
        },
        where: {
          roleId: rolesStub().roleId,
        },
      };
      role = await roleResolver.updateRole(updateDto);
    });

    test('then it should call rolesService/update', async () => {
      expect(jest.spyOn(rolesService, 'update')).toHaveBeenCalled();
    });

    test('then it should call rolesService/update with some params', async () => {
      expect(jest.spyOn(rolesService, 'update')).toHaveBeenCalledWith(updateDto);
    });

    test('then it should returns roles', async () => {
      expect(role).toEqual(rolesStub());
    });
  });
});
