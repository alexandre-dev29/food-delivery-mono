import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RestauUser {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
