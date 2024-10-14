import React, { useState } from 'react'

function Adv2() {

    const [val,setval] = useState([3,4,5,6,7,8,9,2])

  return (
    <div className='p-10'>
        {val.map((ele)=><h1>{ele}</h1>)}      
        <button onClick={()=>setval(()=>{
            return val.filter((ele,idx) => idx != val.length-1)
        })} className=' px-2 py-1 text-white bg-red-700'>CLick</button>
    </div>
  )
}

export default Adv2
