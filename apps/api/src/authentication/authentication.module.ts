import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResolver } from './authentication.resolver';
import { UtilityService } from '@food-delivery-mono/utilities';
import { TwilioOperationService } from '@food-delivery-mono/twilio-operations';
import { ConfigService } from '@nestjs/config';
import { LoginResponse } from '@food-delivery-mono/shared-types';
import { JwtService } from '@nestjs/jwt';
import { DataAccessPrismaService } from '@food-delivery-mono/data-access';
import { authUserPermissions, JwtStrategy } from '@food-delivery-mono/app-security';
import { CaslModule } from 'nest-casl';

@Module({
  imports: [CaslModule.forFeature({ permissions: authUserPermissions })],
  providers: [
    AuthenticationResolver,
    AuthenticationService,
    JwtService,
    UtilityService,
    TwilioOperationService,
    ConfigService,
    LoginResponse,
    DataAccessPrismaService,
    JwtStrategy,
  ],
})
export class AuthenticationModule {}
