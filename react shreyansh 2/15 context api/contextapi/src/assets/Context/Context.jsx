import React, { createContext } from 'react'
import { useState } from 'react'
export const Usercontext = createContext()

const Context = (props) => {
    

    const [user,setuser] = useState([
        {id:1,username:"priyanshul",email:"priyanshul@123",city:"india"},
        {id:2,username:"priyanshul22",email:"priyanshul@12322",city:"india22"},
        {id:3,username:"priyanshul33",email:"priyanshul@12333",city:"india33"}
    ])


    return <Usercontext.Provider value={{user,setuser}}>
        {props.children}
    </Usercontext.Provider>

}

export default Context
