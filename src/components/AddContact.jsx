import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddContact({ addContactHandler }) {
    const navigate = useNavigate();
    const [contact, setContacts] = useState({ name: "", email: "" });

    const add = (e) => {
        //class component method declaration needs no const keyword.
        e.preventDefault(); // Prevent the default form submission behavior
        if (contact.name === "" || contact.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        addContactHandler(contact); // Call the addContactHandler function passed from the parent component
        setContacts({ name: "", email: "" }); // Reset the state after adding the contact
        navigate("/"); //Redirect to Contact List page
    };

    return (
        < div className="ui main " >
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                {/* You are passing a reference to the function this.add. */}
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={contact.name}
                        //This means the input value is controlled by React state | this.state.name-> that will be shown in the input box.
                        onChange={(e) => setContacts({ ...contact, name: e.target.value })}
                    // update the state when user types something in the input box | e.target.value-> the value of the input box.
                    />

                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        value={contact.email}
                        //This means the input value is controlled by React state | this.state.name-> that will be shown in the input box.
                        onChange={(e) => setContacts({ ...contact, email: e.target.value })}
                    // update the state when user types something in the input box | e.target.value-> the value of the input box.
                    />

                </div>
                <button className="ui button blue right">Add Contact</button>
            </form>
        </div >
    )
}

export default AddContact;
// Compare this snippet from contactlist/src/components/ContactList.jsx: