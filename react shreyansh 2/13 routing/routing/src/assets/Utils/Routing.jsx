import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from '../Component/Home'
import User from '../Component/User'
import About from '../Component/About'

function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default Routing
