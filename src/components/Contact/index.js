import React from 'react'
import { MdEmail } from 'react-icons/md'
import { ImLinkedin } from 'react-icons/im'
import { IconContext } from 'react-icons'

const Contact = () => {
  return (
    <IconContext.Provider value={{style: {fontSize: '16px', verticalAlign: 'middle'}}}>
      <div className='contact-container'>
        <div className='contact-email' >
          <a href="mailto:amanichambu48@gmail.com"><MdEmail /> Email</a>
        </div>
        <div className='contact-linkedin' >
          <a href="www.linkedin.com/in/alexandre-chambu-2a006b240"><ImLinkedin /> LinkedIn</a>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Contact