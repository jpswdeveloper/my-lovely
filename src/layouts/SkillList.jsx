import React from 'react'
import './skillList.scss'
const SkillList = ({ Icons, Title, Specify }) => {
    return (
        <div className='skillList'>
            <Icons className='myIcon' />
            <div className="skillDesc">
                <span className='title'>{Title}</span>
                <span className='span'>{Specify}</span>
            </div>
        </div>
    )
}

export default SkillList