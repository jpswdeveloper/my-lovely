import React from 'react'
import '../style/header.scss'
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilTelegramAlt } from '@iconscout/react-unicons'
const Header = () => {
    return (
        <div className="container" id='#'>
            <div className="header1">
                <h4>Hello, I'm</h4>
                <h2>Tedy Girma</h2>
                <h5>Full Stack Developer</h5>
                <div className="tedInformation">
                    <button className="downloadCv">Download Cv</button>
                    <button className='talk'>Let's Talk</button>
                </div>
            </div>
            <div className="header2">
                <div className="icons">
                    <UilGithub className='icon' />
                    <UilLinkedin className='icon' />
                    <UilTelegramAlt className='icon' />
                </div>
                <div className="imageHolder">
                    <img src="images/removed-pic1.png" alt="" />
                </div>
                <div className="mouseDetail"><span className='scroll'><a href='about'>Scroll Down</a></span></div>
            </div>
        </div >
    )
}

export default Header