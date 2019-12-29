import { HttpModule, Module } from '@nestjs/common';
import { EstateResolver } from './estate.resolver';
import { EstateService } from './estate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EstateSchema } from './schemas/estate.schema';
import { GoogleMapsService } from '../common/google-maps.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Estate', schema: EstateSchema }]),
    HttpModule,
  ],
  providers: [GoogleMapsService, EstateResolver, EstateService],
})
export class EstateModule {}
