import React, { useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import UProfile from "../Components/UserProfile.jsx";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import FriendList from "../Components/FriendList.jsx";
import Feeds from "../Components/Feeds.jsx";

const Profile = () => {
  const [user, setUser] = useState(null);
  const {userId} = useParams();
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const res = await axios.get(`https://skycol-server.onrender.com/user/${userId}`, {
      headers: { authorization: token },
    });
    setUser(res.data);
  };
  useEffect(() => {
    getUser();
  }, []);
  if (!user) return null;

  return (
    <div>
      
      <Navbar />
      PROFILE
      <div className="bg-slate-300 p-2 lg:p-2 mt-10 h-[100vh]">
      <UProfile owner={user} />
      <div className="container mx-auto items-center left-2 md:left-[20vw] lg:left-[0vw]  md:relative z-1">
        <Feeds userId={user} isProfile  /></div>
      
      <FriendList owner={user}/>
      
      </div>
      
    </div>
  );
};

export default Profile;
