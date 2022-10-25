import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';

@Module({
  providers: [UsersResolver, UsersService, DataAccessPrismaService],
})
export class UsersModule {}
