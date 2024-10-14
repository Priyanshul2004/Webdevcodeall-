import { useState } from "react"
import Cards from "./assets/Component/Cards"
import Form from "./assets/Component/Form"

function App() {
  
  const [users,setusers] = useState([])
  
  const handleFormsubmitdata = (data)=>{
    setusers([...users,data])
  }

  const handleremove = (id)=>{
    setusers(()=>users.filter((item,index)=> index!=id))
  }

  return (
    <div className="w-full h-screen bg-zinc-400 flex items-center justify-center">
       <div className="container mx-auto">
         <Cards handleremove={handleremove} users = {users}></Cards>
         <Form handleFormsubmitdata = {handleFormsubmitdata}></Form>
       </div>
    </div>
  )
}

export default App