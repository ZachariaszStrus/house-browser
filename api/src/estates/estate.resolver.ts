import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Estate } from './models/estate';
import { EstateService } from './estate.service';
import { EstateInput } from './models/estate-input';
import {generateEstates} from '../utils/generate-estates';

@Resolver((of) => Estate)
export class EstateResolver {
  constructor(private estateService: EstateService) {}

  @Query((returns) => [Estate])
  async estates(): Promise<Estate[]> {
    return this.estateService.findAll();
  }

  @Mutation((returns) => Estate)
  async createEstate(@Args('input') input: EstateInput): Promise<Estate> {
    return this.estateService.create(input);
  }

  @Mutation((returns) => Estate)
  async updateEstate(
    @Args('id') id: string,
    @Args('input') input: EstateInput,
  ): Promise<Estate> {
    return this.estateService.update(id, input);
  }

  @Mutation((returns) => Estate)
  async deleteEstate(@Args('id') id: string): Promise<Estate> {
    return this.estateService.delete(id);
  }

  @Mutation((returns) => Number)
  async populateEstates(@Args('count') count: number): Promise<number> {
    await this.estateService.deleteAll();
    return this.estateService.createAll(generateEstates(count));
  }
}
