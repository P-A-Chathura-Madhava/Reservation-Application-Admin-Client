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

const SignUp = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: -5 };

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
        <form>
          <TextField style={{marginBottom: "12px"}} size="small" fullWidth label="Name" placeholder="Enter your name" />
          <TextField style={{marginBottom: "12px"}} size="small" fullWidth label="Email" />
          <TextField style={{marginBottom: "12px"}} size="small" fullWidth label="Mobile" />
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
          <TextField style={{marginBottom: "12px"}} size="small" fullWidth label="Password" />
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
