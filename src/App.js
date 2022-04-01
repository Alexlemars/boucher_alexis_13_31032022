import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';

import Footer from './component/footer/footer';
import Header from './component/header/header';


import Homepage from './pages/HomePage/Homepage';
import SignIn from './pages/SignIn/SignIn';
import Error from './pages/Error-404/Error-404';
import Profil from './pages/Profil/Profil';
import Register from './pages/Register/Register';


function App() {
  return (
    <div className="App">
      <Header/>
      

      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/signUp" element={<Register/>}></Route>
        <Route path="/user" element={<Profil/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>

      <Footer/>


    </div>
  );
}

export default App;
