import React from 'react'
import './serviceDetail.scss'
const ServiceDetail = ({ header, Icons, details }) => {

    return (
        <div className='serviceDetail'>
            <div className="header">{header}</div>
            <div className="Detail">
                {details.map((detailer, index) => (
                    <div className="detail1" key={index}>
                        <Icons className='myIcon' />
                        <div className="skillDesc">
                            <span className='span'>{detailer}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ServiceDetail