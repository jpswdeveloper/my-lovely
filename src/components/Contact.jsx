import React from 'react'
import ContactList from '../layouts/ContactList'
import '../style/contact.scss'
import { UilRocket } from '@iconscout/react-unicons'
import { UilTelegramAlt } from '@iconscout/react-unicons'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="left">
                <span className="info">Get In Touch</span>
                <h3>Contact Me</h3>
            </div>
            <div className="right">
                <div className="right-left">
                    <ContactList Icons={UilRocket} email='Email' header={'girted4@gmail.com'} text='Send Message' />
                    <ContactList Icons={UilTelegramAlt} email='Telegram' header={'@teda_ted'} text='Send Message' />
                    <ContactList Icons={UilRocket} email='Messenger' header={'tedgir@919'} text='Send Message' />
                </div>
                <div className="right-right">
                    <div className="form">
                        <input type="text" name="full" id="1" placeholder='Full Name' />
                        <input type="text" name="full" id="2" placeholder='Email' />
                        <textarea type="text" rows={3} col={5} name="full" id="" placeholder='Message' />
                    </div>
                    <button className='send'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact