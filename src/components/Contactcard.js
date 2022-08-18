import React from 'react';
import { useNavigate } from 'react-router-dom';
import user from './user.png';

function Contactcard(props) {
    const navigate = useNavigate();
    const handleClick = ()=>{
      navigate("/add", {state:{id,name,email}})
    }
    const {id,name,email} = props.contact;
  return (
    <div className="item">
        <img className='ui avatar image' src={user}  alt = 'user'/>
        <div className="content">
            <div className="header" >{name}</div>
            <div>{email}</div>
        </div>
          <i className="edit outline icon" style={{color:"red", marginTop:"7px", marginInline:'5px' }} onClick={handleClick}></i>
        
        <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}} onClick ={()=>props.clickHandler(id)} ></i>
        
    </div>
  )
}

export default Contactcard
