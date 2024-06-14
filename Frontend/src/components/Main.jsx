import React from "react";
const Main = () => {
  return (
    <div>
      <div className="homePage">
        <div className="content">
          <h1>
            <span style={{ color: "orangered" }}>Adopt</span> Me
          </h1>
          <p>Give life to an animal in need. </p>
        </div>
      </div>
      <div id="about">
        <p>
          <span className="title">Welcome to FurryMate!</span>
          <br />
          <br />A place where compassion meets companionship. We are a dedicated
          team of animal enthusiasts committed to making a difference in the
          lives of furry friends. Our mission is simple yet powerful : to
          connect deserving animals with loving homes. With a passion for animal
          welfare, we strive to create a platform that not only facilitates
          adoptions but also fosters a community of caring individuals. Join us
          in our journey to give every animal a chance for a happy,loving home.
        </p>
        <p>Our goal is to connect pets in need with compassionate owners, ensuring
        that every animal has a chance to live a happy and healthy life.</p>
        <br />
        <h5>Want to join our team?</h5>
        <p>
          Kindly fill this <a href="/join/team">form</a>
        </p>
      </div>
      <div id="contact">
        <h3 style={{ textAlign: "center", color: "burlywood" }}>Contact us</h3>
        <p class="text-muted" style={{ textAlign: "center", fontSize: "14px" }}>
          We would love to hear from you.
        </p>
        <div
          class="formContent"
          style={{
            border: "3px solid orange",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <form>
            <div class="form-group" id="box">
              <div id="inBox shadow-none">
                <label>Full name</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Barkha Yadav"
                />
              </div>
              <div id="inBox">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  required
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="xyz@gmail.com"
                />
              </div>
              <div id="inBox">
                <label>Message</label>
                <textarea
                  required
                  placeholder="Write a message..."
                  type="text"
                  class="form-control"
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  color: "white",
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
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="clink">
         <div className="c_links">
         <i class="bi bi-telephone-fill"></i>
          Phone Number
          <br/>
          +123456789
         </div>
         <div className="c_links">
         <i class="bi bi-envelope-fill"></i>
          Email Address
          <br/>
          furrymate@gmail.com
         </div>
         <div className="c_links">
         <i class="bi bi-geo-alt-fill"></i>
          Our Office
          <br/>
          Imphal,Manipur,India
         </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
