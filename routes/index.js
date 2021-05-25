const router = require("express").Router();
const Post = require("../models/Post");
router.get("/", async (req, res) => {
  const allPosts = await Post.find();
  res.render("index", { post: allPosts });
});

router.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  const post = await Post.findById(_id);
  res.render("edit", { post: post });
});

module.exports = router;
