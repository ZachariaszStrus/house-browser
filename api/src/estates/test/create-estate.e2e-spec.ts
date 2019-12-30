import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { EstateService } from '../estate.service';
import * as  request from 'supertest';

describe('Estates (e2e)', () => {
  let app;
  let estatesService: EstateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports : [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    estatesService = module.get<EstateService>(EstateService);
  });

  it('createEstate', (done) => {
    const id = '1';
    jest.spyOn(estatesService, 'create').mockImplementation((estate) => Promise.resolve({
      ...estate,
      id,
    }));

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query : `
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
        `,
      })
      .expect(200)
      .expect({
        data: {
          createEstate: {
            id,
            title: 'Test estate',
            price: 100000,
            squareMeters: 100,
            bedrooms: 3,
            bathrooms: 2,
            image:  'http://lorempixel.com/300/250/city/',
          },
        },
      }, done);
  });

  afterAll(async () => {
    await app.close();
  });
});
