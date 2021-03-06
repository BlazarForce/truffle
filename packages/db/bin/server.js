const { ApolloServer } = require("apollo-server");

const { TruffleDB } = require("@truffle/db");
const Config = require("@truffle/config");

const port = 4444;

const config = Config.detect({
  workingDirectory: process.argv[2] || process.cwd()
});

const db = new TruffleDB(config);

const { schema, context } = db;

const server = new ApolloServer({
  tracing: true,
  schema,
  context
});

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
