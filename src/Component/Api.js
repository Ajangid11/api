import React from 'react';
import axios from 'axios';

import { useEffect,useState} from 'react';


function Api () {
    const[post,setpost]=useState([]);


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{setpost(response.data)})
        // .catch(err=>console.log(err))
    },[]);

  
   
    if(!post)return "no post!"


  return (
    <div>
            <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>email</th>
              <th>phone</th>
              <th>website</th>
            </tr>
    {
        post.map((r,i)=>(
            <tr>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.username}</td>
              <td>{r.email}</td>
              <td>{r.phone}</td>
              <td>{r.website}</td>
            </tr>
            
            ))
        }    
          </table>               


    </div>
  )
}
export default Api;
