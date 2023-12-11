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

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = {margin: "8px 0"};
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
        />
        <br />
        <br />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkB" color="primary" />}
          label="Primary"
        />
        <Button 
        type="submit" 
        color="primary" 
        fullWidth 
        variant="contained"
        style={btnStyle}
        >Sign in</Button>
        <Typography>
          <Link href="#">Forgot Password</Link>
        </Typography>        
        <Typography><p>Do you have an account?</p>
          <Link to="/sign-up">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
