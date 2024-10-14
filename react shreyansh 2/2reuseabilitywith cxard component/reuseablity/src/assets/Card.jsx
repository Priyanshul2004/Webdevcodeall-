import React from 'react'

function Card() {

    const data = [
        {image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:"Amazon basic",decription:"Explore, shop, discover, save - Amazon, your ultimate online destination."},
        {image: 'https://plus.unsplash.com/premium_photo-1669077047266-a809d1a66f29?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,name: "flip card" ,decription:"Flip, swipe, learn - Flipcard, your interactive learning companion." },
        {image: 'https://images.unsplash.com/photo-1653389527532-884074ac1c65?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name: "Zomato basic" ,decription:"Discover, explore, and dine with Zomato, your ultimate food companion."}
    ]

  return (
    <div className="w-full flex items-center justify-center gap-10  h-screen bg-zinc-200">
        {data.map((ele,ind)=>(
            <div className="w-52 px-3 py-4 bg-zinc-100  rounded-md overflow-hidden"> 
            <div className="w-full h-32 bg-zinc-300">
              <img className="w-full h-full object-cover" src={ele.image}></img>
            </div>
            <div className="w-full px-3 py-4">
                <h2 className="font-semibold">{ele.name}</h2>
                <p className="text-sm mt-3">{ele.decription}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Card
