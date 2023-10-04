const { json } = require("body-parser");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { Sequelize, DataTypes, QueryTypes } = require("sequelize");
const { sq } = require("./config/db");
const schema = require("./Schema/index");
require("./models");

const app = express();
app.use(express.json());

const context = async (req) => {
  const host = req.headers.host;
  const token = "sskfhkf";
  return { host, token };
};
app.use(
  "/graphql",
  // graphqlHTTP({
  //   schema: schema,
  //   graphiql: true,
  // })
  graphqlHTTP(async (req) => ({
    schema,
    graphiql: true,
    context: () => context(req),
  }))
);

app.listen(8080, () => {
  console.log("server is running on 8080 port");
});
