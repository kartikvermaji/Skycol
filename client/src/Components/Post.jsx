import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import state, { setFriends, setPost } from "../state/state";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.STATE.token);
  const loggedUser = useSelector((state) => state.STATE.user);

  const [comment, setComment] = useState("");
  const isLiked = Boolean(post.likes[loggedUser._id]);
  const [isComments, setIsComments] = useState(false);
  const friends = loggedUser.friends;
  const isfriend = friends.find((friend) => friend._id === post.userId);
  const handleLike = async () => {
    const res = await axios.patch(
      `http://localhost:3001/posts/${post._id}/like`,
      {
        userId: loggedUser._id,
      },
      {
        headers: { authorization: token },
      }
    );
    dispatch(setPost({ post: res.data }));
  };
  const handleComment = async () => {
    setIsComments(!isComments);
  };
  const handleFriend = async () => {
    const res = await axios.patch(
      `http://localhost:3001/user/${loggedUser._id}/${post.userId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    dispatch(setFriends({ friends: res.data }));
  };
  const SubmitComment = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:3001/posts/${post._id}`,
        {
          comment: comment,
        },
        {
          headers: { authorization: token },
        }
      );
      dispatch(setPost({ post: res.data }));
      // navigate('/home');
      navigate(0);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div>
        <div
          onClick={() => {
            navigate(`/profile/${post.userId}`);
          }}
        >
          <img
            src={
              post.userPicturePath
                ? post.userPicturePath
                : "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
            }
            alt="User-pic"
            className="h-10 w-10"
          />
          <p>
            {post.firstName} {post.lastName}
          </p>
        </div>
        <button onClick={handleFriend}>
          {isfriend ? "Unfriend" : "Friend"}
        </button>
        <p>{post.location} </p>
        <img
          src={
            post.picturePath
              ? post.picturePath
              : "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
          }
          alt="User-pic"
          className="h-[15rem] object-cover rounded-md w-[11rem]"
        />
        <p>{post.description}</p>
        <p>{Object.keys(post.likes).length} Likes</p>
        <button onClick={handleLike}>{isLiked ? "Liked" : "Like"}</button>
        <button onClick={handleComment}>{post.comments.length}Comments</button>
        {isComments ? (
          <ul>
            {post.comments.map((comment) => {
              return <li>{comment}</li>;
            })}
          </ul>
        ) : (
          <></>
        )}
        <p>{comment}</p>
        <form action="" onSubmit={SubmitComment}>
          <input
            type="text"
            placeholder="Your Comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
