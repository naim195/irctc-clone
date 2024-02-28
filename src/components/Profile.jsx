import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import "../styles/profile.css";
import "@fontsource/roboto/400.css";

const Profile = () => {
  const style = {
    fontFamily: 'Roboto, sans-serif'
  };
  
  // Initial state for user details
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    username: "",
    email: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    state: "",
  });

  // Function to handle updating user details
  const handleUpdateProfile = () => {
    // Implement your update logic here, for now, just log the updated details
    console.log("Updated user details:", userDetails);
  };

  // Function to handle input change for user details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div className="profile-page">
      <div className="img-container">Image</div>

      <Box component="form" className="box">
        <h1>Profile</h1>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          variant="outlined"
          value={userDetails.firstName}
          onChange={handleInputChange}
          fullWidth
          className="text-field"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={userDetails.lastName}
          onChange={handleInputChange}
          fullWidth
          className="text-field"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        />
        <TextField
          id="middleName"
          name="middleName"
          label="Middle Name"
          variant="outlined"
          value={userDetails.middleName}
          onChange={handleInputChange}
          fullWidth
          className="text-field"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        />
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          value={userDetails.username}
          onChange={handleInputChange}
          fullWidth
          className="text-field"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={userDetails.email}
          onChange={handleInputChange}
          fullWidth
          className="text-field"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        />
        <TextField
          id="gender"
          name="gender"
          label="Gender"
          variant="outlined"
          value={userDetails.gender}
          onChange={handleInputChange}
          fullWidth
          className="text-field"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        />
        <TextField
          id="dob"
          name="dob"
          label="Date of Birth"
          variant="outlined"
          value={userDetails.dob}
          onChange={handleInputChange}
          fullWidth
          className="text-field"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        />
        <TextField
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          variant="outlined"
          value={userDetails.phoneNumber}
          onChange={handleInputChange}
          fullWidth
          className="text-field"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        />
        <TextField
          id="state"
          name="state"
          label="State"
          variant="outlined"
          value={userDetails.state}
          onChange={handleInputChange}
          fullWidth
          className="text-field"
          style={{ marginTop: '10px', marginBottom: '10px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </Button>
      </Box>
    </div>
  );
};

export default Profile;
