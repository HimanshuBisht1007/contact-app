import React, {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './Header';
import AddnewContact from './AddnewContact';
import ContactList from './Contactlist';
import api from '../api/Contacts';

function App() {

    const retriveContacts = async() =>{
    const response = await api.get("/contacts");
    return response.data;
  }
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = async(contact) =>{
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data])
  }

  const removeContactHandler = async(id)=> {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  const updateContactHandler = async(contact)=>{
    const response = await api.put(`./contacts/${contact.id}`,contact);
    setContacts(
      contacts.map((contact)=>{
        const {id} = response.data;
        return contact.id ===id?{...response.data}:contact
    }))
  }

  useEffect(()=>{
    const getAllContacts = async()=>{
      const allContacts = await retriveContacts();
      if(allContacts) setContacts(allContacts)
    }
    getAllContacts();
  });

  return (
    <div className='ui container'>
    <Router>
    <Header/>
    <Routes>
      <Route path='/add' element = {<AddnewContact  contacts = {contacts} updateContactHandler ={updateContactHandler} addContactHandler = {addContactHandler}/>}/>
      <Route path='/' element = {<ContactList contacts = {contacts} getContactId ={removeContactHandler}/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
