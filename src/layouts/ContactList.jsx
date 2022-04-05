import React from 'react'
import './contact.scss'
const ContactList = ({
    Icons, email, header, text
}) => {
    return (
        <div className='lets-talk'>
            <Icons className='letIcon' />
            <span className='email'>{email}</span>
            <span className='header'>{header}</span>
            <span className='text'> {text}</span>
        </div>
    )
}

export default ContactList