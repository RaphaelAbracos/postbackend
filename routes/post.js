const router = require("express").Router();
const Post = require("../models/Post");

router.post("/add/Post", (req, res) => {
  let validate = false
  for (var i = 0; i < req.body.tags.length; i++){
    if (req.body.tags[i].length <= 10 && req.body.tags[i].length > 0){
      validate = true
    }
  }
  if (validate == true || req.body.tags.length === 0){
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
    });
    newPost
      .save()
      .then(() => {
        console.log("Successfully added Post!");
        res.redirect("/");
      })
      .catch((error) => res.status(400).send({error: "Registration failed"}));
  }else res.status(400).send({error: "tag cannot be more than 100 characters"});
});

router.get("/delete/Post/:_id", (req, res) => {
  const { _id } = req.params;
  Post.deleteOne({ _id })
    .then(() => {
      console.log("Deleted Post succesfully!");
      res.redirect("/");
    })
    .catch((error) => res.status(400).send({error: "Failed to delete post"}));
});

router.post("/edit/Post/:_id", (req, res) => {
  let validate = false
  for (var i = 0; i < req.body.tags.length; i++){
    if (req.body.tags[i].length <= 10 && req.body.tags[i].length > 0){
      validate = true
    }
  }
  if (validate == true || req.body.tags.length === 0){
    const { _id } = req.params;
    Post.findByIdAndUpdate(_id, req.body)
      .then(() => {
        console.log("Updated Post succesfully!");
        res.redirect("/");
      })
      .catch((error) => res.status(400).send({error: "Update failed"}));
  }else res.status(400).send({error: "tag cannot be more than 100 characters"});
});

module.exports = router;
