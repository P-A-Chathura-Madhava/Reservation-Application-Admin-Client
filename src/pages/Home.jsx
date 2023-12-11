import React from "react";
import SideNav from "../components/SideNav";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
