import React from 'react'
import {Link} from 'react-router-dom';

const User = () => {
  return (
    <div className='m-auto bg-zinc-100 w-1/2'>
      <h1 className='text-5xl'>User</h1>
      {/* <p>he value prop of the input element is set to val.name. This makes the input a controlled component, ensuring that the value displayed in the input field always reflects the state.</p> */}

      
      <div className='flex w-1/2 flex-col mt-5'>

      <Link to={"/user/sahil"}>Sahil</Link>
      <Link to={"/user/saurabh"}>Saurabh</Link>
      <Link to={"/user/utpal"}>Utpal</Link>
      </div>
    </div>
  )
}

export default User
