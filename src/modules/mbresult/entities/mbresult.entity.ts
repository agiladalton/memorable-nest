import { ObjectType, Field } from '@nestjs/graphql';
import { Mbasset } from '../../mbasset/entities/mbasset.entity';

@ObjectType()
export class Mbresult {
  @Field(() => Boolean, { description: 'Estado de la respuesta' })
  success: boolean;
  @Field({ description: 'Mensaje de la respuesta' })
  message: string;
  @Field({ description: 'Objeto de asset', nullable: true })
  mbAsset?: Mbasset;
  @Field({ description: 'Valor', nullable: true })
  value?: number;

  constructor(param: {
    success: boolean;
    message: string;
    mbAsset?: any;
    value?: any;
  }) {
    this.success = param.success;
    this.message = param.message;
    this.mbAsset = param.mbAsset;
    this.value = param.value;
  }
}
