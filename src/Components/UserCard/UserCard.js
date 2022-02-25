import React from 'react';
import './UserCard.css';



function UserCard({User}) {
  return (
    
    <div className="container">
  
  <div className="card">
    
  <img src=" https://bleedingcool.com/wp-content/uploads/2020/12/EitJnbZXkAAvp2T-1-copy-71-13-900x900.jpg " alt="Person" className="card__image"/>

    <h3 className="card__name"> {User.name} </h3>
    <h4> {User.id} </h4>
    <p className='email'> {User.email} </p>
    <p className='phone'> {User.phone} </p>
    <p className='website'> {User.website} </p>
    
    <ul className="social-icons">
      <li><a href="#"> <i className="fab fa-instagram"></i> </a></li>
      <li><a href="#"> <i className="fab fa-github"></i> </a></li>
      <li><a href="#"> <i className="fab fa-linkedin"></i> </a></li>
      <li><a href="#"> <i className="fab fa-youtube"></i></a></li>
    </ul>
    <button className="btn draw-border">Follow</button>
    <button className="btn draw-border">Message</button>
    </div>
    </div>
  )
}

export default UserCard;