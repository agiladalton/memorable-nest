import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMbassetInput {
  @Field(() => String)
  type: string;
  @Field(() => String)
  filename: string;
  @Field(() => String)
  extension: string;
  @Field(() => Int)
  scoreType1: number;
  @Field(() => Int)
  scoreType2: number;
  @Field(() => Int)
  scoreType3: number;
}
