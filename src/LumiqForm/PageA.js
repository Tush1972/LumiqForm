import React from 'react';
import './pageA.css';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AddressSection, ButtonSection, DOBSection, GenderNumberSection, Header, NameField, PostalSection, StateSection, StreetSection } from '../components/FormDataPageA';

const Registration = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Invalid Number")
      .required("Phone number is Required")
  });

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
    validationSchema,
    
    onSubmit: async (values) => {
      console.log("Form Submitted:", values);
      try {
        await axios.post("http://localhost:5000/api/register", values);
        navigate("/RegistrationB"); // Redirect on success
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error saving data!");
      }
    },
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="bg">
        <Header formik={formik} />
        <NameField formik = {formik} />
        <DOBSection formik={formik} />
        <GenderNumberSection formik={formik} />
        <AddressSection formik={formik} />
        <StreetSection formik={formik} />
        <StateSection formik={formik} />
        <PostalSection formik={formik} />
        <ButtonSection formik={formik} />
      </div>
    </form>
  );
};

export default Registration;
