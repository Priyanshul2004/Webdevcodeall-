import React from 'react'

function Card({text,color}) {
  return (
    <div>
      <button className={`px-2  m-4 py-1 ${color} text-white`}>
        {text}
      </button>
    </div>
  )
}

export default Card
