import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import state, { setFriends, setPost } from "../state/state";
import axios from "axios";
import { useSnackbar} from 'notistack'
import { useNavigate } from "react-router-dom";
import {
  faUserPlus,
  faUserMinus,
  faHeart,
  faMessage,
  faCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as FaLineHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({ post }) => {
  const {enqueueSnackbar}=useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const loggedUser = useSelector((state) => state.user);

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
    enqueueSnackbar("FreindList Updated",{variant:"success"})
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
      enqueueSnackbar("Comment Posted",{variant:"success"})
    } catch (err) {
      console.error(err);
      enqueueSnackbar("Comment is Empty!",{variant:"error"})
    }
  };
  return (
    <div className="bg-slate-100 rounded-xl my-10 mt-[-1rem] p-3 md:p-4 container items-center mx-auto  shadow-slate-800">
      <div>
        <div>
          <div className="flex justify-between">
            <div
              className="flex"
              onClick={() => {
                navigate(`/profile/${post.userId}`);
              }}
            >
              {" "}
              <img
                src={
                  post.userPicturePath
                    ? post.userPicturePath
                    : "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043234-animal-avatar-bear-russian_113283.png"
                }
                alt="User-pic"
                className="h-11 w-11 md:h-16 md:w-16 rounded-full"
              />
              <div className="p-1 md:p-2">
                <p className="md:text-lg font-semibold text-slate-800">
                  {post.firstName} {post.lastName}
                </p>
                <p className=" md:text-md text-sm font-lightbold text-slate-700">
                  {post.location}{" "}
                </p>
              </div>
            </div>

{
  loggedUser._id===post.userId?(<p></p>):(
    <button
    onClick={handleFriend}
    className="text-white bg-slate-900 p-2 h-12 w-12 md:mr-2 md:mt-2  rounded-full hover:bg-slate-400 hover:shadow-slate-600  hover:text-slate-900 "
  >
    {isfriend ? (
      <FontAwesomeIcon icon={faUserMinus} />
    ) : (
      <FontAwesomeIcon icon={faUserPlus} />
    )}
  </button>
  )
}
          
          </div>
        </div>
        <p>{post.description}</p>
        {post.picturePath && (
          <img
            src={post.picturePath}
            alt="User-pic"
            className="md:h-[35rem] h-[50vh] md:w-[40vw] lg:w-[30vw] mx-auto w-[80vw] md:my-2 object-cover rounded-xl shadow-xl shadow-slate-500"
          />
        )}

        <div className="flex justify-between p-2 px-5 border-b-2 border-slate-400 text-lg">
          <div className="flex space-x-2">
            <button onClick={handleLike} className="text-xl">
              {isLiked ? (
                <FontAwesomeIcon icon={faHeart} />
              ) : (
                <FontAwesomeIcon icon={FaLineHeart} />
              )}
            </button>
            <p>{Object.keys(post.likes).length} Likes</p>
          </div>
          <button onClick={handleComment}>
            {post.comments.length}{" "}
            <FontAwesomeIcon icon={faMessage} />
          </button>
        </div>
        {isComments ? (
          <ul >
            {post.comments.map((comment) => {
              return <li className="border-b-2 border-slate-300 bg-slate-300 px-4 ">{comment}</li>;
            })}
          </ul>
        ) : (
          <></>
        )}
        <form action="" onSubmit={SubmitComment} className="flex my-2">
          <input
            type="text"
            placeholder="Your Comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="md:w-[40vw] lg:w-[25vw] w-[70vw] h-10 hover:bg-slate-900 hover:text-white text-slate-900 text-center bg-slate-300 rounded-full hover:shadow-2xl shadow-slate-900"
          />
          <button type="submit" className=""><FontAwesomeIcon icon={faCircleRight} className="h-10 w-10 rounded-full ml-2 hover:shadow-2xl hover:shadow-slate-900 hover:text-slate-300 hover:bg-slate-900"/></button>
        </form>
      </div>
    </div>
  );
};

export default Post;
