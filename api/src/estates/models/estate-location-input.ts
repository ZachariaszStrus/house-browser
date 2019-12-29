import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
export class EstateLocationInput {

  @Field(type => String)
  readonly type: string;

  @Field(type => [Number])
  readonly coordinates: number[];
}

@ObjectType()
export class EstateLocation {

  @Field(type => String)
  readonly type: string;

  @Field(type => [Number])
  readonly coordinates: number[];
}
