import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';

@Module({
  providers: [RolesResolver, RolesService, DataAccessPrismaService],
})
export class RolesModule {}
