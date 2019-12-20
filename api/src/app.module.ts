import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { EstateModule } from './estates/estate.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile : '../common/graphql/schema.gql',
      installSubscriptionHandlers : true,
    }),
    EstateModule,
  ],
})
export class AppModule {}
