import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import './index.css'
import HomePage from "./Pages/HomePage/Home";
import App from "./App";
import Login from "./Pages/UserLogin/Login";
import UserRegister from "./Pages/UserRegister/UserRegister";
import MechanicLogin from "./MechanicPages/MechanicLogin/Mechanic";
import MechanicRegister from "./MechanicPages/MechanicRegister/MechanicRegister";
import IndividualRegister from "./MechanicPages/IndividualRegister/IndividualRegister";
import IndividualResidencyInfo from './MechanicPages/IndividualResidencyInfo/IndividualResidencyInfo';
import BankVerification from './MechanicPages/IndividualResidencyInfo/BankVerification';
import QualificationsVerification from './MechanicPages/IndividualQualifications/QualificationsVerification';
import CustomerSupport from "./Pages/CustomerSupport/CustomerSupport";
import ServiceRequest1 from "./Pages/ServiceRequestForm/ServiceRequest1";
import ServiceRequest2 from "./Pages/ServiceRequestForm/ServiceRequest2";
import ServiceRequest3 from "./Pages/ServiceRequestForm/ServiceRequest3";
import BusinessRegister1 from "./MechanicPages/BusinessMechanicRegister/BusinessRegister1";
import BusinessRegister2 from "./MechanicPages/BusinessMechanicRegister/BusinessRegister2";
import BusinessRegister3 from "./MechanicPages/BusinessMechanicRegister/BusinessRegister3";
import BusinessRegister4 from "./MechanicPages/BusinessMechanicRegister/BusinessRegister4";
import ForgetPwd1 from "./Pages/ForgetPassword/ForgetPwd1";
import ForgetPwd2 from "./Pages/ForgetPassword/ForgetPwd2";
import ResetPassword3 from "./Pages/ForgetPassword/ResetPassword3";
import SuccessfullyReset from "./Pages/ForgetPassword/SuccessfullyReset";
import SuccessfullyReset1 from "./MechanicPages/MechanicForgetpwd/SuccessfullyReset1";
import ForgetPwd from "./MechanicPages/MechanicForgetpwd/ForgetPwd";

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/mechanic-login" element={<MechanicLogin />} />
        <Route path="/mechanic-register" element={<MechanicRegister />} />
        <Route path="/mechanicregister" element={<MechanicRegister />} />
        <Route path="/mechanic-register/individual" element={<IndividualRegister />} />
        <Route path="/mechanic-register/individual-residency" element={<IndividualResidencyInfo />} />
        <Route path="/individual-residency-info" element={<IndividualResidencyInfo />} />
        <Route path="/bank-verification" element={<BankVerification />} />
        <Route path="/qualifications-verification" element={<QualificationsVerification />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/services" element={<ServiceRequest1 />} />
        <Route path="/servicerequest1" element={<ServiceRequest1 />} />
        <Route path="/servicerequest2" element={<ServiceRequest2 />} />
        <Route path="/servicerequest3" element={<ServiceRequest3 />} />
        <Route path="/mechanicregister1" element={<BusinessRegister1 />} />
        <Route path="/businessregister1" element={<BusinessRegister1 />} />
        <Route path="/businessregister2" element={<BusinessRegister2 />} />
        <Route path="/businessregister3" element={<BusinessRegister3 />} />
        <Route path="/businessregister4" element={<BusinessRegister4 />} />
        <Route path="/forgetpwd1" element={<ForgetPwd1 />} />
        <Route path="/mechanic-forgetpwd1" element={<ForgetPwd1 />} />
        <Route path="/forgetpwd2" element={<ForgetPwd2 />} />
        <Route path="/resetpassword3" element={<ResetPassword3 />} />
        <Route path="/successfullyreset" element={<SuccessfullyReset1 />} />
        <Route path="/mechanic-successfullyreset" element={<SuccessfullyReset1 />} />
        <Route path="/mechanic-forgetpwd" element={<ForgetPwd />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
