import {EstateInput} from '../estates/models/estate-input';
import {range} from 'lodash';
import * as Chance from 'chance';

const chance = new Chance();

const LOCATIONS = {
  barcelona: [2.1734035, 41.3850639],
  gdansk: [18.6466384, 54.35202520000001],
  london: [ -0.1277583, 51.5073509],
};

export const generateEstates = (count: number): EstateInput[] => range(count).map((i) => {
  const city = ['barcelona', 'gdansk', 'london'][chance.integer({ min: 0, max: 2 })];
  return {
    title: chance.sentence() + ' - ' + city,
    price: chance.integer({ min: 100, max: 10000 }) * 1000,
    squareMeters: chance.integer({ min: 15, max: 200 }),
    bedrooms: chance.integer({ min: 1, max: 5 }),
    bathrooms: chance.integer({ min: 1, max: 3 }),
    image: `http://lorempixel.com/${800 + i * 2}/${450 + i}/city/`,
    location: {
      type: 'Point',
      coordinates: [
        LOCATIONS[city][0] + chance.floating({ min: -0.5, max: 0.5 }),
        LOCATIONS[city][1] + chance.floating({ min: -0.5, max: 0.5 }),
      ],
    },
  }
});
