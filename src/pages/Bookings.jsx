import React from 'react'
import SideNav from "../components/SideNav";
import { Box, Typography } from "@mui/material";

const Bookings = () => {
  return (
    <div>
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Bookings</h1>
      </Box>
    </Box>
  </div>
  )
}

export default Bookings