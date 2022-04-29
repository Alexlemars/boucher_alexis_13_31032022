import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import "./signIn.css";

import { login } from '../../../redux/actions/auth';


import { isEmail, isEmpty } from 'validator';


import Button from "../../button/Button";
import SignInput from "../sign-input/sign-input";
import Error from "../error/error";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

export default function SignIns() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.authUser);
  const { message } = useSelector((state) => state.message);

  

  const dispatch = useDispatch();

  useEffect(() => {
      const memoUserEmail = localStorage.getItem('memo-useremail');
      const memoUserPassword = localStorage.getItem('memo-userpassword');

      if ((memoUserEmail && memoUserPassword) !== null) {
          setUserName(memoUserEmail);
          setPassword(memoUserPassword);
          setRememberMe(true);
      } else {
          setUserName('');
          setPassword('');
          setRememberMe(false);
      }
  }, []);

  const [emailError, setEmailError] = useState('')

  const validateEmail = (e) => {
    var email = e.target.value
  
    if (isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }


 


  const handleLogin = (e) => {
    e.preventDefault();
    let is_mounted = true;

        if (is_mounted) {
            dispatch(login(userName, password, rememberMe))
                .then(() => {
                    window.location.reload();
                    return <Navigate to="/profile" />;
                })
                .catch((err) => {
                    console.log(err);
                });
                
        } 
        
    };

    if (isLoggedIn) {
        return <Navigate to="/profile" />;
    }




  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon
            className="sign-in-icon"
            icon={faUserCircle}
          ></FontAwesomeIcon>
          <h1 className="sign-in-title">Sign In</h1>
          <form action="" onSubmit={handleLogin}>
            <SignInput
              className="input-wrapper"
              label="Username"
              fors="username"
              type="text"
              name="Username"
              id="username"
              onChange={(e) => { 
                setUserName(e.target.value)
                
              } }
              value={userName}
            />
            <Error text={emailError} />
            <SignInput
              className="input-wrapper"
              label="Password"
              fors="password"
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value)

              }
               }
                  
              value={password}

            />
            <Error text={message} />
            <div className="input-remember">
              <input
                type="checkbox"
                size=""
                id="remember-me"
                name="remember-me"
                value={rememberMe}
                onChange={(e)=> setRememberMe(e.target.value.checked)}

              />
              <label htmlFor="remember-me">Remember me </label>
            </div>
            <Button type="submit" className="sign-in-button" value="Sign In" />
          </form>
        </section>
      </main>
    </div>
  );
}
