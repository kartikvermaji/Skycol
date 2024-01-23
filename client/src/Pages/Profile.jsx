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
  const token = useSelector((state) => state.STATE.token);

  const getUser = async () => {
    const res = await axios.get(`http://localhost:3001/user/${userId}`, {
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
      <UProfile owner={user} />
      <FriendList owner={user}/>
      <Feeds userId={user} isProfile  />
      
    </div>
  );
};

export default Profile;
