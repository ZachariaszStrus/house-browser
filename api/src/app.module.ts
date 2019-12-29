import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { EstateModule } from './estates/estate.module';
import {DB_CONFIG} from './config';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile : '../common/graphql/schema.gql',
      installSubscriptionHandlers : true,
    }),
    MongooseModule.forRoot(`mongodb://${DB_CONFIG.user}:${DB_CONFIG.password}@127.0.0.1:27017/${DB_CONFIG.name}`),
    EstateModule,
  ],
})
export class AppModule {}
