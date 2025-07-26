import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import IndividualResidencyInfo from "./MechanicPages/IndividualResidencyInfo/IndividualResidencyInfo";
import BankVerification from "./MechanicPages/IndividualResidencyInfo/BankVerification";
import QualificationsVerification from "./MechanicPages/IndividualQualifications/QualificationsVerification";
import CustomerSupport from "./Pages/CustomerSupport/CustomerSupport";
import ServiceRequest1 from "./Pages/ServiceRequestForm/ServiceRequest1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mechanic-residency-info" element={<IndividualResidencyInfo />} />
      <Route path="/bank-verification" element={<BankVerification />} />
      <Route path="/qualifications-verification" element={<QualificationsVerification />} />
      <Route path="/customer-support" element={<CustomerSupport />} />
      <Route path="/servicerequest1" element={<ServiceRequest1 />} />
    </Routes>
  );
}

export default App;
