import React from 'react'
import photo from '../../images/pic.png'

const Profile = () => {
  return (
    <div className='profile-contenaire'>
        <figure>
            <img src={photo} alt="Profile de Laura" />
        </figure>
        <h1>Laura Smith</h1>
        <p className='user-work'>Frontend Developer</p>
        <p className='user-website'>laurasmith.website</p>
    </div>
  )
}

export default Profile