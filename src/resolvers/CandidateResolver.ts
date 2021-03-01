import { Resolver, Query } from "type-graphql";

@Resolver()
export class CandidateResolver {
  @Query(() => String)
  hello() {
    return "world";
  }
}