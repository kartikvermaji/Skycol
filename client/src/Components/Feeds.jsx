import axios from "axios";
import React, { useState } from "react";
import { setPosts } from "../state/state.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Post from "./Post.jsx";


const Feeds = ({ userId, isProfile = false }) => {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await axios.get("http://localhost:3001/posts", {
      headers: { authorization: token },
    });
    dispatch(setPosts({ posts: response.data }));
  };
  const getUserPosts = async () => {
    const response = await axios.get(
      `http://localhost:3001/posts/${userId._id}/posts`,
      {
        headers: { authorization: token },
      }
    );
    dispatch(setPosts({ posts: response.data }));
  };
  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []);


  return (

    <div>
      {isProfile?<p>Users' Posts</p>:<p>Feeds</p>}
      <ul>
        {posts.map((post) => (
         <Post post={post} key={post._id}/>
        ))}
      </ul>
    </div>
    
  );
};

export default Feeds;
