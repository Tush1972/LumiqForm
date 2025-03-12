import React from 'react'
import './pageA.css';
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/RegistrationB");
  };

  return (
    <form className='form-container'>
    <div className='bg'>
      <div>
          <div className='background'>
              <img src='https://1.bp.blogspot.com/-W-qg9YHKU0o/YSSTVH_1iLI/AAAAAAAAEjM/sTw-Jn-Xcvo1jtl4axfoCWAytssdt3RmwCLcBGAsYHQ/s16000/lumiq_logo.png' className='Lumiqimg'/>
              
              <div className='address-section'>
                  <h2><strong>Lumiq</strong></h2>
                  <p>8th Floor, TOWER-A, Noida One, B01, Sector 62,</p>
                  <p>Noida, Uttar Pradesh 201307</p>
                  <a href="https://www.lumiq.ai">www.lumiq.ai</a>
                  <p>0123-45678</p>
              </div>
          </div>
          
          <div className='Form-img'>
              <h1>Lumiq Form</h1>
              <img src='https://thumbs.dreamstime.com/b/businessman-profile-icon-male-portrait-flat-design-vector-illustration-47075259.jpg' className='Lumiqimg'/>
          </div>
      </div>
      <div className='form'>
        <label><strong>Name</strong><span className='star'>*</span></label>
        <div className='name-section'>
          <select className='name-textfield'><option>Select Title</option>
            <option>Mr.</option>
            <option>Mrs.</option>
          </select>
          <input type='text' placeholder='First Name' className='name-textfield' />          
          <input type='text' placeholder='Middle Name' className='name-textfield' />
          <input type='text' placeholder='Last Name' className='name-lastname' />
        </div>
      </div>
      <div className='form'>
        <label><strong>Date Of Birth</strong><span className='star'>*</span></label>
        <div className='dob-section'>
          <input type='number' placeholder='Day' className='date-field'/>
          <select className='date-field'><option>Select Month</option>
            <option>Jan</option><option>Feb</option><option>Mar</option><option>Apr</option><option>May</option><option>Jun</option>
            <option>Jul</option><option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option><option>Dev</option>
          </select>
          <input type='number' placeholder='Year' className='date-year'/>
        </div>
      </div>
      <div className='form'>
        <label className='gender'><strong>Gender</strong></label>
        <label><strong>Phone Number</strong></label>
        <div className='gender-section'>
          <select className='gender-field'><option>Select Gender</option>
            <option>Male</option><option>Female</option><option>Third Gender</option>
          </select>
          <input type='number' placeholder='Phone Number' className='phone-field'/>
        </div>
      </div>
      <div>
        <label><strong>Address</strong></label>
      </div>
      <div>
        <input type='text' className='address-field'/>
      </div>
      <div>
        <label>Street Address</label>
      </div>
      <div>
        <input type='text' className='address-field'/>
      </div>
      <div>
        <label>Street Address Line-2</label>
      </div>
      <div className='gender-section'>
        <input type='text' className='gender-field'/>
        <input type='text' className='phone-field'/>
      </div>
      <div>
        <label className='city'>City</label>
        <label>State</label>
      </div>
      <div>
        <input type='text' className='address-field'/>
      </div>
      <div className='address'>
        <label>Postal/Zip Code</label>
      </div>
      <div className='button'>
        <button className='btn' onClick={handleNext}>Next</button>
      </div>
      </div>
    </form>
  )
}

export default Registration