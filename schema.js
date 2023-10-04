const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

var db = require("./models");
const User = db.users;

const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    codeimprove: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        let data = [
          {
            id: 12,
            name: "renuka",
            email: "riaa@gmail.com",
            phone: 123456789,
          },
          {
            id: 13,
            name: "riaa",
            email: "renuka@gmail.com",
            phone: 123456889,
          },
        ];
        return data;
      },
    },
    userList: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        let data = User.findAll();

        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
