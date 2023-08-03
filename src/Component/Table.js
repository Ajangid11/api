import React, { useEffect, useState } from 'react';


function Table () {

  //  const [localdata,setlocaldata]=useState([]);

  // useEffect(()=>{
  //    getdatafromls();
  // },[])

  
  // function getdatafromls(){
  //   var demo=localStorage.getItem('data');
  //   console.log(demo)
  //   if(demo!='' && demo!=undefined && demo!=' '){
  //     var demodata=JSON.parse(demo);
  //     if(Array.isArray(demodata)){
  //       setlocaldata(demodata);
  //     }
  //   }
  // }

  // function remove(id){
      // const newlist=localdata.filter((_,index)=>index!=id);
      // setlocaldata(newlist);
      // localStorage.setItem('data',JSON.stringify(newlist))
    
    
  // }

  return (
    <div>
         {/* <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>email</th>
              <th>phone</th>
              <th>website</th>
              <th colSpan={2}>Action</th>
            </tr>
        
        {
          localdata.map((data,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.website}</td>
              <td><button onClick={remove(index)}>Delete</button></td>
              
            </tr>
          ))
         }

            </table> */}
      

    </div>
  )
}
export default Table;
