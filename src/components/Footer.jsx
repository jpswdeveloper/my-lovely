import React from 'react'
import '../style/footer.scss'
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilTelegramAlt } from '@iconscout/react-unicons'
const Footer = () => {
    return (
        <div className='footer2'>
            <div className="footer">Tedo  Angel</div>
            <div className="footer">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <div className="links">
                <UilGithub className='icon' />
                <UilLinkedin className='icon' />
                <UilTelegramAlt className='icon' />
            </div>
            <div className="licence">
                @Tedo-Exercises. All rights reserved
            </div>
        </div>
    )
}

export default Footer