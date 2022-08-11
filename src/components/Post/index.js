import React from 'react'

const Post = ({titre, children}) => {
  return (
    <div className='post-container'>
        <h4>{titre}</h4>
        <p>{children}</p>
    </div>
  )
}

export default Post