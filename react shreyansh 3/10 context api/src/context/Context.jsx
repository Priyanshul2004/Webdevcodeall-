import React, { useState } from 'react'
import { createContext } from 'react';

export const UserContext = createContext();

const Context = () => {

    const [user,setuser] = useState([
        {id:0,username:"jhon"},
        {id:1,username:"sahil"}
    ])



    console.log(props);
  return <UserContext.Provider value={{user,setuser}}>
  {props.children}
  </UserContext.Provider>
}

export default Context
