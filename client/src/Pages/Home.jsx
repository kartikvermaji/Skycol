import React from "react";
import Navbar from "../Components/Navbar";
import UProfile from "../Components/UserProfile.jsx";
import Feeds from "../Components/Feeds";
import NewPost from "../Components/NewPost.jsx";
import { useSelector } from "react-redux";
import FriendList from "../Components/FriendList.jsx";

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="bg-slate-300  ">
      <Navbar />
      <div className=" p-2 lg:p-2 ">
        <UProfile owner={user} />
        <div className="container mx-auto items-center left-2 md:left-[20vw] lg:left-[0vw]  md:relative z-1">
          <NewPost />
          <Feeds userId={user._id} />
        </div>
        <FriendList owner={user}  />
      </div>
    </div>
  );
};

export default Home;
