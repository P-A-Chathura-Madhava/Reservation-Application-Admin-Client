import React from "react";
import SideNav from "../components/SideNav";
import { Box } from "@mui/material";
import NavigationBar from "../components/NavigationBar";

const Trains = () => {
  return (
    <div>
      <NavigationBar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Trains</h1>
        </Box>
      </Box>
    </div>
  );
};

export default Trains;
