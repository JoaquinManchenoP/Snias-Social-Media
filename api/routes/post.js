const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

//create a new post

router.post("/", async (req, res) => {
  console.log('helllo');
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
})

//update  a post 
router.put("/:id", async (req, res) => {
   try {

    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId){
        await post.updateOne({$set:req.body});
        res.status(200).json('The post has been updated');
    }else{
        res.status(403).json('You can only update your own posts');
    }

   } catch (error) {
       res.status(500).json(error);
   }
})

//delete a post
router.delete("/:id", async (req, res) => {
    try {
     const post = await Post.findById(req.params.id);
     if(post.userId === req.body.userId){
         await post.deleteOne();
         res.status(200).json('The post has been deleted');
     }else{
         res.status(403).json('You can only delete your own posts');
     }
    } catch (error) {
        res.status(500).json(error);
    }
 })

//like/ unlike a post

router.put("/:id/like", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json("Liked");
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json("unliked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Get a post 
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

//Get post timeline
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    console.log(friendPosts);
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

// get users all post
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    console.log(req.params.username)
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;