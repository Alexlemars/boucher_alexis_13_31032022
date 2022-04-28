import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"

import argentBankLogo from "../../assets/argentBankLogo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

  
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
      <div className='main-nav-sign'>

        <Link className='main-nav-item' to="/login">
        <FontAwesomeIcon className='main-nav-item-icon'  icon={faUserCircle}></FontAwesomeIcon>
          <p>Sign In</p>
        </Link>

        <Link className='main-nav-item-signup' to="/signup">
         Sign Up
        </Link>
        
      </div>
    </nav>
    </div>
  )
}
