import React from "react"


function App() {

  const data = [{song:"Mahiya ve" , decription:"to a medium-sized container, even though the parent"},
                {song:"Laila mai laila" , decription:"Answer Discover, explore, and dine with Zomato, your ultimate food companion"},
                {song:"jay ho" , decription:" your ultimate food companion container, even"}
  ]


  const handleclickdownload = ()=>{alert("downloading start")}

  return (
    <div className="w-full h-screen bg-zinc-300  flex flex-col gap-10 justify-center items-center">
    {data.map((ele,idx)=>(<div className="w-80 px-3 py-2 bg-zinc-100 rounded-md max-w-md">
      <h3 className="font-semibold text-xl">{ele.song}</h3>
      <p className="text-xs mt-3">{ele.decription}</p>
      <button onClick={handleclickdownload} className="px-2 py-1 bg-blue-600 text-xs font-semibold text-zinc-100 rounded mt-3">Download</button>
    </div>))}
  </div>
  )
}

export default App
 