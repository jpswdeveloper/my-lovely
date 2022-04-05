import React from 'react'
import '../style/experience.scss'
import { UilRocket } from '@iconscout/react-unicons'
import SkillList from '../layouts/SkillList'
const Experience = () => {
    return (
        <div className="experience" id='exper'>
            <div className="exp2">
                <span className="info">Get To Know</span>
                <h3>My Experiences</h3>
            </div>
            <div className="exp3">
                <div className="left">
                    <h3>Front-End Development</h3>
                    <div className="myskills">
                        <SkillList Icons={UilRocket} Title={'Html'} Specify={'experienced'} />
                        <SkillList Icons={UilRocket} Title={'Css'} Specify={'experienced'} />
                        <SkillList Icons={UilRocket} Title={'JavaScript'} Specify={'advanced'} />
                        <SkillList Icons={UilRocket} Title={'Bootstrap'} Specify={'experienced'} />
                        <SkillList Icons={UilRocket} Title={'React'} Specify={'advanced'} />
                        <SkillList Icons={UilRocket} Title={'Flutter'} Specify={'advanced'} />
                        <SkillList Icons={UilRocket} Title={'Tailwind'} Specify={'advanced'} />
                        <SkillList Icons={UilRocket} Title={'React Native'} Specify={'advanced'} />
                    </div>
                </div>
                <div className="right">
                    <h3>Back-End Development</h3>
                    <div className="myskills">
                        <SkillList Icons={UilRocket} Title={'Node JS'} Specify={'experienced'} />
                        <SkillList Icons={UilRocket} Title={'GraphQl'} Specify={'experienced'} />
                        <SkillList Icons={UilRocket} Title={'Php'} Specify={'advanced'} />
                        <SkillList Icons={UilRocket} Title={'MERN'} Specify={'experienced'} />
                        <SkillList Icons={UilRocket} Title={'Express'} Specify={'advanced'} />
                        <SkillList Icons={UilRocket} Title={'Nest JS'} Specify={'advanced'} />
                        <SkillList Icons={UilRocket} Title={'Laravel'} Specify={'advanced'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience