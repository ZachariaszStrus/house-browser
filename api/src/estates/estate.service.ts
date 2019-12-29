import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEstate } from './interfaces/estate.interface';
import { EstateInput } from './models/estate-input';
import { Estate } from './models/estate';
import { EstateFilter } from './models/estate-filter';

@Injectable()
export class EstateService {
  constructor(
    @InjectModel('Estate') private readonly estateModel: Model<IEstate>,
  ) {}

  async create(estates: EstateInput): Promise<Estate> {
    const createdEstate = new this.estateModel(estates);
    return await createdEstate.save();
  }

  async findAll(filter?: EstateFilter): Promise<Estate[]> {
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
        query['bedrooms'] = {};
        query['bedrooms']['$in'] = filter.bedrooms;
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
