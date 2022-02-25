import React, { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';
import axios from 'axios';
import './UserList.css';

const UserList = () =>{

const [Users, setUsers]= useState([]);
const fetchUsers = () =>{
    axios.get(" https://jsonplaceholder.typicode.com/users ")
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
}

useEffect( () => {
    fetchUsers ()
}, [])

return(
    <div className='GridUser'>
        {Users.map((el,i) => <UserCard User={el} key={i} />)}
    </div>
)

}



export default UserList;