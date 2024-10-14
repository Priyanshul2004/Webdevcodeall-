import React from 'react';

function Card({data,handle,index}) {

    const {image,name,artist,added} = data

  return (
    <div className='w-60 h-32 bg-zinc-100 p-4 pb-8 rounded-md flex relative mt-20 gap-4'>
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img className='w-full h-full object-cover' src={image}></img>
      </div>
      <div className=''>
        <h3 className='text-xl font-semibold leading-none'>{name}</h3>
        <h6>{artist}</h6>
      </div>
      <button onClick={()=>handle(index)} className={`px-2 py-1 text-xs bottom-1 text-white rounded-full left-1/2 -translate-x-[50%] translate-y-[50%] ${added ? "bg-green-600" : "bg-orange-600"} absolute`}>{added ? "added" : "Add to favroutes"}</button>
    </div>
  );
}

export default Card;

