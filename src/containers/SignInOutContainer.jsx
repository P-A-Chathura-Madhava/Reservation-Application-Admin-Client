import { Paper, Tab, Tabs, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const SignInOutContainer = () => {
    const theme = useTheme();
    const [value,setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const paperStyle = {width: 340, margin: "20px auto"}


  return (
    <Paper elevation={20} style={paperStyle}>
        <Tabs
            value={value}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleChange}
            aria-label='disabled tabs example'
            >
                <Tab label="Sign In" />
                <Tab label="Sign Up" />
            </Tabs>
            <TabPanel value={value} index={0} dir={theme.direction}>
          <Login handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <SignUp />
        </TabPanel>
    </Paper>
  )
}

export default SignInOutContainer