const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const { USER_LIST, USER_LIST2,USER_DETAILS } = require("./Queries/User");
const {UserAdd,UpdateUser, DropUser} = require("./Mutations/User")


const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    userList: USER_LIST,
    codeimprove:USER_LIST2,
    userDetails: USER_DETAILS,

  },
});

const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    createUser:UserAdd,
    updateUser:UpdateUser,
    dropUser:DropUser
  },
});



module.exports = new GraphQLSchema({ query: RootQuery ,mutation:Mutation});
