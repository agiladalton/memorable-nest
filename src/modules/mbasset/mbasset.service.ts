import { Injectable } from '@nestjs/common';
import { CreateMbassetInput } from './dto/create-mbasset.input';
import { UpdateMbassetInput } from './dto/update-mbasset.input';
import { MbAsset, MbAssetDocument } from './mbasset.schema';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Mbresult } from '../mbresult/entities/mbresult.entity';
import { MensajeEnum } from '../../utils/global.enum';

@Injectable()
export class MbassetService {
  constructor(
    @InjectModel(MbAsset.name)
    private readonly mbAssetModel: Model<MbAssetDocument>,
  ) {}

  async create(createMbassetInput: CreateMbassetInput): Promise<Mbresult> {
    const createdMbAsset = new this.mbAssetModel(createMbassetInput);

    try {
      const mbAsset = await createdMbAsset.save();

      return new Mbresult({
        success: true,
        message: MensajeEnum.CORRECTO,
        mbAsset,
      });
    } catch (err) {
      return new Mbresult({
        success: false,
        message: err.message,
      });
    }
  }

  async findOne(id: ObjectId): Promise<Mbresult> {
    return new Mbresult({
      success: true,
      message: MensajeEnum.CORRECTO,
      mbAsset: await this.mbAssetModel.findById(id),
    });
  }

  async findAverage(type: string, score: string): Promise<Mbresult> {
    try {
      const result = await this.mbAssetModel.aggregate([
        {
          $match: { type },
        },
        {
          $group: {
            _id: 'average',
            value: {
              $avg: '$' + score,
            },
          },
        },
      ]);

      return new Mbresult({
        success: true,
        message: MensajeEnum.CORRECTO,
        value: result[0].value,
      });
    } catch (err) {
      return new Mbresult({
        success: false,
        message: err.message,
      });
    }
  }

  async update(
    id: ObjectId,
    updateMbassetInput: UpdateMbassetInput,
  ): Promise<Mbresult> {
    try {
      return new Mbresult({
        success: true,
        message: MensajeEnum.CORRECTO,
        mbAsset: await this.mbAssetModel.findByIdAndUpdate(
          id,
          updateMbassetInput,
        ),
      });
    } catch (err) {
      return new Mbresult({
        success: false,
        message: err.message,
      });
    }
  }
}
