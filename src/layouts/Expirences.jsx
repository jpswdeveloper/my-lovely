import React from 'react'
import './exper.scss'
const Expirences = ({ Icons, title, span }) => {
    return (
        <div className="expContainer">
            <Icons className='icon' />
            <h4>{title}</h4>
            <span>{span}</span>
        </div>
    )
}

export default Expirences