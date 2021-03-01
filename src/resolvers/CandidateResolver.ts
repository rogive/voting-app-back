import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Candidate } from "../models/Candidate";
import { UpdateCandidateInput } from "../inputs/UpdateCandidateInput";

@Resolver()
export class CandidateResolver {
  @Query(() => [Candidate])
  candidates() {
    return Candidate.find();
  }

  @Mutation(() => Candidate)
  async updateCandidate(
    @Arg("id") id: string,
    @Arg("data") data: UpdateCandidateInput
  ) {
    const candidate = await Candidate.findOne({ where: { id } });
    if (!candidate) throw new Error("Candidate not found!");
    Object.assign(candidate, data);
    await candidate.save();
    return candidate;
  }

}
