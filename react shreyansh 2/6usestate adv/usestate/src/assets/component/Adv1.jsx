import React, { useState } from 'react'

function Adv1() {
    const [val,set] = useState({name:"sahil",isbanded:true})
  return (
    <div className="p-4">
         <h1>{val.name}</h1>
         <h1>{val.isbanded.toString()}</h1>
         <button onClick={()=>set({...val,isbanded:!val.isbanded})} className={`${val.isbanded ? "bg-blue-600" : "bg-red-500"} mt-3 rounded-sm`}>Change</button>
    </div>
  )
}

export default Adv1
