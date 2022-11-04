import { Injectable } from '@nestjs/common';
import { CreateRestauUserInput } from './dto/create-restau-user.input';
import { UpdateRestauUserInput } from './dto/update-restau-user.input';

@Injectable()
export class RestauUsersService {
  create(createRestauUserInput: CreateRestauUserInput) {
    return 'This action adds a new restauUser';
  }

  findAll() {
    return `This action returns all restauUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restauUser`;
  }

  update(id: number, updateRestauUserInput: UpdateRestauUserInput) {
    return `This action updates a #${id} restauUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} restauUser`;
  }
}
