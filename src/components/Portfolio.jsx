import React from 'react'
import PortDetailer from '../layouts/PortDetailer'
import '../style/portfolio.scss'
const Portfolio = () => {
    return (
        <div className='portfolio' id='port'>
            <div className="first-portfolio">
                <span className="info">My Recent Work</span>
                <h3>Portfolio</h3>
            </div>
            <div className='image-Holder'>
                <PortDetailer image='images/netflix.png' detail='Netflix Api integation' githubLink='https://github.com/ted-angel/Api-Integration-by-ted-angel' live='https://netflix-40g1shs6t-ted-angel.vercel.app' />
                <PortDetailer image='images/social.png' detail='Social Media Clone' githubLink='https://github.com/ted-angel/javascript-project/tree/JS-Exercise/Responsive_social_ted' live='https://tedo-social.vercel.app' />
                <PortDetailer image='images/jsapi.png' detail={'JavaScript Api Integration'} githubLink='https://github.com/ted-angel/javascript-project/tree/JS-Exercise/Tmbd_javaScript' live='https://my-js-api.vercel.app/' />
                <PortDetailer image='images/netflix.png' detail='Netflix Api integation' githubLink='https://github.com/ted-angel/Api-Integration-by-ted-angel' live='https://netflix-40g1shs6t-ted-angel.vercel.app' />
                <PortDetailer detail='responsive portfolio' image='images/one.png' githubLink={'#'} live='http://tedportfolios.herokuapp.com/' />
                <PortDetailer image='images/social.png' detail=' Social Media Clone' githubLink='https://github.com/ted-angel/javascript-project/tree/JS-Exercise/Responsive_social_ted' live='https://tedo-social.vercel.app' />

            </div>
        </div>
    )
}

export default Portfolio