import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFriends } from '../state/state.js';

import axios from 'axios'

const Friend = ({value,owner}) => {
    const user = useSelector((state) => state.user)
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
    const dispatch=useDispatch()

    const isfriend=friends.find((friend)=>friend._id===value._id)

    const handleFriend=async()=>{
        const res=await axios.patch( `http://localhost:3001/user/${user._id}/${value._id}`,{},
        {
              headers:{authorization:token}
        })
        dispatch(setFriends({friends:res.data}))
    }

  return (
    <div>
         <img
                src={
                  value.userPicturePath
                    ? value.userPicturePath
                    : "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                }
                alt="User-pic"
                className="h-10 w-10"
              />
      <p>{value.firstName} {value.lastName}</p>
      <p>{value.occupation}</p>
      <button onClick={()=>handleFriend()}>{isfriend?"UnFriend":"Friend"}</button>
    </div>
  )
}

export default Friend
