import React from 'react'
import { useSelector } from 'react-redux'
import state from '../state/state'
import axios from "axios"
import { useState } from 'react'

const NewPost = () => {
    const user=useSelector((state)=>state.STATE.user)
    const token=useSelector((state)=>state.STATE.token)
    const[image,setImage]=useState("");
    const[description,setdescription]=useState("");
    const [postOption,setPostOption]=useState(false)

    const handlePostOption=async()=>{
     setPostOption(!postOption);
    }
    const handlePost=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post("http://localhost:3001/posts",{
              userId:user._id,
              description:description,
              picturePath:image
            },{
              headers:{authorization:token}
            });
            alert("New post Uploaded!");
          } catch (err) {
            console.error(err);
          }
    }

  return (
    <div>
      <img src={user.picturePath?user.picturePath:"https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="} alt='User-pic' className='h-10 w-10' />
      {postOption?(<div>
       <form action=""  onSubmit={handlePost}>
        <input type="text" placeholder='Image Link' value={image} onChange={(e)=>setImage(e.target.value)}/>
        <input type="text" placeholder='Description' value={description} onChange={(e)=>setdescription(e.target.value)}/>
        <button type='submit'>Post</button>
       </form >
       </div>):(<>
        <input type="text" placeholder='Wanna Post Something?' onClick={handlePostOption} /></>)}
    </div>
  )
}

export default NewPost
