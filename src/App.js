import React,{useEffect} from 'react';
import { Routes,Route } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import './App.css';


import Footer from './component/footer/footer';
import Header from './component/header/header';
import { getUserInfos } from './redux/actions/profile';
import { getCookie } from './services/use.cookie';


import Homepage from './pages/HomePage/Homepage';
import SignIn from './pages/SignIn/SignIn';
import Error from './pages/Error-404/Error-404';
import Profil from './pages/Profil/Profil';
import Register from './pages/Register/Register';




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie('signin-token');
    if (token) {
        dispatch(getUserInfos());
    }
}, [dispatch]);

  return (
    <div className="App">
      <Header/>
      

      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<SignIn/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        <Route path="/profile" element={<Profil/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>

      <Footer/>


    </div>
  );
}

export default App;
