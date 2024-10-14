import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'

function Userdetail() {
    const {name }= useParams();
    console.log(name);

    const navigate = useNavigate();


    const gobackhere = ()=>{
        // navigate("/user")
        navigate(-1)
    }

  return (
    <div className='m-auto bg-zinc-100 w-1/2'>
      <h1 className='text-5xl'>Userdetail</h1>
      <h1 className='text-green-900'>{name}</h1>
      <button onClick={gobackhere} className='bg-blue-200'>Go back</button>
    </div>
  )
}

export default Userdetail
