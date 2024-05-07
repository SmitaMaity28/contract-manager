import React from 'react';
import { useState, useEffect} from 'react';
import "./App.css";
import { uuid } from 'uuidv4';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import './App.css'
function App() {
    
     const LOCAL_STORAGE_KEY = "contacts";
     const [contacts, setContacts] = useState([]);

     const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts,{id:uuid(),...contact}]);
     };

     const removeContactHandler = (id) => {
      const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
      });
      setContacts(newContactList);
     };

     ///extra adding
     useEffect(() => {
      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, null));
      if (retriveContacts) setContacts(retriveContacts);
    }, []);
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
    //end here.

  return (
    <div className='maincontainer'>
      {/* <Router> */}
      <Header></Header>
      {/* <Route path ="/add" component = {AddContact} />
      <Route path ="/" component = {ContactList} /> */}
      <AddContact addContactHandler = {addContactHandler}></AddContact>
      <ContactList contacts={contacts} getContactId= {removeContactHandler}/>
      {/* </Router> */}
    </div>
    //   <Header></Header>
    //   <AddContact addContactHandler = {addContactHandler}></AddContact>
    //   <ContactList contacts={contacts} getContactId= {removeContactHandler}/>
    //</div>
  );
}

export default App;
