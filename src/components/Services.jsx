import React from 'react'
import ServiceDetail from '../layouts/ServiceDetail'
import '../style/services.scss'
import { UilCheck } from '@iconscout/react-unicons'
const ted_ui_ux = [
    'Ecommerce Mobile App',
    'Furniture App',
    'Sell and Buy',
    'Music App Player'
];
const web_Development = [
    'My Amazon',
    'Hospital Management System',
    'Sell and Buy',
    'Memories'
]
const mobile_app = [
    'Love History Book',
    'Food App',
    'Music Player',
    'My Store'
]
const Services = () => {
    return (
        <div className='Services' id='service'>
            <div className="first-service">
                <span className="info">What I Offer</span>
                <h3>Services</h3>
            </div>
            <div className="second-service">
                <ServiceDetail Icons={UilCheck} header='UI/UX Development' details={ted_ui_ux} />
                <ServiceDetail Icons={UilCheck} header='Web Development' details={web_Development} />
                <ServiceDetail Icons={UilCheck} header='Mobile App Development' details={mobile_app} />
            </div>

        </div>
    )
}

export default Services
