import {Field, InputType, Int} from 'type-graphql';
import {EstateLocation} from './estate-location';

@InputType()
export class EstateInput {

  @Field(type => String)
  readonly title: string;

  @Field(type => Int)
  readonly price: number;

  @Field(type => Int)
  readonly squareMeters: number;

  @Field(type => Int)
  readonly bedrooms: number;

  @Field(type => Int)
  readonly bathrooms: number;

  @Field(type => String)
  readonly image: string;

  @Field(type => EstateLocation)
  readonly location: EstateLocation;
}
