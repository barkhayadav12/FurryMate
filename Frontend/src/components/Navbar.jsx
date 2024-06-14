import React, { useContext } from 'react'
import axios from 'axios'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate();
  const user=useContext(userContext)
  const handleLogout = () => {
    axios.get("http://localhost:3000/logout")
    .then(res=>{
      if(res.data=="Success")
      navigate('/');
    }).catch(err=>console.log(err))
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"black"}}>
      <div class="container">
        <a class="navbar-brand fs-4" href="#">FurryMate</a>
        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="sidebar offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header text-white border-bottom">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Quick Links</h5>
            <button
              type="button"
              class="btn-close btn-close-white shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
            <ul class="navbar-nav justify-content-center  align-items-center fs-5 flex-grow-1 pe-3 ">
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/services">Services</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
              </ul>
              {
                user.user?
                <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                <button onClick={handleLogout} class="btn text-white text-decoration-none px-3 py-1 rounded-4" style={{backgroundColor:"blue"}}>Logout</button>
                </div>
                :
                <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
              <a href="/login" class="text-white">Login</a>
              <a href="/signup" class="text-white text-decoration-none px-3 py-1 rounded-4" style={{backgroundColor:"blue"}}>Signup</a>
                </div>
              }
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar