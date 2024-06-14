import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Services from "./components/Services";
import { createContext } from "react";
import axios from "axios";
import Adopt from "./components/Adopt";
import Donate from "./components/Donate";
import View from "./components/View";
import Contact from "./components/Contact";
import Sos from './components/Sos'
import JoinTeam from "./components/JoinTeam";
export const userContext=createContext()

function App() {
  const [user,setUser]=useState({})
  axios.defaults.withCredentials=true
  useEffect(()=>{
    axios.get("http://localhost:3000/")
    .then(user=>{
      setUser(user.data);
    }).catch(err=>console.log(err))
  })
  return (
    <userContext.Provider value={user}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/pet/adopt" element={<Adopt/>}></Route>
        <Route path="/report/sos" element={<Sos/>}></Route>
        <Route path="/pet/donate" element={<Donate/>}></Route>
        <Route path='/pet/adoptme/:id' element={<View/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/join/team" element={<JoinTeam/>}></Route>
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
