import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai'
import { FaInstagramSquare, FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <IconContext.Provider value={{style: {fontSize: '30px'}}}>
            <div className='footer-container'>
                <div> <AiFillTwitterSquare /> </div>
                <div> <AiFillFacebook /> </div>
                <div> <FaInstagramSquare /> </div>
                <div> <FaGithubSquare /> </div>
            </div>
        </IconContext.Provider>
    )
}

export default Footer