import {EstateInput} from '../estates/models/estate-input';
import {range} from 'lodash';
import * as Chance from 'chance';

const chance = new Chance();

export const generateEstates = (count: number): EstateInput[] => range(count).map((i) => ({
  title: chance.sentence(),
  price: chance.integer({ min: 100, max: 10000 }) * 1000,
  squareMeters: chance.integer({ min: 15, max: 200 }),
  bedrooms: chance.integer({ min: 1, max: 5 }),
  bathrooms: chance.integer({ min: 1, max: 3 }),
  image: `http://lorempixel.com/${160 + i * 2}/${90 + i}/city/`,
  location: {
    longitude: 10,
    latitude: 20,
  },
}));
