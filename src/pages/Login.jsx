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
import React from "react";
import { Link } from "react-router-dom";

const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form action="">
          <TextField
            style={{ marginBottom: "12px" }}
            size="small"
            label="Username"
            placeholder="Enter Username"
            fullWidth
            required
          />
          <TextField
            size="small"
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox size="smaller" name="checkB" color="primary" />}
            label={<Typography sx={{ fontSize: 12 }}>Label Text</Typography>}
          />
          <Button
            component={Link}
            to={"/dashboard"}
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
