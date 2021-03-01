import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateCandidateInput {
  @Field()
  votes: number;
}
