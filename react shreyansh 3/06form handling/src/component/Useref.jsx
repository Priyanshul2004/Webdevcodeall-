import React from 'react'
import { useRef } from "react"

const Useref = () => {

    const name = useRef(null);
    const age = useRef(null);
    const handlesubmit = (event)=>{
          event.preventDefault()
          console.log(name.current.value,age.current.value);
    }

  return (
    <div>
       <form onSubmit={handlesubmit}>
            <input ref={name} type="text" placeholder="Name"></input>
            <input ref={age} type="text" placeholder="age"></input>
            <input type="submit"></input>
       </form>
    </div>
  )
}

export default Useref
