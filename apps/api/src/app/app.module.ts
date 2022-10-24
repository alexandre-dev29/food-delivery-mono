import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { ConfigModule } from '@nestjs/config';
import { TwilioOperationsModule } from '@food-delivery-mono/twilio-operations';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
