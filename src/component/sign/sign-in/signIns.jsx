import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import "./signIn.css";


import { isEmail, isEmpty } from 'validator';
import Button from "../../button/Button";
import SignInput from "../sign-input/sign-input";
import Error from "../error/error";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function SignIns() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

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
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <Error text="" />
            <SignInput
              className="input-wrapper"
              label="Password"
              fors="password"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Error text="" />
            <div className="input-remember">
              <input
                type="checkbox"
                size=""
                id="remember-me"
                name="remember-me"
                value={rememberMe}
                onChange={(e)=> setRememberMe(e.target.value)}

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
