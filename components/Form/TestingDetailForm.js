import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./BasicDetailForm.css";
import FormCalendar from "../Calendar/Calender";
import axios from "axios";
import { TextField } from "@material-ui/core";

export default function TestingDetailForm() {
  const [user, setUser] = useState({
    pan: "",
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    fathername: "",
    mobilenumber: "",
    aadharnum: "",
    brithdate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const [gender, setGender] = useState("");

  const selectGender = (value) => {
    setGender(value);
  };
  const register = (e) => {
    // const {
      
    // } = nuser;
  const pan = user.pan
  const email = user.email 
   const firstname =  user.firstname 
    const middlename = user.middlename 
    const lastname =  user.lastname 
    const fathername = user.fathername 
    const mobilenumber =  user.mobilenumber
     const aadharnum = user.aadharnum 
     const birthdate = user.brithdate
    const basicuser = {
        pan ,
        email,
        firstname,
        middlename,
        lastname,
        fathername,
        mobilenumber,
        aadharnum,
        gender,
      birthdate
      };
    if (
      pan &&
      email &&
      firstname &&
      middlename &&
      lastname &&
      fathername &&
      mobilenumber &&
      aadharnum &&
      gender &&
      birthdate
    ) {
      axios.post("http://localhost:5000/userbasicdetails", basicuser)
        //`${process.env.REACT_APP_REGISTER_API_URL}`,
        .then((res) => console.log(res));
    } else {
      alert("invalid input");
    }


  };
  function NewFormCalendar() {
  
    return (
        <div style={{
          margin: 'auto',
          display: 'block',
          width: 'fit-content'
        }}>
  
          <TextField
          name="brithdate"
          value={user.brithdate}
           onChange={handleChange}
            id="date"
            label="Choose your birthdate"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      );
  }
  return (
    <div>
      <div >
        <div >
          {/* <div className="basic_text">
            <h3>Let's start with your basic details</h3>
            //FOR TESTING
          </div> */}
          <input type="number"
                // placeholder="PAN"
                name="pan"
                value={user.pan}
                onChange={handleChange}/>
          <br/>
          <input   
                type="text"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleChange}/>
          <br/>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}/>
          <br/>
          <input
           type="text"
           placeholder="Middle Name"
           name="middlename"
           value={user.middlename}
           onChange={handleChange}/>
         <br/>
         {/* <div style={{
          margin: 'auto',
          display: 'block',
          width: 'fit-content'
        }}>
  
          <TextField
          // value={user.brithdate}
          // onChange={handleChange}
            id="date"
            name="birthdate"
            label="Choose your birthdate"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }} */}
          {/* /> */}
        {/* </div> */}
      <NewFormCalendar/>
        <br/>
          <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={user.lastname}
              onChange={handleChange}/>
                  <br/>
                <select
            //   className="mb-4"
              value={gender}
              onChange={(e) => selectGender(e.target.value)}
            >
          
              {/* <optgroup label="Select"> */}
              <option value="" disabled>
                --Please choose an option--
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>

              {/* </optgroup> */}
            </select>
            <br/>
          <input  placeholder="Father's Name"
                value={user.fathername}
                name="fathername"
                onChange={handleChange}/>
                    <br/>
          <input type="Number"
                placeholder="Mobile Number"
                name="mobilenumber"
                value={user.mobilenumber}
                onChange={handleChange}/>
                    <br/>
          <input
                type="Number"
                placeholder="12 digit Aadhar Number"
                name="aadharnum"
                // maxlength="12"
                value={user.aadharnum}
                onChange={handleChange}/>
          {/* <input/> */}
          <button variant="primary" className="Tbtn" onClick={register}/>
        </div>
      </div>
    </div>
  );
}

// export default BasicDetailForm;