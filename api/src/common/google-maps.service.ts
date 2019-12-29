import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { GOOGLE_MAPS_API_KEY } from '../config';

interface ICoordsResponse {
  results: Array<{
    geometry: {
      location: {
        lat: number,
        lng: number,
      },
    };
  }>;
}

@Injectable()
export class GoogleMapsService {

  constructor(
    protected readonly http: HttpService,
  ) {}

  public getCoords(
    searchString: string,
  ): Promise <number[] | null> {
    return this.http
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(searchString)}&key=${GOOGLE_MAPS_API_KEY}`)
      .toPromise()
      .then((response: AxiosResponse <ICoordsResponse>) => {
        if (response.data.results && response.data.results.length >= 1) {
          return [response.data.results[0].geometry.location.lng, response.data.results[0].geometry.location.lat];
        } else {
          return null;
        }
      });
  }
}
