import { Link, Route, Routes } from "react-router-dom"
import Home from "./assets/Components/Home"
import User from "./assets/Components/User"
import About from "./assets/Components/About"
import Userdetail from "./assets/Components/Userdetail"


function App() {

  return (
    <div className="p=1 w-1/2 m-auto">
      <nav className="mt-10 flex justify-center gap-10" >
        <Link to="/">Home</Link>
        <Link to="/About">about</Link>
        <Link to="/User">user</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/User" element={<User></User>}> </Route>
        <Route path="/User/:id" element={<Userdetail></Userdetail>}></Route>
      </Routes>

    </div>
  )
}

export default App
