import { Module } from '@nestjs/common';
import { EstateResolver } from './estate.resolver';
import { EstateService } from './estate.service';

@Module({
  providers: [EstateResolver, EstateService],
})
export class EstateModule {}
