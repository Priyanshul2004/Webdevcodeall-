import Navbar from "./assets/Component/Navbar";
import Card from "./assets/Component/Card";
import { useState } from "react";

function App() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1588032786045-59cefda005c0?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "hello hello",
      artist: "Sahil",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1633291149383-63ba721a6e30?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "dil kehta hai",
      artist: "Priyanshul",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1543363981-472adada6e48?q=80&w=1723&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "holle holle",
      artist: "Saurabh",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1503506584117-5ed92741077a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "kaha ho ",
      artist: "Utpal",
      added: true
    }
  ];

  const [songdata, setsongdata] = useState(data);
  const handleclick = (index)=>{
    setsongdata((previous)=>{
      return previous.map((item,itemindex)=>{
        if(itemindex === index) return {...item,added: !item.added}
        return item
      })
    })
  }

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 ">
        <Navbar data={songdata} />
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songdata.map((obj,index) => {
            return <Card key={index} data={obj} handle={handleclick} index={index} />
          })}
        </div>
      </div>
    </>
  );
}

export default App;
