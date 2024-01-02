import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { registerUser } from "../feature/auth/authSlice";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email address is required"),
    mobile: yup.string().required("Required"),
  password: yup.string().required("Password is required"),
});

const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
    //   alert("Email : " + values.email + "\n" + "Password : " + values.password);
    // console.log(values);
      dispatch(registerUser(values));
      setTimeout(()=>{
        // alert("Admin Created Successfully");
        navigate("/account-creation");
        // navigate("/");
      }, 1000)
    },
  });

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="inner_container_register d-flex flex-column">
        <h1 className="login_heading fs-3 text-center py-4">Register</h1>
        <div className="d-flex align-items-center justify-content-center">
          <form onSubmit={formik.handleSubmit}>
            <TextField
              className="my-2"
              fullWidth
              label="Name"
              name="name"
              variant="standard"
              autoComplete="off"
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
            />
            <div className="error mb-2">
              {formik.touched.name && formik.errors.name}
            </div>
            <TextField
              className="my-2"
              fullWidth
              label="Email"
              name="email"
              variant="standard"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            <div className="error mb-2">
              {formik.touched.email && formik.errors.email}
            </div>
            <TextField
              className="my-2"
              fullWidth
              label="Mobile"
              name="mobile"
              variant="standard"
              autoComplete="off"
              value={formik.values.mobile}
              onChange={formik.handleChange("mobile")}
              onBlur={formik.handleBlur("mobile")}
            />
            <div className="error mb-2">
              {formik.touched.mobile && formik.errors.mobile}
            </div>
              <TextField
                className="my-2"
                fullWidth
                label="Password"
                name="password"
                type="password"
                autoComplete="off"
                variant="standard"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
              />
              <div className="error mb-4">
                {formik.touched.password && formik.errors.password}
              </div>
            <Button
              type="submit"
              variant="contained"
              style={{ width: "300px" }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
