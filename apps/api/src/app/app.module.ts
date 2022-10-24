import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { ConfigModule } from '@nestjs/config';
import { TwilioOperationsModule } from '@food-delivery-mono/twilio-operations';
import { AuthenticationModule } from '../authentication/authentication.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      subscription: true,
      graphiql: true,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot(),
    TwilioOperationsModule,
    AuthenticationModule,

    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
