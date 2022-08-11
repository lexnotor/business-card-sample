import React from 'react'
import { MdEmail } from 'react-icons/md'
import { ImLinkedin } from 'react-icons/im'
import { IconContext } from 'react-icons'

const Contact = () => {
  return (
    <IconContext.Provider value={{style: {fontSize: '16px', verticalAlign: 'middle'}}}>
      <div className='contact-container'>
        <div className='contact-email' > <MdEmail /> Email</div>
        <div className='contact-linkedin' > <ImLinkedin /> LinkedIn</div>
      </div>
    </IconContext.Provider>
  )
}

export default Contact