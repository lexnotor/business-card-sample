import React from 'react'
import photo from '../../images/business.jpg'

const Profile = () => {
  return (
    <div className='profile-contenaire'>
      <figure>
        <img src={photo} alt="Profile de Laura" />
      </figure>
      <h1>Alexandre Chambu</h1>
      <p className='user-work'>Frontend Developer</p>
      <p className='user-website'>
        <a href="https://dev-lex-portfolio.pantheonsite.io/">pantheonsite.io</a>
      </p>
    </div>
  )
}

export default Profile