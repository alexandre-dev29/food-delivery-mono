import { CreateRestauUserInput } from './create-restau-user.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRestauUserInput extends PartialType(CreateRestauUserInput) {
  @Field(() => Int)
  id: number;
}
