import {Query, Resolver} from '@nestjs/graphql';
import {Estate} from './models/estate';
import {Observable, of} from 'rxjs';

@Resolver(of => Estate)
export class EstateResolver {

  @Query(returns => [Estate])
  estates(): Observable <Estate[]> {
    return of([
      {
        id: 1,
        name: 'test',
      },
    ]);
  }
}
