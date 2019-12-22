import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEstate } from './interfaces/estate.interface';
import { EstateInput } from './models/estate-input';
import { Estate } from './models/estate';

@Injectable()
export class EstateService {
  constructor(
    @InjectModel('Estate') private readonly estateModel: Model<IEstate>,
  ) {}

  async create(estates: EstateInput): Promise<Estate> {
    const createdEstate = new this.estateModel(estates);
    return await createdEstate.save();
  }

  async findAll(): Promise<Estate[]> {
    return await this.estateModel.find().exec();
  }

  async delete(id: string): Promise<Estate> {
    return this.estateModel.findByIdAndRemove(id);
  }

  async update(id: string, item: EstateInput): Promise<Estate> {
    return this.estateModel.findByIdAndUpdate(id, item, { new: true });
  }

  async deleteAll(): Promise<number> {
    const result = await this.estateModel.remove({});
    return result.deletedCount;
  }

  async createAll(estates: EstateInput[]): Promise<number> {
    const result = await this.estateModel.create(estates);
    return result.length;
  }
}
