import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { EstateService } from '../estate.service';
import { generateEstates } from '../../utils/generate-estates';
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

  it('estates', (done) => {
    const result = generateEstates(10);
    jest.spyOn(estatesService, 'findAll').mockImplementation(() => Promise.resolve(result));

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query : `
          {
            estates {
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
        `,
      })
      .expect(200)
      .expect({
        data: {
          estates: result,
        },
      }, done);
  });

  afterAll(async () => {
    await app.close();
  });
});
