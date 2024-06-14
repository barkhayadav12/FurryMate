import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Donate = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [petType, setPetType] = useState();
    const [petName, setPetName] = useState();
    const [petColor, setPetColor] = useState();
    const [petBreed, setPetBreed] = useState();
    const [age, setAge] = useState();
    const [sex,setSex]=useState();
    const [photo,setPhoto]=useState();
    const navigate = useNavigate();
    function handleSubmit(e) {
      e.preventDefault();
      const formData=new FormData()
      formData.append('name',name)
      formData.append('email',email)
      formData.append('city',city)
      formData.append('state',state)
      formData.append('country',country)
      formData.append('contactNumber',contactNumber)
      formData.append('petType',petType)
      formData.append('petName',petName)
      formData.append('petColor',petColor)
      formData.append('petBreed',petBreed)
      formData.append('age',age)
      formData.append('sex',sex)
      formData.append('photo',photo)
      axios
        .post("http://localhost:3000/pet/create",formData)
        .then((result) => {
          if (result.data == "Success") {
            navigate("/pet/adopt");
          }
        //   console.log(result.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div className="support donate">
      <div>
        <h3 style={{ textAlign: "center", color: "burlywood" }}>Donate&#128008;</h3>
        <p class="text-muted" style={{ textAlign: "center", fontSize: "20px" }}>
          Fill the form below to donate your pet.
        </p>
      </div>
      <div class="formContent" style={{border:'3px solid orange',padding:'25px',borderRadius:'7px'}}>
        <form onSubmit={handleSubmit}>
          <div class="form-group" className="box">
            <div class="inBox">
              <label>Full name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Barkha Yadav"
              />
            </div>
            <div class="inBox">
              <label>Email address</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="xyz@gmail.com"
              />
            </div>
          </div>
          <div class="form-group" className="box">
            <div class="inBox">
              <label>City</label>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Imphal"
              />
            </div>
            <div class="inBox">
              <label for="exampleInputEmail1">State</label>
              <input
                type="text"
                onChange={(e) => setState(e.target.value)}
                placeholder="Manipur"
              />
            </div>
          </div>
          <div class="form-group" className="box">
            <div class="inBox">
              <label>Country</label>
              <input
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                placeholder="India"
              />
            </div>
            <div class="inBox">
              <label>Contact Number</label>
              <input
                type="number"
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="+91 0123456789"
              />
            </div>
          </div>
          <div class="form-group" className="box">
            <div class="inBox">
              <label>Pet Type</label>
              <input
                type="text"
                onChange={(e) => setPetType(e.target.value)}
                placeholder="E.g Dog"
              />
            </div>
            <div class="inBox">
              <label>Pet Name</label>
              <input
                type="text"
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Golu"
              />
            </div>
          </div>
          <div class="form-group" className="box">
            <div class="inBox">
              <label>Age</label>
              <input
                type="text"
                onChange={(e) => setAge(e.target.value)}
                placeholder="1,2,3..."
              />
            </div>
            <div class="inBox">
              <label>Sex</label>
              <input
                type="text"
                onChange={(e) => setSex(e.target.value)}
                placeholder="Male,female.."
              />
            </div>
            </div>
          <div class="form-group" className="box">
            <div class="inBox">
              <label>Pet Color</label>
              <input
                type="text"
                onChange={(e) => setPetColor(e.target.value)}
                placeholder="E.g Yellow"
              />
            </div>
            <div class="inBox">
              <label>Pet Breed</label>
              <input
                type="text"
                onChange={(e) => setPetBreed(e.target.value)}
                placeholder="German Shepherd"
              />
            </div>
          </div>
          <div class="form-group" className='box'>
  <div class='inBox'>
    <label>Your Pet's Image</label>
    <input type="file" onChange={(e)=>setPhoto(e.target.files[0])}/></div>
  </div>
          <button
            type="submit"
            style={{
              border: "1px solid orangered",
              background: "orangered",
              borderRadius: "5px",
              position: "relative",
              left: "35%",
              height: "40px",
              width: "130px",
              marginTop: "10px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Donate