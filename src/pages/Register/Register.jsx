import React from 'react'
import "./Register.css"
import {  useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import SignUp from '../../component/sign/sign-up/sign-up';






export default function Register() {

  const { isLoggedIn } = useSelector(state => state.authUser);

  if (isLoggedIn) {
    return <Navigate to="/profile" />
  }
  
  return (
    <div>
      <SignUp/>
      </div>
    
  )
}
