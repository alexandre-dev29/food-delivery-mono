import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';
import { CaslModule } from 'nest-casl';
import { userPermissions } from '@food-delivery-mono/app-security';

@Module({
  imports: [CaslModule.forFeature({ permissions: userPermissions })],
  providers: [UsersResolver, UsersService, DataAccessPrismaService],
})
export class UsersModule {}
