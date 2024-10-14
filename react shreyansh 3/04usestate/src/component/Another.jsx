import React from 'react'
import { useState } from 'react'

const Another = () => {

    const  [val,setval] = useState({name:"sahil",bool:true})

  return (
    <div>
      <h1>this is val : {val.name}</h1>
      <h1>this is bool : {val.bool.toString()}</h1>
      <button onClick={()=>setval({...val,bool: !val.bool})} className={`${val.bool ? "bg-blue-400" : "bg-red-400"} px-2 py-2`}>change bool</button>
    </div>
  )
}

export default Another
