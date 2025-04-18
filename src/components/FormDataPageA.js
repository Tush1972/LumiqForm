import { Formik } from "formik";
import React from "react";

const titles = ["Mr.", "Mrs.", "Ms."];
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

export const Header = ({ formik }) => (
        <div>
          <div className="background">
            <img 
              src="https://1.bp.blogspot.com/-W-qg9YHKU0o/YSSTVH_1iLI/AAAAAAAAEjM/sTw-Jn-Xcvo1jtl4axfoCWAytssdt3RmwCLcBGAsYHQ/s16000/lumiq_logo.png" 
              className="Lumiqimg" 
              alt="Lumiq Logo" 
            />
            <div className="address-section">
              <h2><strong>Lumiq</strong></h2>
              <p>8th Floor, TOWER-A, Noida One, B01, Sector 62,</p>
              <p>Noida, Uttar Pradesh 201307</p>
              <a href="https://www.lumiq.ai">www.lumiq.ai</a>
              <p>0123-45678</p>
            </div>
          </div>
          <div className="Form-img">
            <h1>Lumiq Form</h1>
            <img 
              src="https://thumbs.dreamstime.com/b/businessman-profile-icon-male-portrait-flat-design-vector-illustration-47075259.jpg" 
              className="Lumiqimg" 
              alt="Profile" 
            />
          </div>
        </div>
);

export const NameField = ({ formik }) => (
    <div className="form">
            <label><strong>Name</strong><span className="star">*</span></label>
        <div className="name-section">
            <select {...formik.getFieldProps("title")} className="name-textfield">
              <option value="">Select Title</option>
              {titles.map((title) => (
                <option key={title} value={title}>{title}</option>
              ))}
            </select>
            <input type="text" placeholder="First Name" className="name-textfield" {...formik.getFieldProps("firstName")} />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="error">{formik.errors.firstName}</div>
            )}
            <input type="text" placeholder="Middle Name" className="name-textfield" {...formik.getFieldProps("middleName")} />
            <input type="text" placeholder="Last Name" className="name-lastname" {...formik.getFieldProps("lastName")} />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="error">{formik.errors.lastName}</div>
            )}
        </div>
    </div>
);

export const DOBSection = ({formik}) => (
    <div className="form">
            <label><strong>Date Of Birth</strong><span className="star">*</span></label>
        <div className="dob-section">
            <input type="number" placeholder="Day" className="date-field" {...formik.getFieldProps("day")} />
            <select className="date-field" {...formik.getFieldProps("month")}>
              <option value="">Select Month</option>
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <input type="number" placeholder="Year" className="date-year" {...formik.getFieldProps("year")} />
        </div>
    </div>
);

export const GenderNumberSection = ({formik}) => (
    <div className="form">
            <label className="gender"><strong>Gender</strong></label>
            <label><strong>Phone Number</strong></label>
        <div className="gender-section">
            <select className="gender-field" {...formik.getFieldProps("gender")}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Third Gender">Third Gender</option>
            </select>
            <input type="text" placeholder="Phone Number" maxLength="10" className="phone-field" {...formik.getFieldProps("phoneNumber")} 
             onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "");
            }}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="error">{formik.errors.phoneNumber}</div>
            )}
        </div>  
    </div>
);

export const AddressSection = ({formik}) => (
    <div className="form">
        <label><strong>Address</strong></label>
        <input type="text" className="address-field" {...formik.getFieldProps("address")} />
    </div>
)

export const StreetSection = ({formik}) => (
    <div className="form">
        <label>Street Address</label>
        <input type="text" className="address-field" {...formik.getFieldProps("street1")} />
    </div>
)

export const StateSection = ({formik}) => (
    <div className="form">
        <label className="city">City</label>
        <label>State</label>
        <div className="gender-section">
        <input type="text" className="gender-field" {...formik.getFieldProps("city")} />
        <input type="text" className="phone-field" {...formik.getFieldProps("state")} />
        </div>
    </div>
)

export const PostalSection = ({formik}) => {
    <div className="form">
        <label>Postal/Zip Code</label>
        <input type="text" className="gender-field" {...formik.getFieldProps("postalCode")} />
    </div>
}

export const ButtonSection = ({formik}) => (
    <div className="button">
        <button type="submit" className="btn">Next</button>
    </div>
)

