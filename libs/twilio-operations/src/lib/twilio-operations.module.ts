import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [ConfigService],
  exports: [],
})
export class TwilioOperationsModule {}
