import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentRestauUser = createParamDecorator((data, context: ExecutionContext) => {
  const { userId, userName, userRole, restauId } = GqlExecutionContext.create(context).getContext().req.user;
  return { userId, userName, userRole, restauId };
});
