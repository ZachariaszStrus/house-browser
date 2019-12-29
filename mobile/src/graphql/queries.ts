import gql from 'graphql-tag';

import { Estate } from '../../../api/src/estates/models/estate';
import { EstateFilter } from '../../../api/src/estates/models/estate-filter';

export interface IEstatesQuery {
  estates: Estate[];
}

export interface IEstatesQueryVariables {
  filter: EstateFilter | null;
  city: string | null;
}

export const ESTATES_QUERY = gql`
  query Estate($filter: EstateFilter, $city: String) {
    estates(filter: $filter, city: $city) {
      id
      title
      price
      squareMeters
      bedrooms
      bathrooms
      image
    }
  }
`;
