import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";

let userSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  mobile: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

// const createUser = (name, newEmail, mobile) => {
//   console.log(name, newEmail, mobile);
// };

const AddUserForm = ({ closeEvent }) => {

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      // console.log(values);
      // dispatch(createUser(values));
      // formik.resetForm();
    },
  });

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add User
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <form action="" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
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
            label="Email"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
            <div className="error mt-2">
              {formik.touched.email && formik.errors.email}
            </div>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Mobile"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange("mobile")}
            onBlur={formik.handleBlur("mobile")}
          />
            <div className="error mt-2">
              {formik.touched.mobile && formik.errors.mobile}
            </div>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
          />
            <div className="error mt-2">
              {formik.touched.password && formik.errors.password}
            </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button
              variant="contained"
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

export default AddUserForm;
