import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { CreateOneRoleArgs, Role, UpdateOneRoleArgs } from '@food-delivery-mono/data-access';

@Resolver(() => Role)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation(() => Role)
  createRole(@Args('createRoleInput') createRoleInput: CreateOneRoleArgs) {
    return this.rolesService.create(createRoleInput);
  }

  @Query(() => [Role], { name: 'roles' })
  findAll() {
    return this.rolesService.findAll();
  }

  @Query(() => Role, { name: 'role' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.rolesService.findOneById(id);
  }

  @Mutation(() => Role)
  updateRole(@Args('updateRoleInput') updateRoleInput: UpdateOneRoleArgs) {
    return this.rolesService.update(updateRoleInput);
  }

  @Mutation(() => Role)
  removeRole(@Args('id', { type: () => String }) id: string) {
    return this.rolesService.remove(id);
  }
}
