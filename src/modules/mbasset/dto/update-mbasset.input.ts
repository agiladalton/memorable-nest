import { CreateMbassetInput } from './create-mbasset.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateMbassetInput extends PartialType(CreateMbassetInput) {
  @Field(() => ID)
  id: ObjectId;
}
