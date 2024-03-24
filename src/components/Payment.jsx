import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentForm({
  paymentSuccessful,
  setPaymentSuccessful,
  bookedTrains,
  setBookedTrains,
  currentTrain,
  setCurrentTrain,
}) {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setPaymentSuccessful(true);

    const updatedBookedTrains = bookedTrains.map((train) =>
      train.train_name === currentTrain
        ? { ...train, paymentSuccessful: true }
        : train,
    );

    setBookedTrains(updatedBookedTrains);
    navigate("/booklist");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required id="cardNumber" label="Card number" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="cvv" label="CVV" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="country" label="Country" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Pay Now
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
