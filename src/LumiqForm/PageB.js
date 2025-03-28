import React, { useState } from "react";
import "./pageB.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

const RegistrationB = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [appliedBefore, setAppliedBefore] = useState("");

  const timeSlots = ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      department: "",
      procedure: "",
    },
    onSubmit: async (values) => {
      const formData = {
        ...values,
        appliedBefore,
        appointmentDate: selectedDate.toDateString(),
        appointmentTime: selectedTime,
      };

      console.log("Submitting Form Data:", formData);

      try {
        await axios.post("http://localhost:5000/api/register", formData);
        alert("Form submitted successfully!");
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting form!");
      }
    },
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="bg">
        <div>
          <label><strong>Email</strong></label>
        </div>
        <div className="email-section">
          <input 
            type="email" placeholder="Enter Your Email" className="email-field" required {...formik.getFieldProps("email")}
          />
          <br />
          <p className="email-para">example@gmail.com</p>
        </div>

        <div className="radio-section">
          <label><strong>Have you ever applied to our facility before?</strong></label>
          <br />
          
          <input 
            type="radio" id="yes" name="appliedBefore" value="yes"
            onChange={(e) => setAppliedBefore(e.target.value)} 
            checked={appliedBefore === "yes"}
          />
          <label htmlFor="yes" className="radio-name">Yes</label>

          <input 
            type="radio" id="no" name="appliedBefore" value="no" 
            onChange={(e) => setAppliedBefore(e.target.value)} 
            checked={appliedBefore === "no"}
          />
          <label htmlFor="no">No</label>
          <br />

          <input 
            type="radio" id="other" name="appliedBefore" value="other" 
            onChange={(e) => setAppliedBefore(e.target.value)} 
            checked={appliedBefore === "other"}
          />
          <label htmlFor="other">Other</label>
        </div>

        <div className="radio-section">
          <label><strong>Which department would you like to get an appointment for?</strong></label>
          <br />
          <input 
            type="text" className="email-field" {...formik.getFieldProps("department")} required/>
        </div>

        <div className="procedure-section">
          <label className="procedure-dropbox"><strong>Which procedure do you want to make an appointment for?</strong></label>
          <br />
          <select className="procedure-dropbox" {...formik.getFieldProps("procedure")} required>
            <option value="">Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        {/* Calendar Section */}
        <label><strong>Preferred Appointment Date</strong></label>
        <div className="calendar-section">
          <div>
            <Calendar value={selectedDate} onChange={setSelectedDate} />
          </div>
          <div className="time-slots">
            {timeSlots.map((time) => (
              <button
                key={time} type="button" className={`time-btn ${selectedTime === time ? "selected" : ""}`}onClick={() => setSelectedTime(time)}>
                {time}
              </button>
            ))}
            <p> You selected: <strong>{selectedDate.toDateString()}</strong> at{" "}<strong>{selectedTime}</strong></p>
          </div>
        </div>

        {/* Buttons */}
        <div className="button-section">
          <button type="button" className="btn" onClick={handleNext}>
            Back
          </button>
          <button type="submit" className="btn">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationB;
