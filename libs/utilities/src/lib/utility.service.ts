import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { Tokens } from '@food-delivery-mono/shared-types';
import UserSecurity from '../../../app-security/src/lib/user.security';

@Injectable()
export class UtilityService {
  constructor(private configService: ConfigService, private jwtService: JwtService) {}

  hashData = (data: string): Promise<string> => {
    return bcrypt.hash(data, 10);
  };

  getTokens = async ({
    roles,
    phoneNumber,
    userId,
    isRestaurant,
    restaurantId,
    isSuperAdmin,
    id,
  }: UserSecurity): Promise<Tokens> => {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: id, roles, phoneNumber, userId, id, isRestaurant, restaurantId, isSuperAdmin },
        {
          expiresIn: 60 * 15,
          secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
        }
      ),
      this.jwtService.signAsync(
        { sub: id },
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
  getTokensForRestauUsers = async ({
    roles,
    phoneNumber,
    userId,
    userName,
    isRestaurant,
    restaurantId,
    isSuperAdmin,
    id,
  }: UserSecurity): Promise<Tokens> => {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: id, userName, roles, userId, restaurantId, isRestaurant, isSuperAdmin, phoneNumber },
        {
          expiresIn: 60 * 15,
          secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
        }
      ),
      this.jwtService.signAsync(
        { sub: id },
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
}
