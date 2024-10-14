import React from 'react'
import Card from './Card'


function Cards({users,handleremove}) {
  return (
    <div className='w-full max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
      {users.map((item,index)=>{
        return <Card handleremove={handleremove} id={index} user = {item} key={index}></Card>
      })}
    </div>
  )
}

export default Cards
