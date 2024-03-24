import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import fareData from "../fare_data.json";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Booklist({ bookedTrains, setBookedTrains, currentTrain,setCurrentTrain }) {
  const navigate = useNavigate();

  // const [fareData, setFareData] = useState(null);

  // useEffect(() => {
  //   const fetchFareData = async () => {
  //     const url = `https://irctc1.p.rapidapi.com/api/v2/getFare?trainNo=${bookedTrains.train_number}&fromStationCode=${bookedTrains.train_src}&toStationCode=${bookedTrains.dstn}`;
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": "45747f37a8msh7c90949bd88f173p144d08jsndceb691366e1",
  //         "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();

  //       setFareData(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchFareData();
  // }, [bookedTrains]);

  const removeItem = (train_remove) => {
    setBookedTrains(
      bookedTrains.filter((train) => train.train_name != train_remove),
    );
  };

  const handlePayment = (trainName) => {
    setCurrentTrain(trainName);
    navigate('/payment');
  }

  return (
    <div key={uuidv4()}>
      <h4>Your booked tickets are :</h4>

      {bookedTrains.map((train) => (
        <div>
          <div key={uuidv4()}>
            <p>Train Name: {train.train_name}</p>
            <p>From: {train.from_station_name}</p>
            <p>To: {train.to_station_name}</p>
            <p>Fare: {fareData["data"]["general"][0]["fare"]}</p>
            <p>Train Number: {train.train_number}</p>
          </div>
          <div>
            <Button
              className="button"
              variant="contained"
              color="primary"
              onClick={() => removeItem(train.train_name)}
            >
              Remove Item
            </Button>
            <Button
              className="button"
              variant="contained"
              color="primary"
              onClick={()=>handlePayment(train.train_name)}
              disabled={train.paymentSuccessful}
            >
                    {train.paymentSuccessful ? 'Already Booked' : 'Book Now'}

            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
