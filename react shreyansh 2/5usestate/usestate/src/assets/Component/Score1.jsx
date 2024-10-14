import { useState } from "react"
function Score1() {
    const [score,setscore] = useState(100)
  return (
    <div className="p-4">
    <h1 className="p-4">{score}</h1>
    <button onClick={()=>setscore(300)} className="px-2 p-4 py-1 mt-2 rounded-full tesxt-xs bg-blue-400 text-white">Change</button>
    </div>
  )
}

export default Score1
