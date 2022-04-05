import React from 'react'
import Expirences from '../layouts/Expirences'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilWindowSection } from '@iconscout/react-unicons'
import { UilGraduationCap } from '@iconscout/react-unicons'
import { Uil3Plus } from '@iconscout/react-unicons'
import '../style/about.scss'
const About = () => {
    return (
        <div className="containerAbout" id='about'>
            <div className="firstAbout">
                <span className="info">Get To Know</span>
                <h3>About Me</h3>
            </div>
            <div className="secondAbout">
                <div className="imageHolder">
                    <div className="imgages"></div>
                    <div className="imageHolder2">
                        <img src="images/removed-pic1.png" alt="" />
                    </div>
                </div>
                <div className="infoHolder">
                    {/* Info Button */}
                    <div className="infos">
                        <Expirences Icons={UilWindowSection} title='Projects' span={'80+ projects'} />
                        <Expirences Icons={Uil3Plus} title='Experiences' span={'3+ years'} />
                        <Expirences Icons={UilGraduationCap} title='Qualification' span={'Engineer'} />
                    </div>
                    {/* Description */}
                    <div className="desc">
                        Hi.... My name is Tedy Girma.I have
                        BSC Degree in electrical and computer engineering by computer engineering stream within the
                        cumulative GPA 3.28 I am graduated from DIRA DAWA University.
                    </div>
                    {/* butttom */}
                    <div className='buttons'>
                        <button className='talk'>Let's Talk</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About