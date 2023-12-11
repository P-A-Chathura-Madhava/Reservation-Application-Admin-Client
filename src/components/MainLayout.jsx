import React from 'react'
import SideNav from './SideNav';
import Navbar from './Navbar';
import Dashboard from '../pages/Dashboard';


const MainLayout = () => {
  return (
    <>
        <Navbar />
        <SideNav />
        <Dashboard />
    </>
  );
}

export default MainLayout