# House Browser

Simple estates app

## Getting Started

### Prerequisites

yarn, docker-compose

### Running local backend

First start database container, run:

```
docker-compose up
```

Set your Google API key in file './api/src/config.ts':

```
export const GOOGLE_MAPS_API_KEY = '<INSERT_YOUR_API_KEY_HERE>';
```

Then start Nest JS backend, run:

```
cd api
yarn start
```

Go to http://localhost:3000/graphql, in GraphQL console you can execute this query to populate db with random data: 

```
mutation {
  populateEstates(count: 200)
}
```

Example query for adding single estate:

```
mutation {
  createEstate(input: {
    title: "Test estate",
    price: 100000,
    squareMeters: 100,
    bedrooms: 3,
    bathrooms: 2,
    image:  "http://lorempixel.com/300/250/city/",
    location: {
      type: "Point",
      coordinates: [2.1734035, 41.3850639]
    }
  }) {
    id
    title
    price
    squareMeters
    bedrooms
    bathrooms
    image
  }
}
```

To fetch all estates use:

```
{
  estates {
    id
    title
    price
    squareMeters
    bedrooms
    bathrooms
    image
    location {
      type
      coordinates
    }
  }
}
```

### Running local frontend

Connect your Android device or run emulator, make sure that it's in the same local network and set your running GraphQL server url (e.g. http://192.168.0.80:3000/graphql) in file './mobile/config.ts':

```
export const apiUrl = '<INSERT_YOUR_API_URL_HERE>';
```

Finally run client app, for Android run:

```
cd mobile
yarn android
```

## Running the tests

To test backend:

```
cd api
yarn test
```

To test frontend:

```
cd mobile
yarn test
```
