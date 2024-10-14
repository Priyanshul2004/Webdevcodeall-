import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='mt-10 flex justify-center gap-10'>
        <Link className='text-red-900 text-4xl md:hover:bg-fuchsia-600' to="/">Home</Link>
        <Link to="/user">Use</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

export default Nav
