import { Module } from '@nestjs/common';
import { RestauUsersService } from './restau-users.service';
import { RestauUsersResolver } from './restau-users.resolver';

@Module({
  providers: [RestauUsersResolver, RestauUsersService],
})
export class RestauUsersModule {}
