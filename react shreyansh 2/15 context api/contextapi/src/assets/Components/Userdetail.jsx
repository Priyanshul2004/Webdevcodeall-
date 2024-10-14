import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Usercontext } from '../Context/Context';

const Userdetail = ()=>{
  const {id} = useParams();
  const {user} = useContext(Usercontext);
  console.log(user[id]);
  const Navigate = useNavigate();
  return <div>
    
    <h3>{user[id].username}</h3>
    <button
    onClick={()=> Navigate(-1)}
     className='px-2 py-1 bg-red-200 rounded-md '>Go Back</button>
  </div>
}

export default Userdetail
