import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout ,selectUser } from '../features/userSlice';

export const Logout = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  const handlelogout = (e) => {
    e.preventDefault();


    dispatch(logout())
  }
  return (
    <div>
      <h1>WelCome , {user.username}</h1>
      <button className='btn' onClick={(e) => handlelogout(e)}>Logout</button>
    </div>
  )
}
