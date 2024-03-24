import React, { useState, useEffect } from "react";
import "../styles/train.css";
import { Button } from "@mui/material";

const Train = ({ trainData, bookedTrains, setBookedTrains }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    setIsBooked(
      bookedTrains.some((train) => train.train_name === trainData.train_name)
    );
  }, [bookedTrains, trainData.train_name]);

  const handleBookClick = () => {
    if (isBooked) {
      setBookedTrains(
        bookedTrains.filter(
          (train) => train.train_name !== trainData.train_name
        )
      );
    } else {
      setBookedTrains([...bookedTrains, trainData]);
    }
  };

  return (
    <div className="ticket-bg">
      <div className="details">
        <p>{trainData.train_name}</p>
        <div className="days">
          <p>Runs on:</p>
          {days.map((day) => {
            if (trainData.run_days.includes(day)) {
              return (
                <span key={day} style={{ color: "green" }}>
                  {day + " "}
                </span>
              );
            } else {
              return (
                <span key={day} style={{ color: "red" }}>
                  {day + " "}
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
      <div className="timings">
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
          onClick={handleBookClick}
        >
          {isBooked ? "REMOVE FROM BOOKLIST" : "ADD TO BOOKLIST"}
        </Button>
      </div>
    </div>
  );
};

export default Train;
