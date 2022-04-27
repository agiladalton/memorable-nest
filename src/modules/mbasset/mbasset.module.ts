import { Module } from '@nestjs/common';
import { MbassetService } from './mbasset.service';
import { MbassetResolver } from './mbasset.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { MbAsset, MbAssetSchema } from './mbasset.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MbAsset.name, schema: MbAssetSchema }]),
  ],
  providers: [MbassetResolver, MbassetService],
})
export class MbassetModule {}
