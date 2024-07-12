import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import state, { setFriends, setOtherFriends } from "../state/state";
import axios from "axios";
import Friend from "./friend";

const FriendList = ({owner}) => {
  const user=useSelector((state)=>state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const dispatch=useDispatch();
  const[tempFriends,setTempFriends]=useState([])

  const getFriends = async () => {
    const res = await axios.get(
      `https://skycol-server.onrender.com/user/${owner._id}/friends`,
      {
        headers: { authorization: token },
      }
    );
    if(user._id===owner._id){
      dispatch(setFriends({friends:res.data}));
      setTempFriends(res.data);  
    }else{
      dispatch(setOtherFriends({friends:res.data}));
      setTempFriends(res.data);
    }  
  };
  useEffect(()=>{
    getFriends()
  },[owner])

  return (<div>
    <ul className="bg-slate-100  hidden lg:block p-4 my-24 h-auto rounded-xl shadow-2xl shadow-slate-900 w-[90vw]  md:fixed md:top-10 md:right-8 md:w-[32vw]  lg:top-14 lg:right-16 lg:w-[20vw]">
      <h1 className="text-xl font-semibold text-center">Friend List</h1>
    {tempFriends.map((friend)=>(
      <Friend value={friend} owner={owner} key={friend._id}/>
))}
    </ul>
  </div>);
};

export default FriendList;
