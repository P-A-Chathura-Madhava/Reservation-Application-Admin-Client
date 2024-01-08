import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createTrain, resetState } from "../feature/train/trainSlice";
import { useEffect } from "react";

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

const AddTrainForm = ({ closeEvent }) => {
  const dispatch = useDispatch();
  const newTrain = useSelector((state) => state.train);

  const { isSuccess, isError, isLoading, createdTrain } = newTrain;

  useEffect(() => {
    if (isSuccess && createdTrain) {
      console.log("Train Added Successfullly!");
    }
  }, [isSuccess, isError, isLoading, createdTrain]);

  const formik = useFormik({
    initialValues: {
      number: "",
      name: "",
      from: "",
      to: "",
      seats: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createTrain(values));
      formik.resetForm();
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              style={{ marginBottom: "12px" }}
              size="small"
              label="Number"
              placeholder="10001"
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
            <TextField
              style={{ marginBottom: "12px" }}
              size="small"
              label="Name"
              placeholder="Colombo Fastline"
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
            <TextField
              style={{ marginBottom: "12px" }}
              size="small"
              label="From"
              placeholder="Colombo"
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
            <TextField
              style={{ marginBottom: "12px" }}
              size="small"
              label="To"
              placeholder="Kandy"
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
            <TextField
              style={{ marginBottom: "12px" }}
              size="small"
              label="Seats"
              placeholder="100"
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
              <Button variant="contained" type="submit">
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

export default AddTrainForm;
