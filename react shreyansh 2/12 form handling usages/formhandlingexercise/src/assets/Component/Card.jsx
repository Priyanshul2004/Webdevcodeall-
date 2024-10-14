import React from 'react'

function Card({user,handleremove,id}) {
  return (
    <div>
       <div className='w-32 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
                <div className='image w-10 h-10 rounded-full bg-zinc-300 overflow-hidden'>
                    <img className='w-full h-full object-cover' src={user.image} alt=''></img>
            </div>
            <h1 className='mt-1 text-xl font-semibold'>{user.name}</h1>
            <h4 className='opacity-60 text-xs font-semibold'>{user.email}</h4>
            <p className='mt-2 text-center text-xs font-semibold leading-1 tracking-tight'>I added an onSubmit function that will handle the form</p>
            <button onClick={()=>handleremove(id)} className='px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white m-4'>Remove it</button>
    </div>
    </div>
  )
}

export default Card
