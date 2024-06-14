import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Report = () => {
  const navigate=useNavigate();
  function handleSubmit()
  {
    navigate('/reportFeedback');
  }
  return (
    <div className='report'>
        <p class='text-muted' style={{marginLeft:'20px'}}>The details you provide with this form will be used to reach the nearest authority at the location of the stray animal.</p>
        <div style={{border:'3px solid orange',borderRadius:'5px', padding:'40px'}}>
          <form onSubmit={handleSubmit}>
            <div class='box1'>
              <label>Name</label>
              <input required type='text' placeholder='Enter your name'/>
            </div>
            <div class='box1'>
              <label>Email</label>
              <input required type='email' placeholder='Enter your email'/>
            </div>
            <div class='box1'>
              <label>Address(street address,city,pincode)</label>
              <input required type='text' placeholder='Enter your address'/>
            </div>
            <div class='box1'>
              <label>Landmark</label>
              <input required type='text' placeholder='Enter your nearest landmark to identify the location'/>
            </div>
            <div class='box1'>
              <label>Contact number</label>
              <input required type='number' placeholder='Enter your contact number'/>
            </div>
            <div class='box1'>
              <label>What type of stray animal?</label>
              <input required type='text' placeholder='E.g cat,dog,other'/>
            </div>
            <div class='box1'>
              <label>Would you like to share any additional information about the stray animal's condition?</label>
              <textarea required placeholder='Enter your comment here...'></textarea>
            </div>
            <button type="submit" style={{border:'1px solid orangered',background:'orangered',borderRadius:'5px',position:'relative',left:'35%',height:'40px',width:'130px',marginTop:'10px',}}>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Report