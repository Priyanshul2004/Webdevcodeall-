import React, { useState } from 'react'

function Truefalse2() {

    const [val,setval] = useState(false)

  return (
    <div className="p-4">
    <h1 className="p-4">{val.toString()}</h1>
    <button onClick={()=>(setval(!val))} className="px-2 p-4 py-1 mt-2 rounded-full tesxt-xs bg-blue-400 text-white">Change</button>
    </div>
  )
}

export default Truefalse2
