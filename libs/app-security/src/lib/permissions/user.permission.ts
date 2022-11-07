import { InferSubjects, Permissions } from 'nest-casl';
import { Role, Users } from '@food-delivery-mono/data-access';
import { SecurityActions } from '../actions/SecurityActions';

export type Subject = InferSubjects<typeof Users>;
export const userPermissions: Permissions<Role, Subject, SecurityActions> = {
  SuperAdmin({ user, can }) {
    can(SecurityActions.manage, Users);
  },
  User({ user, can }) {
    can(SecurityActions.update, Users, { userdId: user.id });
    can(SecurityActions.readOne, Users, { userdId: user.id });
  },
};
