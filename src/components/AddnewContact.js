import React, {useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const Addcontact = (props) => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const findName = ()=>{
      return location.state?location.state.name:""
    }
    const findEmail = ()=>{
      return location.state?location.state.email:""
    }
    
    const foundEmail = findEmail();
    const foundName = findName(); 
    
    const [newName, setnewName] = useState(foundName);
    const [newEmail, setnewEmail] = useState(foundEmail);
    

    const add = (e) =>{
      e.preventDefault();
      if(newName ==="" || newEmail==="" ){
        alert("fill all the feilds")
        return;
      }
      else if(location.state){
        const newObj = {id:location.state.id,name:newName,email:newEmail};
        props.updateContactHandler(newObj);
        setnewName('');
        setnewEmail('');
        navigate('/');
        return;
      }
      const newObj = {name:newName,email:newEmail};
      props.addContactHandler(newObj);
      setnewName('');
      setnewEmail('')
      navigate("/");
    }

  return (
    <div className='ui main'>
      <h2>{location.state?"Update Contact":"Add Contact"}</h2>
      <form className='ui form' onSubmit={add}>
        <div className="feild">
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Name' value={newName} onChange={(e)=>setnewName(e.target.value)}/>
        </div>
        <div className="feild">
            <label htmlFor="">Email</label>
            <input type="text" name='email' placeholder='Email' value={newEmail} onChange={(e)=>setnewEmail(e.target.value)}/>
        </div>
        <button className='ui button blue' type='submit' style={{marginTop:'10px'}}>{location.state?"Update":"Add"}</button>
      </form>
    </div>
  )
}

export default Addcontact
