import { Module } from '@nestjs/common';
import { RestauUsersService } from './restau-users.service';
import { RestauUsersResolver } from './restau-users.resolver';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';
import { UtilityService } from '@food-delivery-mono/utilities';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    RestauUsersResolver,
    RestauUsersService,
    DataAccessPrismaService,
    UtilityService,
    ConfigService,
    JwtService,
  ],
})
export class RestauUsersModule {}
