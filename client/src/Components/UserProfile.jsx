import React from 'react'
import { useSelector } from 'react-redux'

const UProfile = ({owner}) => {  
    // const user = useSelector((state) => state.user);

  return (
    <div>
      <img src={owner.picturePath?owner.picturePath:"https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="} alt='User-pic' className='h-10 w-10' />
      <p>{owner.firstName} {owner.lastName}</p>
      <p>{owner.email}</p>
      <p>{owner.occupation}</p>
      <p>{owner.location}</p>
      <p>{owner.friends.length} Friends </p>
    </div>
  )
}

export default UProfile
