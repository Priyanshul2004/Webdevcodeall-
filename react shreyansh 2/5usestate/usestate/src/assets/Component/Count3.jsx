import React, { useState } from 'react'

function Count3() {
    const [val,setval] = useState(0)
  return (
    <div className="p-4">
    <h1 className="p-4">{val}</h1>
    <button onClick={()=>setval(val+1)} className="px-2 p-4 py-1 mt-2 rounded-full tesxt-xs bg-blue-400 text-white">addition</button>
    <button onClick={()=>setval(val-1)} className="px-2 p-4 py-1 mt-2 rounded-full tesxt-xs bg-blue-400 text-white">subtract</button>
    </div>
  )
}

export default Count3


// this type of code is also used inplace of onclik
// ()=>setval(val+1) 