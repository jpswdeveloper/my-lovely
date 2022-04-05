import React, { useState } from 'react'
import Testi from '../layouts/Testi'
import '../style/testimonials.scss'
const Testimonials = () => {
    const [slider, setSLider] = useState(0);
    console.log(slider)
    const handleSlider = (e) => {
        setSLider(e)
    }
    return (
        <div className='testimonials'>
            <div className="first-testi">
                <span className="info">Review from clients</span>
                <h3>Testimonials</h3>
            </div>
            <div className="second-testi"
            >
                <div className="detailerSwitch" style={
                    { transform: `translateX(-${slider * 100}vw)` }
                }>
                    <div className="testHolder">
                        <div className='testi'>
                            <div className="imageCollection">
                                <img src="images/removed-pic1.png" alt="" />
                            </div>
                            <div className="para">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus odit error ut. Ipsum adipisci nesciunt est autem ab necessitatibus non consequuntur assumenda inventore earum! Facere, id nulla. Mollitia, quod id!
                            </div>
                        </div>
                    </div>
                    <div className="testHolder">
                        <div className='testi'>
                            <div className="imageCollection">
                                <img src="images/ted-cool.png" alt="" />
                            </div>
                            <div className="para">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus odit error ut. Ipsum adipisci nesciunt est autem ab necessitatibus non consequuntur assumenda inventore earum! Facere, id nulla. Mollitia, quod id!
                            </div>
                        </div>
                    </div>
                    <div className="testHolder">
                        <div className='testi'>
                            <div className="imageCollection">
                                <img src="images/ted-funny.png" alt="" />
                            </div>
                            <div className="para">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus odit error ut. Ipsum adipisci nesciunt est autem ab necessitatibus non consequuntur assumenda inventore earum! Facere, id nulla. Mollitia, quod id!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collections">
                    <span onClick={() => setSLider(0)}></span>
                    <span onClick={() => setSLider(1)}></span>
                    <span onClick={() => setSLider(2)}></span>
                </div>
            </div >

        </div >
    )
}

export default Testimonials