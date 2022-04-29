import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/auth'  

import argentBankLogo from "../../assets/argentBankLogo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

  const { isLoggedIn } = useSelector(state => state.authUser);

    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logout());
    };


  const IsConnected = (
    <div className="main-nav-sign">
            <Link className="main-nav-item" to="/profile">
            <FontAwesomeIcon className='main-nav-item-icon'  icon={faUserCircle}></FontAwesomeIcon>
            </Link>
            <Link className="main-nav-item" to="/" onClick={signOut}>
                <i className="fa fa-sign-out"></i>
                Sign out
            </Link>
        </div>
  )

  const isNotConnected = (

    <div className='main-nav-sign'>

        <Link className='main-nav-item' to="/login">
        <FontAwesomeIcon className='main-nav-item-icon'  icon={faUserCircle}></FontAwesomeIcon>
          <p>Sign In</p>
        </Link>

        <Link className='main-nav-item-signup' to="/signup">
         Sign Up
        </Link>
        
      </div>

  )



  return (
    <div>
        <nav className="main-nav">
        <Link className='main-nav-logo' to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {!isLoggedIn ? isNotConnected : IsConnected}
        
      
    </nav>
    </div>
  )
}