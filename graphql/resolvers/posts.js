const Post = require("../../models/Post");

module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find().sort({ createdAt: "desc" });
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createPost(_, { body }) {
      if (body.trim() === "") {
        throw new Error("Post must not be empty");
      }

      const newPost = new Post({
        body,
        username: "mock username",
        createdAt: new Date().toISOString(),
      });

      const post = await newPost.save();
      console.log("Post created via GraphQL");
      return post;
    },
    async deletePost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        await post.delete();
        console.log("Post " + postId + "deleted via GraphQL");
        return "Post " + postId + " deleted successfully via GraphQL";
      } catch (err) {
        throw new Error(err);
      }
    },
    async updatePost(_, { postId, body }) {
      try {
        const post = await Post.findByIdAndUpdate(
          postId,
          { body: body },
          { rawResult: true }
        );
        //TODO Old value gets returned
        console.log("Post " + postId + " updated successfully via GraphQL");
        return post.value;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
