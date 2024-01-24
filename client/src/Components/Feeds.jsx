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

    <div className="container flex-col items-center mx-auto bg-slate-300 rounded-3xl    md:rounded-xl w-[90vw] md:w-[50vw] lg:w-[40vw] md:mt-10 md:my-4 md:px-4 flex">
      <div className="my-2">
      
      </div>
      {posts.length?(<ul>
        {posts.map((post) => (
         <Post post={post} key={post._id}/>
        ))}
      </ul>):(<p className="text-2xl font-semibold">No Posts To Display</p>)}
      
    </div>
    
  );
};

export default Feeds;
