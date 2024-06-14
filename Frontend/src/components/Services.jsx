import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import donate_pic from '../Images/donate.jpg'
import adopt_pic from '../Images/adopt.jpg'
import sos_pic from '../Images/sos.jpg'
import join_team from '../Images/jointeam.jpg'
const Services = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:3000/services",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? navigate("/services")
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  return (
    <>
    <h4 style={{ textAlign: "center" }} className="intro_main">
          {" "}
          Welcome <span>{username}</span> to FurryMate!
        </h4>
      <div  className="intro">
        <div className="services">
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={adopt_pic} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Adoption</h5>
              <p class="card-text">
              Explore our gallery of adorable pets waiting for a forever home.
              </p>
              <a href="/pet/adopt" class="btn" style={{backgroundColor:'orangered',color:'white'}}>
                Check Out
              </a>
            </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={join_team} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Join our team</h5>
              <p class="card-text">
                Become a part of furryMate. We would love you have you.
              </p>
              <a href="/join/team" class="btn" style={{backgroundColor:'orangered',color:'white'}}>
                Check Out
              </a>
            </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={donate_pic} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Donation</h5>
              <p class="card-text">
              We understand that
        parting with a pet is a difficult decision. Our team is here 
        to support you through the process, ensuring that your pet
        finds a loving and suitable new home.</p>
              <a href="/pet/donate" class="btn" style={{backgroundColor:'orangered',color:'white'}}>
                Check Out
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={sos_pic} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">SOS Report</h5>
              <p class="card-text">
             We respond promptly to ensure the safety
        and welfare of the animals. Your vigilance can save lives and provide urgent care to pets in critical situations.</p>
              <a href="/report/sos" class="btn" style={{backgroundColor:'orangered',color:'white'}}>
                Check Out
              </a>
            </div>
            </div>
        </div>
        {/* <p><span className='intro_tag'>For Adopters</span>: Visit <Link to='/pet/adopt'>this.</Link>
        Explore our gallery of adorable pets waiting for a forever home.</p>
        <p><span className='intro_tag'>For Donors</span>: Visit <Link to='/pet/donate'>this.</Link>We understand that
        parting with a pet is a difficult decision. Our team is here 
        to support you through the process, ensuring that your pet
        finds a loving and suitable new home.</p>
        <p><span className='intro_tag'>SOS reporting</span>: Visit <a href="#">this. </a>If you encounter 
        a pet in distress or in need of immediate help, our SOS reporting feature allows you to
        quickly alert our team. We respond promptly to ensure the safety
        and welfare of the animals. Your vigilance can save livesand provide urgent care to pets in critical situations.</p>
        <br/>
        Warm regards,
        <p>Team FurryMate</p>
         */}
      </div>
      <ToastContainer />
    </>
  );
};

export default Services;
