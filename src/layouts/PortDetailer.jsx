import React from 'react'
import './detailerPort.scss'
const PortDetailer = ({ image, detail, githubLink, live }) => {

    return (
        <div className='portImage'>
            <div className="imagePort">
                <img src={image} alt="" />
            </div>
            <div className="describer">
                {detail}
            </div>
            <div className="buttonHolder">
                <button className="github"><a href={githubLink}>GitHub</a></button>
                <button className="live"><a href={live}>Live</a></button>
            </div>
        </div>
    )
}

export default PortDetailer