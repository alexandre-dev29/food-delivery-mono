import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResolver } from './authentication.resolver';
import { UtilityService } from '@food-delivery-mono/utilities';
import { TwilioOperationService } from '@food-delivery-mono/twilio-operations';
import { ConfigService } from '@nestjs/config';
import { RolesService } from '../roles/roles.service';
import { LoginResponse } from '@food-delivery-mono/shared-types';
import { JwtService } from '@nestjs/jwt';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';
import { JwtStrategy } from '@food-delivery-mono/app-security';

@Module({
  providers: [
    AuthenticationResolver,
    AuthenticationService,
    JwtService,
    UtilityService,
    TwilioOperationService,
    ConfigService,
    RolesService,
    LoginResponse,
    DataAccessPrismaService,
    JwtStrategy,
  ],
})
export class AuthenticationModule {}
