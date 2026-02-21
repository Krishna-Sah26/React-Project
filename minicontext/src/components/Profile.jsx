import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const {user} = useContext(UserContext);
  if(!user){
    return <div>
      <h2>please login</h2>
    </div>
  }
  return <div>Welcome {user?.username}</div>
}

export default Profile
