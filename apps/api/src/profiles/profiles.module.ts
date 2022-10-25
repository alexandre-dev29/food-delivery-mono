import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesResolver } from './profiles.resolver';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';
import { FileService, UtilityService } from '@food-delivery-mono/utilities';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    ProfilesResolver,
    ProfilesService,
    DataAccessPrismaService,
    UtilityService,
    FileService,
    ConfigService,
    JwtService,
  ],
})
export class ProfilesModule {}
