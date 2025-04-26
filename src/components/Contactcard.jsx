import React from 'react'
import user from './New folder/user.png' // importing image from images folder


function Contactcard({contact, clickHandler}) {
    
    return (
        <div>
            <div className='item'>
                <img className='ui avatar image' src={user} alt='user' />
                <div className='content'>
                    {/* <div >{contact.name}</div> also can be true*/}
                    <div className='header'>{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className='trash alternate outline icon' 
                style={{ color: 'red', marginTop: '7px' , cursor: 'pointer' }}
                onClick={() =>{clickHandler(contact.id)}}></i>
            </div>
        </div>
    )
}

export default Contactcard
