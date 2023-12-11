import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

const createTrain = (number, name, route, classes, seats) => {
  console.log(number, name, route, classes, seats);
};

const AddTrainForm = ({ closeEvent }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [trainClass, setTrainClass] = useState("");
  const [seats, setSeats] = useState("");

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add Train
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Mobile"
            variant="outlined"
            size="small"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Mobile"
            variant="outlined"
            size="small"
            value={trainClass}
            onChange={(e) => setTrainClass(e.target.value)}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Mobile"
            variant="outlined"
            size="small"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button
              variant="contained"
              onClick={createTrain(number, name, route, trainClass, seats)}
            >
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
};

export default AddTrainForm;
