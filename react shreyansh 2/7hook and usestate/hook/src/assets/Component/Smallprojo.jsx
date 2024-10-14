import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Smallprojo() {

    const [val,setval] = useState(false)

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center '>
      <div className='relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden  '>
      <img className={`shrink-0 transition-transform duration-300 ease-in-out w-full ${val ? "-translate-x-[0%]" : "-translate-x-[100%]"} h-full object-cover`} src="https://images.unsplash.com/photo-1508610232556-b13ab6d792b2?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></img>
         <img className={`shrink-0 transition-transform duration-300 ease-in-out w-full ${val ? "-translate-x-[0%]" : "-translate-x-[100%]"} h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1664362416586-a22d5a081104?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></img>
         <span onClick={()=>setval(()=>!val)} className='w-8 h-8 bg-zinc-300 flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
         <FaArrowRightLong  size={"0.8em"}/>
         </span>
      </div>
    </div>
  )
}

export default Smallprojo
