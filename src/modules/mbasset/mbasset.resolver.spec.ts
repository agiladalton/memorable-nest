import { Test, TestingModule } from '@nestjs/testing';
import { MbassetResolver } from './mbasset.resolver';
import { MbassetService } from './mbasset.service';
import { AppModule } from '../../app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MbAsset, MbAssetSchema } from './mbasset.schema';
import { CreateMbassetInput } from './dto/create-mbasset.input';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');

describe('MbassetResolver', () => {
  let resolver: MbassetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([
          { name: MbAsset.name, schema: MbAssetSchema },
        ]),
      ],
      providers: [MbassetResolver, MbassetService],
    }).compile();

    resolver = module.get<MbassetResolver>(MbassetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('asset', () => {
    it('should find and return a asset', async () => {
      const id = mongoose.Types.ObjectId('62687c7335fd63436e9a09f1');

      const result = await resolver.findOne(mongoose.Types.ObjectId(id));

      expect(result.success).toEqual(true);

      if (result.mbAsset) {
        expect(result.mbAsset._id).toEqual(id);
      }
    });
  });

  describe('average', () => {
    it('should get average', async () => {
      const result = await resolver.findAverage('image', 'scoreType1');

      expect(result.success).toEqual(true);
    });
  });

  describe('createAsset', () => {
    it('should create a asset', async () => {
      const mbAsset = {
        type: 'image',
        filename: 'file4',
        extension: 'png',
        scoreType1: 5,
        scoreType2: 10,
        scoreType3: 15,
      } as CreateMbassetInput;
      const result = await resolver.createMbasset(mbAsset);

      expect(result.success).toEqual(true);
    });
  });
});
