import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { MbassetService } from './mbasset.service';
import { Mbasset } from './entities/mbasset.entity';
import { CreateMbassetInput } from './dto/create-mbasset.input';
import { UpdateMbassetInput } from './dto/update-mbasset.input';
import { Mbresult } from '../mbresult/entities/mbresult.entity';
import { ObjectId } from 'mongoose';

@Resolver(() => Mbasset)
export class MbassetResolver {
  constructor(private readonly mbassetService: MbassetService) {}

  @Mutation(() => Mbresult)
  createMbasset(
    @Args('createMbassetInput') createMbassetInput: CreateMbassetInput,
  ) {
    return this.mbassetService.create(createMbassetInput);
  }

  @Query(() => Mbresult, { name: 'mbasset' })
  findOne(@Args('id', { type: () => ID }) id: ObjectId) {
    return this.mbassetService.findOne(id);
  }

  @Query(() => Mbresult, { name: 'mbassetavg' })
  findAverage(
    @Args('type', { type: () => String }) type: string,
    @Args('score', { type: () => String }) score: string,
  ) {
    return this.mbassetService.findAverage(type, score);
  }

  @Mutation(() => Mbresult)
  updateMbasset(
    @Args('updateMbassetInput') updateMbassetInput: UpdateMbassetInput,
  ) {
    return this.mbassetService.update(
      updateMbassetInput.id,
      updateMbassetInput,
    );
  }
}
