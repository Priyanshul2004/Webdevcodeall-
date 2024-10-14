import React, { useState } from 'react'

const Controll = () => {
    const [val,setval] = useState({name:""})
    const handlesubmit = (event)=>{
        event.preventDefault();
        console.log(val);
    }

  return (
    <div>
      <form action='' onSubmit={handlesubmit}>
        <input onChange={(event)=>setval({...name,name:event.target.value})} type='text' placeholder='name'></input>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default Controll
