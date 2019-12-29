import {Field, InputType, Int} from 'type-graphql';

@InputType()
export class EstateFilter {

  @Field(type => Int, { nullable: true })
  readonly minPrice: number | null;

  @Field(type => Int, { nullable: true })
  readonly maxPrice: number | null;

  @Field(type => Int, { nullable: true })
  readonly minSize: number | null;

  @Field(type => Int, { nullable: true })
  readonly maxSize: number | null;

  @Field(type => [Int], { nullable: true })
  readonly bedrooms: number[] | null;
}
