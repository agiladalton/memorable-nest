import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MbassetModule } from './modules/mbasset/mbasset.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      playground: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USER_MONGODB}:${process.env.PASS_MONGODB}@${process.env.HOSTNAME_MONGODB}/${process.env.BD_MONGODB}?authSource=admin&replicaSet=atlas-12gjtt-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
      {
        useNewUrlParser: true,
      },
    ),
    MbassetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
