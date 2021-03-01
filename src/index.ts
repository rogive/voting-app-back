import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CandidateResolver } from "./resolvers/CandidateResolver";

async function main() {
  const connection = await createConnection();
  const schema = await buildSchema({ resolvers: [CandidateResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Server has started!");
}

main();
