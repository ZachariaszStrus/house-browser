import * as mongoose from 'mongoose';

export const EstateSchema = new mongoose.Schema({
  title: String,
  price: Number,
  squareMeters: Number,
  bedrooms: Number,
  bathrooms: Number,
  image: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: [Number],
  },
});

EstateSchema.index({ location: '2dsphere' });
