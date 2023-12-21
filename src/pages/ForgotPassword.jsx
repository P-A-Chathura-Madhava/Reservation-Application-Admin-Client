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

const ForgotPassword = () => {
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
          <h2>Forgot Password</h2>
        </Grid>
        <form action="">
          <TextField
            style={{ marginBottom: "12px" }}
            size="small"
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
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
            Send E Mail
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default ForgotPassword