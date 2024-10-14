import React, { useState } from 'react'

function First1() {

    const [val,setval] = useState(false)

  return (
    <div  className='p-10'>
      <h1>
        {val === true ? "bahar ja sakte ho madarchodo " :  " jhaat kisis ko bahar nhi jaqne du ga"}
      </h1>
      <button onClick={()=>setval(!val)} className='bg-red-500 mt-3 rounded-sm text-white'>Chick here</button>
    </div>
  )
}

export default First1
