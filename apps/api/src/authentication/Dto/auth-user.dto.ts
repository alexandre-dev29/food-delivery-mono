import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  phoneNumber: string;
  @Field(() => String)
  username: string;
  @Field(() => String)
  password: string;
}
