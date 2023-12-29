import { AddCircle } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerUser } from "../feature/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const signupSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Required"),
  mobile: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

const SignUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: -5 };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      role: "admin"
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      // console.log(values);
      dispatch(registerUser(values));
      setTimeout(()=>{
        alert("Admin Created Successfully");
      }, 1000)
    },
  });

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircle />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account
          </Typography>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <TextField 
          // style={{marginBottom: "12px"}} 
          size="small" 
          name="name"
          fullWidth 
          label="Name" 
          placeholder="Enter your name" 
          value={formik.values.name}
          onChange={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
          />
          <div className="error mb-2">
            {formik.touched.name && formik.errors.name}
          </div>
          <div style={{height: "10px"}}></div>
          <TextField 
          // style={{marginBottom: "12px"}} 
          size="small" 
          name="email"
          fullWidth 
          label="Email" 
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          />
          <div className="error mb-2">
            {formik.touched.email && formik.errors.email}
          </div>
          <div style={{height: "10px"}}></div>
          <TextField 
          // style={{marginBottom: "12px"}} 
          size="small" 
          name="mobile"
          fullWidth 
          label="Mobile" 
          value={formik.values.mobile}
          onChange={formik.handleChange("mobile")}
          onBlur={formik.handleBlur("mobile")}
          />
          <div className="error mb-2">
            {formik.touched.mobile && formik.errors.mobile}
          </div>
          <div style={{height: "10px"}}></div>
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend" style={{fontSize: 12}}>Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
              style={{marginTop: -10}}
                value="female"
                control={<Radio size="small" />}
                label={            <Typography sx={{ fontSize: 12 }}>
                Female
              </Typography>}
              />
              <FormControlLabel 
              style={{marginTop: -10}}
              value="male" control={<Radio size="small" />} label={            <Typography sx={{ fontSize: 12 }}>
              Male
            </Typography>} />
            </RadioGroup>
          </FormControl>
          <TextField 
          // style={{marginBottom: "12px"}} 
          size="small"
          name="password" 
          fullWidth 
          label="Password" 
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          />
          <div className="error mb-2">
            {formik.touched.password && formik.errors.password}
          </div>
          <div style={{height: "10px"}}></div>
          <TextField style={{marginBottom: "12px"}} size="small" fullWidth label="Confirm Password" />
          <FormControlLabel
            style={{marginTop: -20}}
            control={<Checkbox name="checkbox" />}
            label="I accept the terms and conditions"
          />
          <Button fullWidth size="small" type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
