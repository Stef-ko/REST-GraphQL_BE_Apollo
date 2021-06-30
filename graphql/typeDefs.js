const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String
  }
  type Query {
    getPosts: [Post]
  }
  type Mutation {
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    updatePost(postId: ID!, body: String!): Post!
  }
`;
