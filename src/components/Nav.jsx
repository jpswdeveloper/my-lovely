import React, { useState } from 'react'
import '../style/nav.scss'
const Nav = () => {
    const [navChange, setNavChange] = useState('#')
    return (
        <div className='nav-container '>
            <ul>
                <li onClick={() => setNavChange('#')} className={navChange === '#' ? 'active' : ''}>
                    <a href="#">Home</a>
                </li>
                <li onClick={() => setNavChange('#about')} className={navChange === '#about' ? 'active' : ''}>
                    <a href="#about">About</a>
                </li>
                <li onClick={() => setNavChange('#Exper')} className={navChange === '#Exper' ? 'active' : ''}>
                    <a href="#exper">Experience</a>
                </li>
                <li onClick={() => setNavChange('#serv')} className={navChange === '#serv' ? 'active' : ''}>
                    <a href="#service">Services</a>
                </li>
                <li onClick={() => setNavChange('#port')} className={navChange === '#port' ? 'active' : ''}>
                    <a href="#port">Portfolio</a>
                </li>
            </ul>
        </div >
    )
}

export default Nav
