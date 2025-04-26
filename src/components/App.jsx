import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';// this will generate a unique id for each contact
import Header from './Header';
import AddContact from './AddContact';
import ContactDetail from './ContactDetail'
import ContactList from './ContactList';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // this is the key to store the contacts in the local storage

  const dummyContactList = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com"
    }
  ];
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  }
  // this will remove the contact from the list


  // Load contacts from local storage
  useEffect(() => {
    const retrivalContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivalContacts && retrivalContacts.length > 0) { setContacts(retrivalContacts); }
    else {
      setContacts(dummyContactList)
    }
    // this will retrieve the contacts from the local storage
  }, []);

  // Save contacts to local storage whenever contacts change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // this will store the contacts in the local storage
    // JSON.stringify(contacts) will convert the contacts array to a string
  }, [contacts]);


  return (
    // <div className='ui container'>
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/'
            element={< ContactList contacts={contacts} deleteContactHandler={removeContactHandler} />}
          >
          </Route>

          <Route path='/add'
            element={<AddContact addContactHandler={addContactHandler} />
            }>
          </Route>
          <Route
            path="/contact/:id"
            element={<ContactDetail />}
          />
        </Routes>
      </Router>
    </div >
  );
}
export default App;


//contacts => empty array to store the contacts
//contact => actual data of name and email .
