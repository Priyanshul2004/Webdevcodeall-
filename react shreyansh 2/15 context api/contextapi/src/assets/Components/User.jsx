import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Usercontext } from '../Context/Context'

const User = () => {

  const { user, setuser } = useContext(Usercontext)

  return (
    <div>
      <h1 className='text-4xl'>User List</h1>
      <div className='flex flex-col mt-10 '>
        {user.map((u) => (
          <Link key={u.id} to={`/user/${u.id}`} className='p-3 bg-red-100 mb-5'>{u.username}</Link>
        ))}
      </div>
    </div>
  )
}

export default User
