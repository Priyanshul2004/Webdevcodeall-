import {Link, Route, Routes} from 'react-router-dom'
import Home from "./Component/Home"
import User from './Component/User'
import About from './Component/About'

function App() {


  return (
    <div className='p-[5%] w-1/4  m-auto'>
      <nav className='mt-10 flex justify-center gap-10 '>

      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/about">About</Link>


      </nav>


       <Routes>
         
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/user' element={<User></User>}></Route>
         <Route path='/about' element={<About></About>}></Route>


       </Routes>


    </div>
  )
}

export default App
