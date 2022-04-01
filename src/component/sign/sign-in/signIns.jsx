import React from 'react'
import "./signIn.css"

import Button from '../../button/Button';
import SignInput from '../sign-input/sign-input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function SignIns() {
  return (
    <div>
        <main className="main bg-dark">
      <section className="sign-in-content">
      <FontAwesomeIcon className='sign-in-icon'  icon={faUserCircle}></FontAwesomeIcon>
        <h1 className='sign-in-title'>Sign In</h1>
        <form>
          <SignInput
          className="input-wrapper"
          label="Username"
          fors="username"
          type="text"
          id="username"
          />
          <SignInput
          className="input-wrapper"
          label="Password"
          fors="password"
          type="password"
          id="password"
          />
          <div className="input-remember">
            <input type="checkbox" size="" id="remember-me" />
            <label for="remember-me">Remember me </label>
          </div>
          <Button
                    path="/user"
                    className="sign-in-button"
                    text="Sign In"
                />
   
        </form>
      </section>
    </main>
    </div>
  )
}
