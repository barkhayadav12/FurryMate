import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Adopt = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/pet/viewPost")
      .then((info) => setInfo(info.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div class="adopt">
      <h4 class="stitle"
        style={{ textAlign: "center", marginTop: "80px", color: "black" }}
      >
        Every pet deserves a loving home, <br/><span style={{color:'orange'}}>Adopt</span> a pet today.
      </h4>
      <p class='sintro' style={{textAlign:'center'}}>Browse our available animals and learn more about the adoption process. Together
      we can <span style={{color:'orange'}}>rescue, rehabilitate, and rehome </span>pets in need. Thank you for supporting our mission to bring joy to families through pet adoption.</p>
      <div className="AllPets">
        {info.map((post) => {
          return (
              <div className="pets">
                <img
                  src={`http://localhost:3000/Images/${post.photo}`}
                />
                <div className="petDetails">
                  <h2 style={{color:'orangered'}}>{post.petName}</h2>
                </div>
                <div className="petDetails">
                  <p>Age : {post.age}</p>
                  <p>Sex : {post.sex}</p>
                </div>
                <div className="petDetails">
                  <p>Type : {post.petType}</p>
                  <p>Color : {post.petColor}</p>
                </div>
                <div className="petDetails">
                  <p>Breed : {post.petBreed}</p>
                  <p>Address : {post.city}</p>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <Link style={{textDecoration:'none', border:'1px solid orange',padding:'10px',color:'white',backgroundColor:'orangered',borderRadius:'10px'}} to={`/pet/adoptme/${post._id}`}>Adopt me</Link>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Adopt;
