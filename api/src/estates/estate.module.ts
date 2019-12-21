import { Module } from '@nestjs/common';
import { EstateResolver } from './estate.resolver';
import { EstateService } from './estate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EstateSchema } from './schemas/estate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Estate', schema: EstateSchema }])
  ],
  providers: [EstateResolver, EstateService]
})
export class EstateModule {}
