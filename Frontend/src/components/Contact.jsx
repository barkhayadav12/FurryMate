import React from 'react'

const Contact = () => {
  return (
    <div className='ctop'>
    <p className='cfill' style={{textAlign:'center', fontSize:'14px'}}>Fill the form below
    <br/>Our team will get in touch with you asap</p>
    <div
    className='contactForm'
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
          />
        </div>
        <div id="inBox shadow-none">
          <label>Phone Number</label>
          <input
            required
            type="number"
            class="form-control"
          />
        </div>
        <div id="inBox shadow-none">
          <label>Address (city, state)</label>
          <input
            required
            type="text"
            class="form-control"
          />
        </div>
          <label>Message(optional)</label>
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
    </form>
  </div>
  </div>
  )
}

export default Contact