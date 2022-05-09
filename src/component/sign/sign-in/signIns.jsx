import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import "./signIn.css";

import { login } from '../../../redux/actions/auth';


import { isEmail } from 'validator';


import Button from "../../button/Button";
import SignInput from "../sign-input/sign-input";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

export default function SignIns() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [isEmailTrue, setisEmailTrue] = useState(false);
  const [isPasswordTrue, setPasswordTrue] = useState(false);

  const [messageErrorRequired, setmessageErrorRequired] = useState("");
  const [messageErrorEmail, setmessageErrorEmail] = useState("");

  

  const { isLoggedIn } = useSelector((state) => state.authUser);


  

  const dispatch = useDispatch();

  useEffect(() => {
      const memoUserEmail = localStorage.getItem('memo-useremail');
      const memoUserPassword = localStorage.getItem('memo-userpassword');

      if ((memoUserEmail && memoUserPassword) !== null) {
          setUserName(memoUserEmail);
          setPassword(memoUserPassword);
          setRememberMe(true);
          setisEmailTrue(true)
          setPasswordTrue(true)
          
      } else {
          setUserName('');
          setPassword('');
          setRememberMe(false);
          setisEmailTrue(false)
          setPasswordTrue(false)
      }
      console.log(memoUserEmail);
  }, []);

  

  const onChangeUsername = e => {
    const { value } = e.target;
    setUserName(value);
    if (isEmail(value)){
      setisEmailTrue(true)
    }
    else{
      setisEmailTrue(false)
    }
};

const onChangePassword = e => {
    const {value} = e.target;
    setPassword(value);
    if (value.length > 0){
      setPasswordTrue(true)
    }else{
      setPasswordTrue(false)
    }
};
 

  const handleLogin = (e) => {
    e.preventDefault();
    setmessageErrorRequired("")
    setmessageErrorEmail("")
        if (isEmailTrue && isPasswordTrue) {

            dispatch(login(userName, password, rememberMe))
                .then(() => {
                    window.location.reload();
                    return <Navigate to="/profile" />
                    
                })
                .catch((err) => {
                    console.log(err);
                });
                return function cleanup() {
                  setisEmailTrue(false);
                  setPasswordTrue(false);
                };
                
        } else if (!isEmailTrue ){
          setmessageErrorEmail("Invalid email format")
        } else if (!isPasswordTrue){
          setmessageErrorRequired("This field is required")
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
              onChange={onChangeUsername}
              value={userName}
              validations={messageErrorEmail}
            />
            
            <SignInput
              className="input-wrapper"
              label="Password"
              fors="password"
              type="password"
              name="password"
              id="password"
              onChange={onChangePassword}
              value={password}
              validations={messageErrorRequired}

            />
            <div className="input-remember">
              <input
                type="checkbox"
                size=""
                id="remember-me"
                name="remember-me"
                value={rememberMe}
                onChange={(e)=> setRememberMe(e.currentTarget.checked)}

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
