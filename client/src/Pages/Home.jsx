import React from 'react'
import Navbar from '../Components/Navbar'
import UProfile from '../Components/UserProfile.jsx'
import Feeds from '../Components/Feeds'
import NewPost from '../Components/NewPost.jsx'
import { useSelector } from 'react-redux'
import FriendList from '../Components/FriendList.jsx'

const Home = () => {
  const user=useSelector((state)=>state.STATE.user);
  return (
    <div>
      <Navbar/>
      home
      <UProfile owner={user}/>
      <NewPost/>
      <Feeds userId={user._id}/>
      <FriendList owner={user}/>

    </div>
  )
}

export default Home
