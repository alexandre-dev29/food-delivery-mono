import { Role } from '@food-delivery-mono/data-access';
import { AuthorizableUser } from 'nest-casl';

export default class UserSecurity implements AuthorizableUser<Role, string> {
  id: string;
  userId: string;
  userName?: string;
  roles: Array<Role>;
  isSuperAdmin: boolean;
  isRestaurant: boolean;
  restaurantId: string;
  phoneNumber?: string;
}
