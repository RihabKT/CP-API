import React from 'react';


function User({image, id, name, email , phone, website}) {
  return (
    <div>
        <p> {image} </p>
        <h4> {id} </h4>
        <h3> {name} </h3>
        <p> {email} </p>
        <p> {phone} </p>
        <p> {website} </p>
        
    </div>
  )
}

export default User;