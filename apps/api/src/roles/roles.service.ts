import { Injectable } from '@nestjs/common';

import {
  CreateOneRoleArgs,
  DataAccessPrismaService,
  FindFirstRoleArgs,
  UpdateOneRoleArgs,
} from '@food-delivery-mono/data-access';

@Injectable()
export class RolesService {
  constructor(private prismaService: DataAccessPrismaService) {}

  async create(createRoleInput: CreateOneRoleArgs) {
    return await this.prismaService.role.create(createRoleInput);
  }

  async findAll() {
    return await this.prismaService.role.findMany({});
  }

  async findOneById(id: string) {
    return await this.prismaService.role.findUnique({ where: { roleId: id } });
  }

  async findOneWithArgument(argument: FindFirstRoleArgs) {
    return await this.prismaService.role.findFirst(argument);
  }

  async findOneOrCreate(argument: FindFirstRoleArgs, userRole?: string) {
    const foundedRole = await this.prismaService.role.findFirst(argument);
    if (foundedRole) return foundedRole;
    return await this.prismaService.role.create({
      data: { userRole: userRole },
    });
  }

  async update(updateRoleInput: UpdateOneRoleArgs) {
    return await this.prismaService.role.update(updateRoleInput);
  }

  async remove(id: string) {
    return await this.prismaService.role.delete({ where: { roleId: id } });
  }
}
