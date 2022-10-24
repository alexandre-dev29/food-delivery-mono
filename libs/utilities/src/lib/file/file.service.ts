import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import { ManagedUpload } from 'aws-sdk/lib/s3/managed_upload';
import SendData = ManagedUpload.SendData;

@Injectable()
export class FileService {
  private s3_client: S3;

  constructor(private configService: ConfigService) {
    this.s3_client = new S3({
      credentials: {
        accessKeyId: configService.get<string>('AWS_ACCESS_KEY_ID'),
        secretAccessKey: configService.get<string>('AWS_ACCESS_SECRET'),
      },
      region: configService.get<string>('AWS_REGION'),
    });
  }

  async uploadToS3(dataBuffer: Buffer, fileName: string): Promise<SendData> {
    const uploadResult = await this.s3_client
      .upload({
        Bucket: this.configService.get<string>('AWS_BUCKET'),
        Body: dataBuffer,
        Key: `${uuid()}-${fileName}}`,
      })
      .promise();

    return uploadResult;
  }
}
