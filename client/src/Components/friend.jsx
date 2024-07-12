import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../state/state.js";

import {
  faUserPlus,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Friend = ({ value, owner }) => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const isfriend = friends.find((friend) => friend._id === value._id);

  const handleFriend = async () => {
    const res = await axios.patch(
      `https://skycol-server.onrender.com/user/${user._id}/${value._id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    dispatch(setFriends({ friends: res.data }));
  };

  return (
    <div className="flex my-2 border-b-2 pb-2 border-slate-400 justify-between">
     
      <div className="flex " onClick={() => {
                navigate(`/profile/${value._id}`);
              }}>
        <img
          src={
            value.picturePath
              ? value.picturePath
              : "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043234-animal-avatar-bear-russian_113283.png"
          }
          alt="User-pic"
          className="h-16 w-16 rounded-full"
        />
        <div className="p-2">
          <p className="text-lg font-semibold ">
            {value.firstName} {value.lastName}
          </p>
          <p className="text-slate-500">{value.occupation}</p>
        </div>
      </div>
    
{user._id===value._id?(<p></p>):( <button onClick={() => handleFriend()} className="mr-2 bg-slate-900 text-slate-100 h-12 w-12 mt-2  hover:bg-slate-300 hover:text-slate-900 rounded-full">
        {isfriend ? <FontAwesomeIcon icon={faUserMinus} /> :<FontAwesomeIcon icon={faUserPlus} />}
      </button>)}
     
    </div>
  );
};

export default Friend;
