import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const View = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/pet/adoptme/" + id)
      .then((result) => setInfo(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="single_pet">
      <div className="viewPet">
        <div className="side">
          <div>
            <img src={`http://localhost:3000/Images/${info.photo}`} />
          </div>
          <div style={{ marginTop: "30px" }}>
            <div className="petDetailsView">
              <h2 style={{ color: "orangered" }}>{info.petName}</h2>
            </div>
            <div className="petDetailsView">
              <p>Age : {info.age}</p>
              <p>Sex : {info.sex}</p>
            </div>
            <div className="petDetailsView">
              <p>Type : {info.petType}</p>
              <p>Color : {info.petColor}</p>
            </div>
            <div className="petDetailsView">
              <p>Breed : {info.petBreed}</p>
              <p>Address : {info.city}</p>
            </div>
            </div>
          </div>
        </div>
        <div className="ownerDetails">
              <h4 className="d">Details of the owner -</h4>
                <p>Name : {info.name}</p>
                <p>Email : {info.email}</p>
                <p>
                  Address : {info.city},{info.state},{info.country}
                </p>
                <p>Contact Number : {info.contactNumber}</p>
                <a
                href="/contact"
                type="submit"
                style={{
                  color: "white",
                  border: "1px solid orangered",
                  background: "orangered",
                  borderRadius: "5px",
                  height: "40px",
                  width: "100px",
                  padding:'10px 9px',
                  textDecoration:'none'
                }}
              >
                MESSAGE
              </a>
              </div>
      </div>
  );
};

export default View;
