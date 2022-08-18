import React from 'react'
import Contactcard from './Contactcard'
import { Link } from 'react-router-dom';

function Contactlist(props) {
    const deleteContactHandler = (id)=>{
      props.getContactId(id)
    };
    
    const renderContactList = props.contacts.map((contact,key=contact.name)=>{
        return(
           <Contactcard contact ={contact} clickHandler={deleteContactHandler} key = {contact.id}/>
        )
    })
  return (
    <div className="main" >
      <h3>Contact List</h3>
      <Link to='/add'><button className='ui button blue right'>Add Contact</button></Link>        
      <div className='ui celled list'>
      {renderContactList}
      </div>
    </div>
  )
}

export default Contactlist
