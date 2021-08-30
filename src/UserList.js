
import axios from 'axios';
import React  from "react";
import {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

function UserList (){
    const [list, setList] = useState([])
    const getUser=()=>{ 
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{console.log(response)
    const aUser= response.data;
    setList(aUser)
    })
    }
    useEffect(() => getUser(), []); 
    
    const handleClick=()=>{
        const myelement=<div>
        {
            list.map((user) => (
                <h4 key={user.id}>
                     <div> this is the user with the Id: '{user.id}'and the name {user.name}</div>    
                </h4> 
            ))
        }
    </div>;
    ReactDOM.render(myelement, document.getElementById('userList'));
    }
        return (
            <div>
                <div id='userList'></div>
                <button onClick={handleClick}>click here to see users</button>
            </div>

        )
        
    
};
export default UserList;
