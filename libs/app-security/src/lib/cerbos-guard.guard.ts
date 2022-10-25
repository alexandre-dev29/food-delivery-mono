import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GRPC as Cerbos } from '@cerbos/grpc';
import { GqlExecutionContext } from '@nestjs/graphql';

const cerbos = new Cerbos('127.0.0.1:3593', { tls: false });
const ACTIONS = { POST: 'create', GET: 'view:public', PUT: 'update' };

@Injectable()
export class CerbosGuardGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const { userId, phoneNumber, userRole } = GqlExecutionContext.create(context).getContext().req.user;
    console.log(phoneNumber);
    return true;
  }
}
