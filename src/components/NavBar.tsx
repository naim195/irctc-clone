import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import IRCTCLogo from 'https://www.irctc.co.in/nget/assets/images/logo.png'; // Importing the local image

export const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton aria-label="irctc-logo" color="inherit">
            <img
              src={IRCTCLogo}
              alt="IRCTC Logo"
              style={{ width: "40px", height: "40px" }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
