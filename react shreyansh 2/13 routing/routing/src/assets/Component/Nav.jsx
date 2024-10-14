import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav className='mt-10 flex justify-center gap-10'>
        <NavLink 
        style={(e)=>{
            return {
                color : e.isActive ? "tomato" : "",
                fontWeight : e.isActive ? "bold" : "" 
            }
        }}
         to="/">Home</NavLink>
        <NavLink 
        className={(e)=>{
            return [
                 e.isActive ? "text-red-400" : "",
                 e.isActive ? "font-bold" : ""
            ].join(" ")
        }}
        to="/about">About</NavLink>
        <NavLink 
         to="/user">User</NavLink>
        
        {(e)=>{
          return (
            <span className={[
                 e.isActive ? "text-red-400" : "",
                 e.isActive ? "font-bold" : ""
            ].join(" ")
            } >About</span>
          )
        }}
       
      </nav>
    </div>
  )
}

export default Nav
