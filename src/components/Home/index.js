import React from 'react'
import LandingPage from '../LandingPage';
import HomeUser from '../Routes/home';

function UserHome({user, setUser,  ...rest}) {
  if(user){
    return(<HomeUser setUser={setUser} />)
  }
  return (
    <LandingPage/>
  )
}

export default UserHome