const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name:'user',
  fields:()=>({
    id:{type:GraphQLInt},
    name:{type:GraphQLString},
    email:{type:GraphQLString},
    status:{type:GraphQLString},
    gender:{type:GraphQLString},
  })
})


module.exports = UserType;