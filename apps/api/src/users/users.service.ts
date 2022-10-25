import { Injectable } from '@nestjs/common';
import { CreateOneUsersArgs, DataAccessPrismaService, UpdateOneUsersArgs } from '@food-delivery-mono/data-access';

@Injectable()
export class UsersService {
  constructor(private userPrisma: DataAccessPrismaService) {}

  create(createUserInput: CreateOneUsersArgs) {
    return this.userPrisma.users.create(createUserInput);
  }

  findAll() {
    return this.userPrisma.users.findMany({
      include: { profile: true, adresses: true },
    });
  }

  findOne(userId: string) {
    return this.userPrisma.users.findUnique({
      where: { idUser: userId },
      include: { profile: true, adresses: true },
    });
  }

  update(updateUserInput: UpdateOneUsersArgs) {
    return this.userPrisma.users.update(updateUserInput);
  }

  remove(userId: string) {
    return this.userPrisma.users.delete({ where: { idUser: userId } });
  }
}
