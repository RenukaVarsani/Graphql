const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt,
} = require("graphql");

const StatusType = new GraphQLObjectType({
  name:'status',
  fields:()=>({
    success:{type:GraphQLBoolean},
    message:{type:GraphQLString},
    error:{type:GraphQLString},
  })
})


module.exports = StatusType;