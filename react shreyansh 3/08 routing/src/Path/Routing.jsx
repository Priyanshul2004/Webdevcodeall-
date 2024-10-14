import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from '../Component/Home'
import User from '../Component/User'
import About from '../Component/About'
import Userdetail from '../Component/Userdetail'


const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home></Home>}/>
        <Route path='/user/'  element={<User></User>}/>
        <Route path='/user/:name'  element={<Userdetail></Userdetail>}/>
        <Route path='/about'  element={<About></About>}/>
     </Routes>
    </div>
  )
}

export default Routing
