var db = require("../../models");
const User = db.users;
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const UserType = require("../TypeDefs/UserType");
const StatusType = require("../TypeDefs/StatusType");

module.exports.UserAdd = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    await User.create({
      name: args.name,
      email: args.eamil,
      gender: args.gender,
    });
  },
};

module.exports.UpdateUser = {
  type: StatusType,
  args: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
     await User.update(
      {
        name: args.name,
        email: args.eamil,
        gender: args.gender,
      },
      { where: { id: args.id } }
    );
    return {
        success:true,message:"success",error:" "
    }
  },
};

module.exports.DropUser = {
  type: StatusType  ,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
     await User.destroy(
     
      { where: { id: args.id } }
    );
    return {
        success:true,message:"success",error:" "
    }
  },
};

