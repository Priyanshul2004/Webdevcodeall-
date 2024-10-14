import React, { useEffect, useState } from 'react'

const Services = () => {

    const [first,setfirst] = useState("this is normal data");
    const [second,setsecond] = useState("this is second data")


    useEffect(()=>{
        console.log("Services component is created");

        return ()=>{
            console.log("service component is deleted");
        }
    },[second])


  return (
    <div>
    

       <h1>{first}</h1>
       <button onClick={()=>setfirst("normal data has been bchanged")} className='mb-10 bg-red-200'>Change normal data</button>

        <h1>{second}</h1>
        <button onClick={()=>setsecond("second data has been changed")} className='mb-10 bg-red-200' >change second data</button>

      <h1>services</h1>
    </div>
  )
}

export default Services
