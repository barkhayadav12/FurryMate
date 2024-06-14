import React from 'react'
import { useNavigate } from 'react-router-dom';
const JoinTeam = () => {
    const navigate=useNavigate();
    function handleSubmit()
    {
      navigate('/supportFeedback');
    }
    return (
      <div className='support'>
          <div>
              <p class='text-muted' style={{textAlign:'center',fontSize:'20px'}}>Fill out the form below to become volunteer.</p>
          </div>
          <div class='formContent' style={{border:'3px solid orange',padding:'30px',borderRadius:'10px'}}>
          <form onSubmit={handleSubmit}>
    <div class="form-group" className='box'>
    <div class='inBox'>
      <label  for="exampleInputEmail1">Full name</label>
      <input required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Barkha Yadav"/>
      </div>
      <div class='inBox'>
      <label for="exampleInputEmail1">Email address</label>
      <input required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
    </div>
    <div class="form-group" className='box'>
    <div class='inBox'>
      <label  for="exampleInputEmail1">City</label>
      <input required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Imphal"/>
      </div>
      <div class='inBox'>
      <label for="exampleInputEmail1">State</label>
      <input required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Manipur"/>
      </div>
    </div>
    <div class="form-group" className='box'>
    <div class='inBox'>
      <label  for="exampleInputEmail1">Country</label>
      <input required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="India"/>
      </div>
      <div class='inBox'>
      <label for="exampleInputEmail1">Contact Number</label>
      <input required type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+91 0123456789"/>
      </div>
    </div>
    <div class="form-check" style={{marginTop:'15px'}}>
      <input required type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">I've read and agree to the T&C for volunteering to this <br/>organization.</label>
    </div>
    <button type="submit" style={{border:'1px solid orangered',background:'orangered',borderRadius:'5px',position:'relative',left:'35%',height:'40px',width:'130px',marginTop:'10px'}}>Submit</button>
  </form>
  </div>
      </div>
    )
  }

export default JoinTeam