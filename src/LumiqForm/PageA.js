import React from 'react'
import './pageA.css';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Registration = () => {

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      day: "",
      month: "",
      year: "",
      gender: "",
      phoneNumber: "",
      address: "",
      street1: "",
      city: "",
      state: "",
      postalCode: "",
    },
    // validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      navigate("/RegistrationB");
    },
  });

  const titles = ["Mr.", "Mrs.", "Ms."];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <form className='form-container'onSubmit={formik.handleSubmit}>
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
        <select {...formik.getFieldProps("title")} name="title" className='name-textfield'>
          <option value="">Select Title</option>
          {titles.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
          <input required type='text' placeholder='First Name' className='name-textfield' {...formik.getFieldProps("firstName")} />          
          <input required type='text' placeholder='Middle Name' className='name-textfield' {...formik.getFieldProps("middleName")} />
          <input required type='text' placeholder='Last Name' className='name-lastname' {...formik.getFieldProps("lastName")} />
        </div>
      </div>
      <div className='form'>
        <label><strong>Date Of Birth</strong><span className='star'>*</span></label>
        <div className='dob-section'>
          <input required type='number' placeholder='Day' className='date-field' {...formik.getFieldProps("day")} />
          <select className='date-field' {...formik.getFieldProps("month")} ><option value = " ">Select Month</option>
            {months.map((months) => (
              <option key={months} value={months}>
                {months}
              </option>
            ))}
          </select>
          <input required type='number' placeholder='Year' className='date-year' {...formik.getFieldProps("year")} />
        </div>
      </div>
      <div className='form'>
        <label className='gender'><strong>Gender</strong></label>
        <label><strong>Phone Number</strong></label>
        <div className='gender-section'>
          <select className='gender-field' {...formik.getFieldProps("gender")} ><option>Select Gender</option>
            <option>Male</option><option>Female</option><option>Third Gender</option>
          </select>
          <input required type='number' placeholder='Phone Number' className='phone-field' {...formik.getFieldProps("phoneNumber")} />
        </div>
      </div>
      <div>
        <label><strong>Address</strong></label>
      </div>
      <div>
        <input required type='text' className='address-field' {...formik.getFieldProps("address")} />
      </div>
      <div>
        <label>Street Address</label>
      </div>
      <div>
        <input required type='text' className='address-field' {...formik.getFieldProps("street1")} />
      </div>
      <div>
        <label className='city'>City</label>
        <label>State</label>
      </div>
      <div className='gender-section'>
        <input required type='text' className='gender-field' {...formik.getFieldProps("city")} />
        <input required type='text' className='phone-field' {...formik.getFieldProps("state")}/>
      </div>
      <div className='address'>
        <label>Postal/Zip Code</label>
      <br/>
        <input required type='text' className='gender-field' {...formik.getFieldProps("postalCode")} />
      </div>
      <div className='button'>
        <button className='btn'>Next</button>
      </div>
      </div>
    </form>
  )
}

export default Registration