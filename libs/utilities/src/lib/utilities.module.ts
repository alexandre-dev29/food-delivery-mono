import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileService } from './file/file.service';
import { UtilityService } from './utility.service';

@Module({
  controllers: [],
  providers: [UtilityService, ConfigService, FileService],
  exports: [],
})
export class UtilitiesModule {}
