import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/homepage/Navbar/Navbar";
import Section_1 from "./components/homepage/Sections/Section_1";
import BasicDetailForm from "./components/Form/BasicDetailForm";
import FormCalendar from "./components/Calendar/Calender";
import TestingDetailForm from "./components/Form/TestingDetailForm";
import ReturnFilingServices from "./Services/ReturnFilingServices";
import AssistedServices from "./Services/AssistedServices";
import Tools from "./Services/Tools";
import Allcards from "./Services/Allcards";
import { BMICalculator } from "./Calculators/BmiCalculators";
import LoanController from "./Calculators/EmiCalculator";
import DashboardName from "./Dashboard/DashboardName";
import Sidebar from "./components/homepage/Navbar/Navbar_Sidebar";
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import Help from "./SideComponents/Help";
import Settings from "./SideComponents/Settings";
import HelpTickets from "./SideComponents/HelpTickets";
import SavaAndLogout from "./SideComponents/SavaAndLogout";
import Apidata from "./ApiData/Apidata";


function App() {
  return (
    <div className="App">
      {/* <Register/> */}
       {/* <Navbar /> */}
    {/* <FormCalendar/> */}
      {/* <BasicDetailForm/> */}
      {/* <Navbar />
    
      <Routes>
        <Route path="/" element={<Section_1 />} />
        Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
   {/* <Register /> */}
   {/* <BasicDetailForm/> */}
   {/* <Navbar />
    
      <Routes>
        <Route path="/" element={<Section_1 />} />
       < Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />} />
      </Routes>  */}
      {/* <Navbar />  */}
       {/* <BasicDetailForm/>  */}
        {/* <TestingDetailForm/> */}
        {/* <FormCalendar/>  */}
       {/* <Allcards/> */}
       {/* <BMICalculator/> */}
       {/* <LoanController/> */}
       {/* <DashboardName/> */}
       {/* <Sidebar/> */}
       <Navbar_2/>

      <Routes>
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/helptickets" element={<HelpTickets/>} />
        <Route path="/saveandlogout" element={<SavaAndLogout/>} />
       < Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />} />
      </Routes> 
      <Apidata/>
    </div>
  );
}

export default App;
