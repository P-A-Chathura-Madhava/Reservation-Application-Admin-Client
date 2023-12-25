import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { resetState, updateTrain } from "../feature/train/trainSlice";
import { useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  number: yup
    .number()
    .integer("You must enter a number")
    .required("Number is Required"),
  name: yup.string().required("Required"),
  from: yup.string().required("Required"),
  to: yup.string().required("Required"),
  seats: yup.number().integer("You must enter a number").required("Required"),
});

// const createTrain = (number, name, route, trainClass, seats) => {
//   // console.log(number, name, route, trainClass, seats);
// };

const EditTrainForm = ({ fid, closeEvent }) => {
  const dispatch = useDispatch();
  const newTrain = useSelector((state) => state.train);

  const { isSuccess, isError, isLoading, updatedTrain } = newTrain;

  useEffect(() => {
    if (isSuccess && updatedTrain) {
      console.log("Train Added Successfullly!");
    }
  }, [isSuccess, isError, isLoading, updatedTrain]);

  const formik = useFormik({
    initialValues: {
      number: fid.number,
      name: fid.name,
      from: fid.from,
      to: fid.to,
      seats: fid.seats,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      formik.values.id = fid.id;
      dispatch(updateTrain(values));
      formik.resetForm();
      setTimeout(() => {
        // to stop getting train added successfully message again and again
        dispatch(resetState());
      }, 3000);
    },
  });

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [seats, setSeats] = useState();

  useEffect(() => {
    // console.log("id", fid.id);
    // console.log("name", fid.name);
    // console.log("number", fid.number);
    // console.log("from", fid.from);
    // console.log("to", fid.to);
    // console.log("seats", fid.seat);
    setNumber(fid.number);
    setName(fid.name);
    setFrom(fid.from);
    setTo(fid.to);
    setSeats(fid.seats);
  }, []);

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit Train
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              size="small"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              sx={{ minWidth: "100%" }}
            /> */}
            <TextField
              style={{ marginBottom: "12px" }}
              size="small"
              label="Number"
              fullWidth
              required
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange("number")}
              onBlur={formik.handleBlur("number")}
            />
            <div className="error mt-2">
              {formik.touched.number && formik.errors.number}
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ minWidth: "100%" }}
            /> */}
            <TextField
              style={{ marginBottom: "12px" }}
              size="small"
              label="Name"
              fullWidth
              required
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
            />
            <div className="error mt-2">
              {formik.touched.name && formik.errors.name}
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <TextField
              id="outlined-basic"
              label="From"
              variant="outlined"
              size="small"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              sx={{ minWidth: "100%" }}
            /> */}
            <TextField
              style={{ marginBottom: "12px" }}
              size="small"
              label="From"
              fullWidth
              required
              name="from"
              value={formik.values.from}
              onChange={formik.handleChange("from")}
              onBlur={formik.handleBlur("from")}
            />
            <div className="error mt-2">
              {formik.touched.from && formik.errors.from}
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <TextField
              id="outlined-basic"
              label="To"
              variant="outlined"
              size="small"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              sx={{ minWidth: "100%" }}
            /> */}
            <TextField
              style={{ marginBottom: "12px" }}
              size="small"
              label="To"
              fullWidth
              required
              name="to"
              value={formik.values.to}
              onChange={formik.handleChange("to")}
              onBlur={formik.handleBlur("to")}
            />
            <div className="error mt-2">
              {formik.touched.to && formik.errors.to}
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <TextField
              id="outlined-basic"
              label="Seats"
              variant="outlined"
              size="small"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              sx={{ minWidth: "100%" }}
            /> */}
            <TextField
              style={{ marginBottom: "12px" }}
              size="small"
              label="Seats"
              fullWidth
              required
              name="seats"
              value={formik.values.seats}
              onChange={formik.handleChange("seats")}
              onBlur={formik.handleBlur("seats")}
            />
            <div className="error mt-2">
              {formik.touched.seats && formik.errors.seats}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              <Button
                variant="contained"
                // onClick={createTrain(number, name, from, to, seats)}
                type="submit"
              >
                Submit
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </form>
      <Box sx={{ m: 4 }} />
    </>
  );
};

export default EditTrainForm;
