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

const Home = () => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [date, setDate] = useState("");
  const [allClasses, setAllClasses] = useState("");
  const [categories, setCategories] = useState("");

  const swapStations = () => {
    setFromStation(toStation);
    setToStation(fromStation);
  };

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
            <SearchResults station={fromStation} setStation={setFromStation} />
          )}
          <TextField
            className="text-field"
            label="To"
            value={toStation.toUpperCase()}
            onChange={(e) => setToStation(e.target.value.toUpperCase())}
          />
          {toStation != "" && (
            <SearchResults station={toStation} setStation={setToStation} />
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
        <Button className="button" variant="contained" color="primary">
          Search
        </Button>
      </Box>
    </div>
  );
};

export default Home;
