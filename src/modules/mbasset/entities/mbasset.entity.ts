import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@ObjectType()
export class Mbasset {
  @Field(() => ID)
  _id: ObjectId;
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
