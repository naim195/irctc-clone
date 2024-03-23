import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import "@fontsource/roboto/500.css";
import "../styles/home.css";
import SearchResults from "./SearchResults";
import Train from "./train";
import trainsData from "./example_response.json";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [fromStation, setFromStation] = useState("");
  const [fromStationCode, setFromStationCode] = useState("");
  const [toStation, setToStation] = useState("");
  const [toStationCode, setToStationCode] = useState("");
  const [date, setDate] = useState("");
  const [allClasses, setAllClasses] = useState("");
  const [categories, setCategories] = useState("");
  const [click, setClick] = useState(false);

  const swapStations = () => {
    setFromStation(toStation);
    setToStation(fromStation);
  };

  //   const [trainData, setTrainData] = useState(null);

  //   useEffect(() => {
  //     const fetchTrainData = async () => {
  //       const url = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fromStationCode}&toStationCode=${toStationCode}&dateOfJourney=${date}`;
  //       const options = {
  //         method: "GET",
  //         headers: {
  //           "X-RapidAPI-Key": "45747f37a8msh7c90949bd88f173p144d08jsndceb691366e1",
  //           "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
  //         },
  //       };
  //       try {
  //         const response = await fetch(url, options);
  //         const result = await response.json();

  //         setTrainData(result);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchTrainData();
  //   }, [fromStationCode, toStationCode, date]);

  return (
    <div className="form-container">
      <div>Start your journey</div>
      <Box component="form" className="form">
        <div className="from-to">
          <TextField
            className="text-field"
            label="From"
            value={fromStation.toUpperCase()}
            onChange={(e) => setFromStation(e.target.value.toUpperCase())}
          />
          {fromStation != "" && (
            <SearchResults
              station={fromStation}
              setStation={setFromStation}
              code={fromStationCode}
              setCode={setFromStationCode}
            />
          )}
          <TextField
            className="text-field"
            label="To"
            value={toStation.toUpperCase()}
            onChange={(e) => setToStation(e.target.value.toUpperCase())}
          />
          {toStation != "" && (
            <SearchResults
              station={toStation}
              setStation={setToStation}
              code={toStationCode}
              setCode={setToStationCode}
            />
          )}

          <Button className="button" onClick={swapStations}>
            Swap
          </Button>
        </div>
        <div className="date-class">
          <TextField
            className="text-field"
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          <FormControl fullWidth>
            <InputLabel>All Classes</InputLabel>
            <Select
              value={allClasses}
              onChange={(e) => setAllClasses(e.target.value)}
              className="select"
              label="All Classes"
            >
              <MenuItem value="All Classes">All Classes</MenuItem>
              <MenuItem value="Second Sitting(2S)">Second Sitting(2S)</MenuItem>
              <MenuItem value="AC 3 Tier(3A)">AC 3 Tier(3A)</MenuItem>
              <MenuItem value="AC Chair Car(CC)">AC Chair Car(CC)</MenuItem>
              <MenuItem value="Exec. Chair Car(EC)">
                Exec. Chair Car(EC)
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              className="select"
              label="Categories"
            >
              <MenuItem value="GENERAL">GENERAL</MenuItem>
              <MenuItem value="LADIES">LADIES</MenuItem>
              <MenuItem value="LOWER BERTH/SR.CITIZEN">
                LOWER BERTH/SR.CITIZEN
              </MenuItem>
              <MenuItem value="PERSON WITH DISABILITY">
                PERSON WITH DISABILITY
              </MenuItem>
              <MenuItem value="DUTY PASS">DUTY PASS</MenuItem>
              <MenuItem value="TATKAL">TATKAL</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          className="button"
          variant="contained"
          color="primary"
          onClick={() => setClick(true)}
        >
          Search
        </Button>
      </Box>

      {trainsData.map((trainData) => (
        <Train key={uuidv4()} trainData={trainData} />
      ))}
    </div>
  );
};

export default Home;
