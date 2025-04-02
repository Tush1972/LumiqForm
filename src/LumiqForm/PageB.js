import React, { useState } from "react";
import "./pageB.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from 'yup';
import { AppointmentSection, Buttons, CalendarSection, EmailSection, ProcedureSection, RadioSection } from "../components/FormDataPageB";

const RegistrationB = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [appliedBefore, setAppliedBefore] = useState("");


  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address') // Ensures the input is a valid email
      .required('Email is required'), // Makes the field mandatory
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      department: "",
      procedure: "",
    },
    validationSchema,
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
        <EmailSection formik={formik} />
        <RadioSection appliedBefore={appliedBefore} setAppliedBefore={setAppliedBefore} />
        <AppointmentSection formik={formik} />
        <ProcedureSection formik={formik} />
        <CalendarSection selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
        <Buttons handleNext={handleNext} />
      </div>
    </form>
  );
};

export default RegistrationB;
