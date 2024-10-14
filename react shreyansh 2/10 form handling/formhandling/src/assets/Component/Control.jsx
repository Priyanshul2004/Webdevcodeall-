import React, { useState } from 'react'

function Second() {

    const [val,setval] = useState({name:""})

    const handle = (event)=>{
         event.preventDefault();
        console.log(val);
    }

  return (
    <div>
      <form action='' onSubmit={handle}>
         <input onChange={(event)=>setval({name: event.target.value})} placeholder='name' type='text'></input>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default Second
