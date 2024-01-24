import USERS from "../Models/userModel.js";
import POSTS from "../Models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    if(!userId||!description||!picturePath){
      return res.status(409).json({ message:"Feilds incomplete" });
    }
    const user = await USERS.findById(userId);
    const newPost = new POSTS({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await POSTS.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
export const addComments=async(req,res)=>{
  try {
   const {id}=req.params;
   const {comment}=req.body;
   if(!comment){
    return res.status(409).json({ message:"Give Comment" });
  }
   const post= await POSTS.findById(id)
   post.comments.push(comment);
   await post.save();
   const updatedPost = await POSTS.findByIdAndUpdate(
    id,
    { comments: post.comments },
    { new: true }
  );  
   res.status(201).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const getFeedPosts = async (req, res) => {
  try {
    const post = await POSTS.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await POSTS.find({ userId });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};



  export const likePost = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const post = await POSTS.findById(id);
      const isLiked = post.likes.get(userId);
  
      if (isLiked) {
        post.likes.delete(userId);
      } else {
        post.likes.set(userId, true);
      }
  
      const updatedPost = await POSTS.findByIdAndUpdate(
        id,
        { likes: post.likes },
        { new: true }
      );
  
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };