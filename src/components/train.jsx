import React, { useState, useEffect } from "react";
import "../styles/train.css";
import { Button } from "@mui/material";

const Train = ({ trainData }) => {
  return (
    <div className="ticket-bg">
      <div>
        <p>{trainData.train_name}</p>
        <div className="days">
          <p>Runs on:</p>
        </div>
        <Button
          className="button"
          variant="contained"
          color="primary"
          href="https://www.indianrail.gov.in/enquiry/SCHEDULE/TrainSchedule.html"
          target="_blank"
        >
          Train Schedule
        </Button>
          </div>
          <div>
              <p></p>
          </div>
    </div>
  );
};

export default Train;
