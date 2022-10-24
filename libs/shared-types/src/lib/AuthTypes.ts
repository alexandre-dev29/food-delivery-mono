import { Scalar } from '@nestjs/graphql';

export type Tokens = {
  access_token: string;
  refresh_token: string;
};

@Scalar('LoginResponse')
export class LoginResponse {
  access_token: string;
  refresh_token: string;
  user: Partial<AuthUser>;
}
