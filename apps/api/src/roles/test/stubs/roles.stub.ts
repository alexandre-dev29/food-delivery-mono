import { Role } from '@food-delivery-mono/data-access';

export const rolesStub = (): Role => {
  return {
    userRole: 'User',
    createdAt: new Date(2022, 9, 30),
    roleId: '1',
    updatedAt: new Date(2022, 9, 30),
  };
};
