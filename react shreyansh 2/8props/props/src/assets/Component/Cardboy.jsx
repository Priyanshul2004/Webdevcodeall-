import React from 'react'

function Cardboy({values,handleclick,index}) {
  const {image,name,profrssion,friends} = values
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden '>
      <div className='w-full h-32 bg-sky-200'>{<img className='w-full h-full object-covered' src={image}></img>}</div>
      <div className='w-full p-3'>
        <h3 className='text-xl'>{name}</h3>
        <h3 className='text-xs'>{profrssion}</h3>
        <button onClick={()=>handleclick(index)} className={`px-3 mt-2 py-1 text-xs
         test-white ${friends ? "bg-blue-500" : "bg-red-500"} font-semibold rounded-md `}>{friends ? "Friend" : "Add a friend"}</button>
      </div>
    </div>
  )
}

export default Cardboy
