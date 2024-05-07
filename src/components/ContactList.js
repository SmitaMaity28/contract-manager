import React from 'react';
import CardContact from "./ContactCard";
import './App.css'
const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {

        return <CardContact contact={contact} clickHandler={deleteContactHandler} key = {contact.id}></CardContact>;
    });
    return(
        <div className='contlist'>
            <ul >
             {renderContactList}
             </ul>
        </div>
    );
};

export default ContactList;