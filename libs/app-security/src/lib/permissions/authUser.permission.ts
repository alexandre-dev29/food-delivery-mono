import { InferSubjects, Permissions } from 'nest-casl';
import { AuthUser, Role } from '@food-delivery-mono/data-access';
import { AuthSecurityActions } from '../actions/SecurityActions';

type Subject = InferSubjects<typeof AuthUser>;
export const authUserPermissions: Permissions<Role, Subject, AuthSecurityActions> = {
  everyone({ can }) {
    can(AuthSecurityActions.register, AuthUser);
    can(AuthSecurityActions.login, AuthUser);
    can(AuthSecurityActions.refreshToken, AuthUser);
    can(AuthSecurityActions.confirmPhoneNumber, AuthUser);
    can(AuthSecurityActions.confirmOtp, AuthUser);
    can(AuthSecurityActions.forgotPassword, AuthUser);
    can(AuthSecurityActions.askingForOtp, AuthUser);
  },
  SuperAdmin({ can }) {
    can(AuthSecurityActions.manage, AuthUser);
  },
};
