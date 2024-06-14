import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div class="login">
      <h5 className="ltitle" style={{ textAlign: "center" }}>
        Signup
      </h5>
      <form onSubmit={handleSubmit}>
        <div class="lbox mb-3">
          <label class="form-label">Username</label>
          <input type="text" name="username" value={username} class="form-control" onChange={handleOnChange} />
        </div>
        <div class="lbox mb-3">
          <label for="exampleInputEmail1" class="form-label" >
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
          />
        </div>
        <div class="lbox mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            class="form-control"
            id="exampleInputPassword1"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" class="lbutton btn">
          Submit
        </button>
      </form>
      <p className="acc">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <ToastContainer/>
    </div>
  );
};

export default Signup;
