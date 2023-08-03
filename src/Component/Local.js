import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Local () {

 const [post,setpost]=useState();

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{setpost(response.data)})
    localStorage.setItem('data',JSON.stringify(post))
  },[post]);

  if(!post) return "no post";

  function remove(index){

    // const newlist=post.filter((_,index)=>index!=id);
    //   setpost(newlist);
    //   localStorage.setItem('data',JSON.stringify(newlist))
    localStorage.clear();

    
  }

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
              <th>Action</th>
            </tr>
            
            {
                post.map((data,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.website}</td>
                        <td><button onClick={remove(index)}>delete</button></td>
                    </tr>
                ))
            }
            </table>

    </div>
  )
}

export default Local;