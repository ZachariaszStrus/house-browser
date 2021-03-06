import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEstate } from './interfaces/estate.interface';
import { EstateInput } from './models/estate-input';
import { Estate } from './models/estate';
import { EstateFilter } from './models/estate-filter';
import { GoogleMapsService } from '../common/google-maps.service';

@Injectable()
export class EstateService {
  constructor(
    @InjectModel('Estate') private readonly estateModel: Model<IEstate>,
    private googleMapsService: GoogleMapsService,
  ) {}

  async create(estate: EstateInput): Promise<Estate> {
    const createdEstate = new this.estateModel(estate);
    return await createdEstate.save();
  }

  async findAll(filter?: EstateFilter, city?: string): Promise<Estate[]> {
    const query = {};

    if (filter) {
      if (filter.minPrice || filter.maxPrice) {
        query['price'] = {};
        if (filter.minPrice) {
          query['price']['$gte'] = filter.minPrice;
        }

        if (filter.maxPrice) {
          query['price']['$lte'] = filter.maxPrice;
        }
      }

      if (filter.minSize || filter.maxSize) {
        query['squareMeters'] = {};
        if (filter.minSize) {
          query['squareMeters']['$gte'] = filter.minSize;
        }

        if (filter.maxSize) {
          query['squareMeters']['$lte'] = filter.maxSize;
        }

      }

      if (filter.bedrooms) {
        query['bedrooms'] = {
          $in: filter.bedrooms,
        };
      }
    }

    if (city) {
      const coords = await this.googleMapsService.getCoords(city);
      if (coords) {
        query['location'] = {
          $nearSphere: {
            $geometry: {
              type: 'Point' ,
              coordinates: coords,
            },
            $minDistance: 1,
          },
        };
      }
    }

    return this.estateModel.find(query);
  }

  async delete(id: string): Promise<Estate> {
    return this.estateModel.findByIdAndRemove(id);
  }

  async update(id: string, item: EstateInput): Promise<Estate> {
    return this.estateModel.findByIdAndUpdate(id, item, { new: true });
  }

  async deleteAll(): Promise<number> {
    const result = await this.estateModel.remove({}).exec();
    return result.deletedCount;
  }

  async createAll(estates: EstateInput[]): Promise<number> {
    const result = await this.estateModel.create(estates);
    return result.length;
  }
}
