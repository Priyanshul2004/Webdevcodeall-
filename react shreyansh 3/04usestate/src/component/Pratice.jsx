import React from 'react'
import { useState } from 'react'

const Pratice = () => {

    const [val,setval] = useState(false)

  return (
    <div>
      <h1>{val ? "baitho" : "bahar mat jyo"}</h1>
    </div>
  )
}

export default Pratice
