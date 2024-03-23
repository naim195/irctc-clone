import React, { useState, useEffect } from "react";
import "../styles/train.css";
import { Button } from "@mui/material";

const Train = ({ trainData }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [click, setClick] = useState(false);

  return (
    <div className="ticket-bg">
      <div>
        <p>{trainData.train_name}</p>
        <div className="days">
          <p>Runs on:</p>
          {days.map((day) => {
            if (trainData.run_days.includes(day)) {
              return (
                <span key={day} style={{ color: "green" }}>
                  {day}
                </span>
              );
            } else {
              return (
                <span key={day} style={{ color: "red" }}>
                  {day}
                </span>
              );
            }
          })}
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
        <p>
          {trainData.from_std} | {trainData.from_station_name}
        </p>
        <p>{trainData.duration}</p>
        <p>
          {trainData.to_sta} | {trainData.to_station_name}
        </p>
      </div>
      <div>
      <Button
          className="button"
          variant="contained"
          color="primary"
          onClick={()=>setClick(!click)}
        >
          {click? 'REMOVE FROM BOOKLIST':'ADD TO BOOKLIST'}
        </Button>
        <Button
          className="button"
          variant="contained"
          color="primary"
          
        >
          BOOK
        </Button>
      </div>
    </div>
  );
};

export default Train;
