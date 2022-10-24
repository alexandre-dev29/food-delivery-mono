import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { Readable } from 'stream';
import { Tokens } from '@food-delivery-mono/shared-types';

@Injectable()
export class UtilityService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService
  ) {}

  hashData = (data: string): Promise<string> => {
    return bcrypt.hash(data, 10);
  };

  getTokens = async (
    authUserId: string,
    userId: string,
    phoneNumber: string,
    userRole: string
  ): Promise<Tokens> => {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, phoneNumber, userRole, authUserId, userId },
        {
          expiresIn: 60 * 15,
          secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
        }
      ),
      this.jwtService.signAsync(
        { sub: userId, phoneNumber, userRole, authUserId, userId },
        {
          expiresIn: 60 * 60 * 24 * 7,
          secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
        }
      ),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    } as Tokens;
  };

  async getBufferFromReadStream(stream: () => Readable): Promise<Buffer> {
    const mainStream = stream();
    const chunks = [];

    const buffer = await new Promise<Buffer>((resolve, reject) => {
      let buffer: Buffer;

      mainStream.on('data', function (chunk) {
        chunks.push(chunk);
      });

      mainStream.on('end', function () {
        buffer = Buffer.concat(chunks);
        resolve(buffer);
      });

      mainStream.on('error', reject);
    });
    return buffer;
  }
}
