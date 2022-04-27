import { Test, TestingModule } from '@nestjs/testing';
import { MbassetService } from './mbasset.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MbAsset, MbAssetSchema } from './mbasset.schema';
import { AppModule } from '../../app.module';

describe('MbassetService', () => {
  let service: MbassetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([
          { name: MbAsset.name, schema: MbAssetSchema },
        ]),
      ],
      providers: [MbassetService],
    }).compile();

    service = module.get<MbassetService>(MbassetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
