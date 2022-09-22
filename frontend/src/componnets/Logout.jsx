import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

export const Logout = () => {
  const dispatch = useDispatch()
  const handlelogout = (e) => {
    e.preventDefault();


    dispatch(logout())
  }
  return (
    <div>
      <h1>WelCome , Krunal</h1>
      <button className='btn' onClick={(e) => handlelogout(e)}>Logout</button>
    </div>
  )
}
