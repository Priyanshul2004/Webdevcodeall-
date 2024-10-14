import React from 'react'

const Card = () => {

  const data = [{img:"https://images.unsplash.com/photo-1717765697742-6b2f48f4a1fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",dec:"hello ji this sec decription",name:"aws",present:true},
    {img:"https://images.unsplash.com/photo-1717297324496-6360d02d9b5d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",dec:"this secon dec",name:"bmw",present:false}
  ]


  const handleclick = ()=>alert("kr diya ckick")


  return (
    <div className="w-full h-screen bg-zinc-200">
            
      {data.map((ele,idx)=>(
        <div className="w-52 px-3 py-4 bg-zinc-100  rounded-md">
                <div className="w-full h-32 bg-zinc-300">
                    <img className="w-full h-full object-cover" src={ele.img}></img>
                </div>
                <div className="w-full px-3 py-4">
                    <h2 className="font-semibold">{ele.name}</h2>
                    <p className="text-sm mt-3">{ele.dec}</p>
                    <button onClick={handleclick} className={`text-white ${ele.present ? "bg-green-300" : "bg-yellow-400" }`}> {ele.present ? "present" : "not present"}</button>
                </div>
            </div>
      ))}

        </div>
  )
}

export default Card
