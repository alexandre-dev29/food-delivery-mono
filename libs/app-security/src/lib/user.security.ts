import { Role } from '@food-delivery-mono/data-access';

export default class UserSecurity {
  id: string;
  userId: string;
  userName?: string;
  roles: Role;
  isSuperAdmin: boolean;
  isRestaurant: boolean;
  restaurantId: string;
  phoneNumber?: string;
}
