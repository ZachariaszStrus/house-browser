import {Field, InputType} from 'type-graphql';

@InputType()
export class EstateLocation {

  @Field(type => Number)
  readonly latitude: number;

  @Field(type => Number)
  readonly longitude: number;
}
