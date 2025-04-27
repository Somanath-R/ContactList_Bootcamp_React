import React from 'react'
import { Link } from 'react-router-dom'
import Contactcard from './Contactcard'

function ContactList({ contacts, deleteContactHandler }) {

    const renderContactList = contacts.map((contact) => {
        return (
            <Contactcard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id} />
            // this is the correct way to use map function in react
        )
    })
    // const renderContactList = (props.contacts.map) =>{}    // this give error because map will take another new argument

    return (
        <div className="main">
            
                <Link to='/add'>
                    <button className='ui button blue right'>Add Contact</button>
                </Link>
            
            <div className='ui celled list'>
                <h2>Contact</h2>
                <Link to='/add'>
                    <button className='ui button blue right'>back</button>
                </Link>
                {renderContactList}
            </div>
            
        </div>
    )
}

export default ContactList
