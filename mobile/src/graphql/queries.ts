import gql from 'graphql-tag';

import { Estate } from '../../../api/src/estates/models/estate';

export interface IEstatesQuery {
  estates: Estate[];
}

export const estatesQuery = gql`
  {
    estates {
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
