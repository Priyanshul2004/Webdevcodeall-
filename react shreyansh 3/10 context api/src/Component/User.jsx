import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/Context';

const User = () => {
  const [user] = useContext(UserContext);

  return (
    <div>
      <h1 className='text-4xl'>User list</h1>
      <div className='mt-10 bg-blue-100 w-1/3'>
        {user.map(u => (
          <Link to={`/user/${u.id}`} className='p-3' key={u.id}>
            {u.id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;

