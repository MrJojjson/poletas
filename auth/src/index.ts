import { resolve } from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import passport from "passport";
import { json } from "body-parser";
import { connect } from "mongoose";
import resolvers from "./resolvers";
import cors from "cors";

require("dotenv").config();

const schema = loadSchemaSync(resolve(__dirname, "schemas/*.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const app = express();

app.use(cors());
app.use(json());

connect(
  `mongodb+srv://MrJojjson:${process.env.MONGO_DB_CLOUD_KEY}@graphql.047oo.mongodb.net/graphql?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
)
  .then(() => console.log("Connected to AUTH database"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("./config/passport")(passport);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schemaWithResolvers,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Auth server is listening on port: ${PORT}`);
});
