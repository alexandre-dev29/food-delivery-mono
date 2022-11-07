import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TwilioOperationsModule } from '@food-delivery-mono/twilio-operations';
import { AuthenticationModule } from '../authentication/authentication.module';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { useResponseCache } from '@graphql-yoga/plugin-response-cache';
import { createRedisCache } from '@envelop/response-cache-redis';
import Redis from 'ioredis';
import { UsersModule } from '../users/users.module';
import { ProfilesModule } from '../profiles/profiles.module';
import { useGraphQlJit } from '@envelop/graphql-jit';
import { GraphQLLiveDirective, useLiveQuery } from '@envelop/live-query';
import { GetInMemoryStore } from '@food-delivery-mono/utilities';

const redis = new Redis({});

@Module({
  imports: [
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      autoSchemaFile: true,
      graphiql: true,
      installSubscriptionHandlers: true,
      logging: true,
      buildSchemaOptions: {
        directives: [GraphQLLiveDirective],
      },
      plugins: [
        useResponseCache({ session: () => null, ttl: 10000 * 6, cache: createRedisCache({ redis }) }),
        useGraphQlJit(),
        useLiveQuery({ liveQueryStore: GetInMemoryStore() }),
      ],
    }),
    TwilioOperationsModule,
    AuthenticationModule,
    UsersModule,
    ProfilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
