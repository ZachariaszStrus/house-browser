import {Field, ID, Int, ObjectType} from 'type-graphql';
import {EstateLocation} from "./estate-location";

@ObjectType()
export class Estate {

  @Field(type => ID)
  readonly id?: string;

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
}
