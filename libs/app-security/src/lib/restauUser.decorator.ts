import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import UserSecurity from './user.security';

export const CurrentRestauUser = createParamDecorator((data, context: ExecutionContext) => {
  const { id, userId, userName, roles, isRestaurant, restaurantId, isSuperAdmin, phoneNumber }: UserSecurity =
    GqlExecutionContext.create(context).getContext().req.user;
  return { id, userId, userName, roles, isRestaurant, restaurantId, isSuperAdmin, phoneNumber };
});
