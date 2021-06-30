const postsResolvers = require("./posts");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...postsResolvers.Mutation,
  },
};
