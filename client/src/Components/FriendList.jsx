import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import state, { setFriends } from "../state/state";
import axios from "axios";
import Friend from "./friend";

const FriendList = ({owner}) => {
  const token = useSelector((state) => state.STATE.token);
  const friends = useSelector((state) => state.STATE.user.friends);
  const dispatch=useDispatch();

  const getFriends = async () => {
    const res = await axios.get(
      `http://localhost:3001/user/${owner._id}/friends`,
      {
        headers: { authorization: token },
      }
    );
    dispatch(setFriends({friends:res.data}));
  };
  useEffect(()=>{
    getFriends()
  },[])

  return (<div>
    <ul>
    {friends.map((friend)=>(
      <Friend value={friend} owner={owner}/>
))}
    </ul>
  </div>);
};

export default FriendList;
