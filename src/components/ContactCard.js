import React from 'react';
import user from "../assets/user.png"
import trashbin from '../assets/trashbin.png';
import './App.css'


const CardContact =(props) => {
    const {id, name, email,phone} = props.contact;
        return (
            <div className="item">
                <div className='icons'>
                <img className="avtr" src={user} alt="user"></img>
                
                <div className="content">
                <div className="name">{name}</div>
                <div>{email}</div>
                </div>
                <div className='num'>{phone}</div>
                <img src={trashbin} alt="trascan" className='trashicon'
                onClick={() =>props.clickHandler(id)}></img>
                </div>

            </div>
                
            
        );
};
export default CardContact;