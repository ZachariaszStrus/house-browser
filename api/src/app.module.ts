import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { EstateModule } from './estates/estate.module';
import {dbConfig} from './config';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile : '../common/graphql/schema.gql',
      installSubscriptionHandlers : true,
    }),
    MongooseModule.forRoot(`mongodb://${dbConfig.user}:${dbConfig.password}@127.0.0.1:27017/${dbConfig.name}`),
    EstateModule,
  ],
})
export class AppModule {}
