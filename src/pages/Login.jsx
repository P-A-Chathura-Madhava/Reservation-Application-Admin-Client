import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../feature/auth/authSlice";

const Login = ({ handleChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is Required"),
    password: yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(login(values));
    },
  });

  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "8px 0" };

  const authState = useSelector((state) => state);
  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (!user == null || isSuccess) {
      navigate("/dashboard");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <div className="error text-center">
          {message.message == "Rejected" ? "You are not an Admin" : ""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <TextField
            style={{ marginBottom: "12px" }}
            size="small"
            label="Email"
            placeholder="example@gmail.com"
            fullWidth
            required
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
          <div className="error mt-2">
            {formik.touched.email && formik.errors.email}
          </div>
          <TextField
            size="small"
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
          />
          <div className="error mt-2">
            {formik.touched.password && formik.errors.password}
          </div>
          <FormControlLabel
            control={<Checkbox size="smaller" name="checkB" color="primary" />}
            label={<Typography sx={{ fontSize: 12 }}>Label Text</Typography>}
          />
          <Button
            // component={button}
            // to={"/dashboard"}
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
            style={btnStyle}
          >
            Sign in
          </Button>
        </form>
        <Typography>
          <Link href="#" style={{ fontSize: "10px" }}>
            Forgot Password
          </Link>
        </Typography>
        <Typography>
          <p style={{ fontSize: "12px" }}>Do you have an account?</p>
          <Link
            style={{ fontSize: "12px" }}
            onClick={() => handleChange("event", 1)}
          >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
