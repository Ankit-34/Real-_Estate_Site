import { useState,useEffect } from 'react';
import './App.css';
import LandPage from './components/Landingpage/Landingpage';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import Details from "./components/Details/Details";


function App() {

  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  
  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', 
      {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    
    <>
      <Navbar auth={auth1}/>
      <Routes>
        <Route exact path="/" element={<LandPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
        <Route exact path="/details" element={<Details/>}/>
        <Route path="/home" element={<Navigate replace to="/" />} />
      </Routes>
    </>

  );
}

export default App;
