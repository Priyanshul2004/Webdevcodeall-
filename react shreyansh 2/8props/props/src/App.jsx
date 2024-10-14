import { useState } from "react"
import Card from "./assets/Component/Card"
import Cardboy from "./assets/Component/Cardboy"

function App() {
  const data = [
    {name:"sahil",profrssion:"tech",
    image:"https://images.unsplash.com/photo-1559386484-97dfc0e15539?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"tiwari",profrssion:"cricketer",
    image:"https://images.unsplash.com/photo-1517231461833-7301fb461719?q=80&w=1869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"king",profrssion:"hockey",
    image:"https://images.unsplash.com/photo-1508179522353-11ba468c4a1c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"dog",profrssion:"basebale",
    image:"https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false}
  ]

  const [realdata,setrealdata] = useState(data)
  
  const handlebutton = (cardindexdx)=>{
       setrealdata((previous)=>{
          return  previous.map((item,index)=>{
          if(index === cardindexdx){
              return {...item,friends:!item.friends}
          }
          return item;
        })
       })
  }

  return (
   <div>

       {/* run this code when card compo is runing  */}
       {/* <Card text="Download" color="bg-blue-500"></Card>
       <Card text="Know more" color="bg-yellow-500"></Card> */}

      <div className="w-full gap-4  flex justify-center items-center h-screen bg-zinc-300">
      {realdata.map((item,index)=>(
        <Cardboy key={index} values={item} index={index} handleclick={handlebutton}></Cardboy>
      ))}

      </div> 

      
   </div>
  )
}

export default App
