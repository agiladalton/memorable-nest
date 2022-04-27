import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import * as mongoose from 'mongoose';

export type MbAssetDocument = MbAsset & Document;

@Schema({ collection: 'mb_asset', versionKey: false })
export class MbAsset {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    default: Types.ObjectId,
    required: true,
  })
  _id: ObjectId;
  @Prop({
    type: String,
    trim: true,
    required: true,
    maxlength: 45,
  })
  type: string;
  @Prop({
    type: String,
    trim: true,
    required: true,
    maxlength: 45,
  })
  filename: string;
  @Prop({
    type: String,
    trim: true,
    required: true,
    maxlength: 45,
  })
  extension: string;
  @Prop({
    type: Number,
    required: true,
    min: 0,
    MAX_VALUE: 100,
  })
  scoreType1: number;
  @Prop({
    type: Number,
    required: true,
    min: 0,
    max: 100,
  })
  scoreType2: number;
  @Prop({
    type: Number,
    required: true,
    min: 0,
    max: 100,
  })
  scoreType3: number;
}

export const MbAssetSchema = SchemaFactory.createForClass(MbAsset);
