import { Document } from 'mongoose';

export interface IEstate extends Document {
  readonly title: string;
  readonly price: number;
  readonly squareMeters: number;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly image: string;
  readonly location: {
    latitude: number,
    longitude: number,
  };
}
