import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import "../styles/profile.css";
import "@fontsource/roboto/400.css";
import { db, auth } from "../firebase/firebase"; // Import the Firebase database instance
import { doc, setDoc, getDoc } from "firebase/firestore";

const Profile = () => {
  const style = {
    fontFamily: "Roboto, sans-serif",
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

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserDetails(userDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user profile: ", error);
      }
    };

    fetchUserProfile();
  }, []);

  // Function to handle updating user details
  const handleUpdateProfile = async () => {
    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userDocRef, userDetails);
    } catch (error) {
      console.error("Error updating user profile: ", error);
    }
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
          style={{ marginTop: "10px", marginBottom: "10px" }}
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
          style={{ marginTop: "10px", marginBottom: "10px" }}
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
          style={{ marginTop: "10px", marginBottom: "10px" }}
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
          style={{ marginTop: "10px", marginBottom: "10px" }}
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
          style={{ marginTop: "10px", marginBottom: "10px" }}
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
          style={{ marginTop: "10px", marginBottom: "10px" }}
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
          style={{ marginTop: "10px", marginBottom: "10px" }}
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
          style={{ marginTop: "10px", marginBottom: "10px" }}
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
          style={{ marginTop: "10px", marginBottom: "10px" }}
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
